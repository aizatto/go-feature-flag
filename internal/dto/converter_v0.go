package dto

import (
	"github.com/thomaspoignant/go-feature-flag/internal/flag"
)

var (
	LegacyRuleName  = "legacyRuleV0"
	defaultRuleName = "legacyDefaultRule"

	trueVariation     = "True"
	falseVariation    = "False"
	defaultVariation  = "Default"
	defaultPercentage = float64(0)

	emptyVarRes      = ""
	disableRuleValue = true
	enableRuleValue  = false
)

// ConvertV0DtoToInternalFlag is converting a flag in the config file to the internal format.
// this function convert only the old format of the flag (before v1.0.0), to keep
// backward support of the configurations.
func ConvertV0DtoToInternalFlag(d DTO, isScheduledStep bool) flag.InternalFlag {
	// Create variations based on the available definition in the flag v0
	var variations *map[string]*interface{}
	newVariations := createVariationsV0(d, isScheduledStep)
	if newVariations != nil {
		variations = newVariations
	}

	var rules *[]flag.Rule
	var defaultRule *flag.Rule
	if d.Rule != nil && *d.Rule != "" {
		rules = &[]flag.Rule{createLegacyRuleV0(d)}
		defaultRule = createDefaultLegacyRuleV0(d, true)
	} else {
		rules = nil
		defaultRule = createDefaultLegacyRuleV0(d, false)
	}

	internalFlag := flag.InternalFlag{
		Variations:  variations,
		Rules:       rules,
		DefaultRule: defaultRule,
		TrackEvents: d.TrackEvents,
		Disable:     d.Disable,
		Version:     d.Version,
	}

	var rollout *flag.Rollout
	if d.RolloutV0 != nil && (d.RolloutV0.Experimentation != nil || d.RolloutV0.Scheduled != nil) {
		rollout = convertRollout(d, internalFlag)
	}

	internalFlag.Rollout = rollout
	return internalFlag
}

// createDefaultLegacyRuleV0 create the default rule based on the legacy format.
func createDefaultLegacyRuleV0(d DTO, hasTargetRule bool) *flag.Rule {
	hasProgressiveRollout := d.RolloutV0 != nil &&
		d.RolloutV0.Progressive != nil &&
		d.RolloutV0.Progressive.ReleaseRamp.Start != nil &&
		d.RolloutV0.Progressive.ReleaseRamp.End != nil

	if hasProgressiveRollout && !hasTargetRule {
		return &flag.Rule{
			Name: &defaultRuleName,
			ProgressiveRollout: &flag.ProgressiveRollout{
				Initial: &flag.ProgressiveRolloutStep{
					Variation:  &falseVariation,
					Percentage: &d.RolloutV0.Progressive.Percentage.Initial,
					Date:       d.RolloutV0.Progressive.ReleaseRamp.Start,
				},
				End: &flag.ProgressiveRolloutStep{
					Variation:  &trueVariation,
					Percentage: &d.RolloutV0.Progressive.Percentage.End,
					Date:       d.RolloutV0.Progressive.ReleaseRamp.End,
				},
			},
		}
	}

	if d.Rule == nil {
		if d.Percentage == nil {
			d.Percentage = &defaultPercentage
		}

		p := computePercentages(*d.Percentage)
		return &flag.Rule{
			Name:            &defaultRuleName,
			Percentages:     p,
			VariationResult: nil,
		}
	}

	return &flag.Rule{
		Name:            &defaultRuleName,
		VariationResult: &defaultVariation,
		Percentages:     nil,
	}
}

