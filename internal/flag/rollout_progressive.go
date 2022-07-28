package flag

import (
	"time"
)

// ProgressiveRollout represents how to progressively roll out a originalRule.
type ProgressiveRollout struct {
	// Initial contains a description of the initial state of the rollout.
	Initial *ProgressiveRolloutStep `json:"initial,omitempty" yaml:"initial,omitempty" toml:"initial,omitempty"`

	// End contains what describes the end status of the rollout.
	End *ProgressiveRolloutStep `json:"end,omitempty" yaml:"end,omitempty" toml:"end,omitempty"`
}

// ProgressiveRolloutStep define a progressive rollout step (initial and end)
type ProgressiveRolloutStep struct {
	Variation  *string
	Percentage *float64
	Date       *time.Time
}

func (p *ProgressiveRolloutStep) getVariation() string {
	if p.Variation == nil {
		return ""
	}
	return *p.Variation
}

func (p *ProgressiveRolloutStep) getPercentage() float64 {
	if p.Percentage == nil {
		return 0
	}
	return *p.Percentage
}

// mergeStep is a function that take a ProgressiveRolloutStep and update the current instance
// with all the fields that are here to be overridden.
func (p *ProgressiveRolloutStep) mergeStep(updatedStep *ProgressiveRolloutStep) {
	if updatedStep.Variation != nil {
		p.Variation = updatedStep.Variation
	}
	if updatedStep.Date != nil {
		p.Date = updatedStep.Date
	}
	if updatedStep.Percentage != nil {
		p.Percentage = updatedStep.Percentage
	}
}