// createLegacyRuleV0 will create a rule based on the previous format
func createLegacyRuleV0(d DTO) flag.Rule {
	// Handle the specific use case of progressive rollout.
	var progressiveRollout *flag.ProgressiveRollout
	if d.RolloutV0 != nil &&
		d.RolloutV0.Progressive != nil &&
		d.RolloutV0.Progressive.ReleaseRamp.Start != nil &&
		d.RolloutV0.Progressive.ReleaseRamp.End != nil {
		progressiveRollout = &flag.ProgressiveRollout{
			Initial: &flag.ProgressiveRolloutStep{
				Variation:  &falseVariation,
				Percentage: &d.RolloutV0.Progressive.Percentage.Initial,
				Date:       d.RolloutV0.Progressive.ReleaseRamp.Start,
			},
			End: &flag.ProgressiveRolloutStep{
				Variation:  &trueVariation,
				Percentage: &d.RolloutV0.Progressive.Percentage.End,
				Date:       d.RolloutV0.Progressive.ReleaseRamp.End,
			},
		}
	}

	var percentages *map[string]float64
	if progressiveRollout == nil {
		if d.Percentage != nil {
			percentages = computePercentages(*d.Percentage)
		} else {
			percentages = &map[string]float64{
				trueVariation:  0,
				falseVariation: 100,
			}
		}
	}

	return flag.Rule{
		Name:               &LegacyRuleName,
		Query:              d.Rule,
		Percentages:        percentages,
		ProgressiveRollout: progressiveRollout,
	}
}

// createVariationsV0 will create a set of variations based on the previous format
func createVariationsV0(d DTO, isScheduleStep bool) *map[string]*interface{} {
	variations := make(map[string]*interface{}, 3)
	if d.True != nil {
		variations[trueVariation] = d.True
	}
	if d.False != nil {
		variations[falseVariation] = d.False
	}
	if d.Default != nil {
		variations[defaultVariation] = d.Default
	}

	if isScheduleStep && len(variations) == 0 {
		return nil
	}
	return &variations
}

// createScheduledStep is converting the old format of scheduled step to the new one.
// since the format has changed a lot the logic in this function is a bit complex to follow.
// In the tests we are testing that we have the same results as the one returns by the old
// flag logic.
func createScheduledStep(f flag.InternalFlag, dto ScheduledStepV0) flag.ScheduledStep {
	step := flag.ScheduledStep{
		Date: dto.Date,
		InternalFlag: flag.InternalFlag{
			Variations: createVariationsV0(dto.DTO, true),
		},
	}

	legacyRuleIndex := f.GetRuleIndexByName(LegacyRuleName)
	hasRuleBefore := legacyRuleIndex != nil && !f.GetRules()[*legacyRuleIndex].IsDisable()
	updateRule := dto.Rule != nil
	progressive := convertScheduledStepProgressiveRollout(dto)

	switch {
	case hasRuleBefore && !updateRule:
		if progressive != nil {
			step.Rules = &[]flag.Rule{{Name: &LegacyRuleName, ProgressiveRollout: progressive}}
		} else if dto.Percentage != nil {
			step.Rules = &[]flag.Rule{{Name: &LegacyRuleName, Percentages: computePercentages(*dto.Percentage)}}
		}
		break

	case !hasRuleBefore && updateRule:
		if *dto.Rule == "" {
			step.Rules = &[]flag.Rule{{Name: &LegacyRuleName, Disable: &disableRuleValue}}
			step.DefaultRule = &flag.Rule{Name: &defaultRuleName}

			if progressive != nil {
				step.DefaultRule.ProgressiveRollout = progressive
			} else if dto.Percentage != nil {
				step.DefaultRule.Percentages = computePercentages(*dto.Percentage)
			}
		} else {
			r := flag.Rule{Name: &LegacyRuleName, Disable: &enableRuleValue, Query: dto.Rule}

			switch {
			case progressive != nil:
				r.ProgressiveRollout = progressive
				break
			case dto.Percentage != nil:
				r.Percentages = computePercentages(*dto.Percentage)
				break
			case f.DefaultRule != nil && f.DefaultRule.Percentages != nil && len(f.GetDefaultRule().GetPercentages()) > 0:
				r.Percentages = deepCopyPercentages(f.GetDefaultRule().GetPercentages())
				break
			default:
				// no explicit percentage, default value is 0
				r.Percentages = computePercentages(0)
				break
			}
			step.Rules = &[]flag.Rule{r}

			// clean up the default value
			step.DefaultRule = &flag.Rule{
				Name:            &defaultRuleName,
				Percentages:     &map[string]float64{trueVariation: -1, falseVariation: -1},
				VariationResult: &defaultVariation,
			}
		}
		break

	case !hasRuleBefore && !updateRule:
		if progressive != nil {
			step.DefaultRule = &flag.Rule{VariationResult: &emptyVarRes, Name: &defaultRuleName, ProgressiveRollout: progressive}
		} else if dto.Percentage != nil {
			step.DefaultRule = &flag.Rule{
				VariationResult: &emptyVarRes,
				Name:            &defaultRuleName,
				Percentages:     computePercentages(*dto.Percentage),
			}
		}
		break

	case hasRuleBefore && updateRule:
		r := flag.Rule{Name: &LegacyRuleName, Query: dto.Rule, Disable: &enableRuleValue}

		if progressive != nil {
			r.VariationResult = &emptyVarRes
			r.ProgressiveRollout = progressive
		} else if dto.Percentage != nil {
			r.VariationResult = &emptyVarRes
			r.Percentages = computePercentages(*dto.Percentage)
		}
		step.Rules = &[]flag.Rule{r}
		break
	}

	step.Disable = dto.Disable
	step.TrackEvents = dto.TrackEvents
	step.Version = dto.Version
	return step
}

func convertRollout(dto DTO, f flag.InternalFlag) *flag.Rollout {
	r := flag.Rollout{}
	if dto.RolloutV0.Experimentation != nil &&
		dto.RolloutV0.Experimentation.Start != nil &&
		dto.RolloutV0.Experimentation.End != nil {
		r.Experimentation = &flag.ExperimentationRollout{
			Start: dto.RolloutV0.Experimentation.Start,
			End:   dto.RolloutV0.Experimentation.End,
		}
	}

	// it is not allowed to have a scheduled step inside a scheduled step
	if dto.RolloutV0.Scheduled != nil && dto.RolloutV0.Scheduled.Steps != nil {
		var convertedSteps []flag.ScheduledStep
		for _, v := range dto.RolloutV0.Scheduled.Steps {
			convertedSteps = append(convertedSteps, createScheduledStep(f, v))
		}
		r.Scheduled = &convertedSteps
	}
	return &r
}

// computePercentages is creating the percentage structure based on the
// field percentage in the DTO.
func computePercentages(percentage float64) *map[string]float64 {
	return &map[string]float64{
		trueVariation:  percentage,
		falseVariation: 100 - percentage,
	}
}

// deepCopyPercentages is creating a new map with the same values
func deepCopyPercentages(in map[string]float64) *map[string]float64 {
	p := make(map[string]float64, len(in))
	// deep copy of the percentages to avoid being override
	for k, v := range in {
		p[k] = v
	}
	return &p
}

// convertProgressiveRollout convert the legacy format to the new format.
// If we can't convert we return a nil value.
func convertScheduledStepProgressiveRollout(dto ScheduledStepV0) *flag.ProgressiveRollout {
	hasProgressiveRollout := dto.RolloutV0 != nil &&
		dto.RolloutV0.Progressive != nil &&
		dto.RolloutV0.Progressive.ReleaseRamp.End != nil &&
		dto.RolloutV0.Progressive.ReleaseRamp.Start != nil

	var progressive *flag.ProgressiveRollout
	if hasProgressiveRollout {
		progressive = &flag.ProgressiveRollout{
			Initial: &flag.ProgressiveRolloutStep{
				Variation:  &falseVariation,
				Percentage: &dto.RolloutV0.Progressive.Percentage.Initial,
				Date:       dto.RolloutV0.Progressive.ReleaseRamp.Start,
			},
			End: &flag.ProgressiveRolloutStep{
				Variation:  &trueVariation,
				Percentage: &dto.RolloutV0.Progressive.Percentage.End,
				Date:       dto.RolloutV0.Progressive.ReleaseRamp.End,
			},
		}
	}
	return progressive
}
