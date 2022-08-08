package dto_test

import (
	"encoding/json"
	"fmt"
	"testing"
	"time"

	"github.com/thomaspoignant/go-feature-flag/ffuser"
	"github.com/thomaspoignant/go-feature-flag/testutils/flagv1"

	"github.com/stretchr/testify/assert"
	"github.com/thomaspoignant/go-feature-flag/internal/dto"
	"github.com/thomaspoignant/go-feature-flag/internal/flag"
	"github.com/thomaspoignant/go-feature-flag/testutils/testconvert"
)

func TestConvertV0DtoToInternalFlag(t *testing.T) {
	tests := []struct {
		name string
		d    dto.DTO
		want flag.InternalFlag
	}{
		{
			name: "Simplest flag, no converter provided",
			d: dto.DTO{DTOv0: dto.DTOv0{
				True:    testconvert.Interface("true"),
				False:   testconvert.Interface("false"),
				Default: testconvert.Interface("default"),
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				Rules: nil,
				DefaultRule: &flag.Rule{
					Name: testconvert.String("legacyDefaultRule"),
					Percentages: &map[string]float64{
						"True":  0,
						"False": 100,
					},
				},
			},
		},
		{
			name: "Flag with percentage",
			d: dto.DTO{DTOv0: dto.DTOv0{
				Percentage: testconvert.Float64(10),
				True:       testconvert.Interface("true"),
				False:      testconvert.Interface("false"),
				Default:    testconvert.Interface("default"),
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				DefaultRule: &flag.Rule{
					Name: testconvert.String("legacyDefaultRule"),
					Percentages: &map[string]float64{
						"True":  10,
						"False": 90,
					},
				},
			},
		},
		{
			name: "Flag with 100 percentage",
			d: dto.DTO{DTOv0: dto.DTOv0{
				Percentage: testconvert.Float64(100),
				True:       testconvert.Interface("true"),
				False:      testconvert.Interface("false"),
				Default:    testconvert.Interface("default"),
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				Rules: nil,
				DefaultRule: &flag.Rule{
					Name: testconvert.String("legacyDefaultRule"),
					Percentages: &map[string]float64{
						"True":  100,
						"False": 0,
					},
				},
			},
		},
		{
			name: "Flag with rule not match",
			d: dto.DTO{DTOv0: dto.DTOv0{
				Rule:    testconvert.String("key eq \"random\""),
				True:    testconvert.Interface("true"),
				False:   testconvert.Interface("false"),
				Default: testconvert.Interface("default"),
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				Rules: &[]flag.Rule{
					{
						Name:  testconvert.String("legacyRuleV0"),
						Query: testconvert.String("key eq \"random\""),
						Percentages: &map[string]float64{
							"True":  0,
							"False": 100,
						},
					},
				},
				DefaultRule: &flag.Rule{
					Name:            testconvert.String("legacyDefaultRule"),
					VariationResult: testconvert.String("Default"),
				},
			},
		},
		{
			name: "Flag with rule match",
			d: dto.DTO{DTOv0: dto.DTOv0{
				Rule:    testconvert.String("key eq \"test-user\""),
				True:    testconvert.Interface("true"),
				False:   testconvert.Interface("false"),
				Default: testconvert.Interface("default"),
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				Rules: &[]flag.Rule{
					{
						Name:  testconvert.String("legacyRuleV0"),
						Query: testconvert.String("key eq \"test-user\""),
						Percentages: &map[string]float64{
							"True":  0,
							"False": 100,
						},
					},
				},
				DefaultRule: &flag.Rule{
					Name:            testconvert.String("legacyDefaultRule"),
					VariationResult: testconvert.String("Default"),
				},
			},
		},
		{
			name: "Flag with rule match + 10% percentage",
			d: dto.DTO{DTOv0: dto.DTOv0{
				Rule:       testconvert.String("key eq \"test-user\""),
				Percentage: testconvert.Float64(10),
				True:       testconvert.Interface("true"),
				False:      testconvert.Interface("false"),
				Default:    testconvert.Interface("default"),
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				Rules: &[]flag.Rule{
					{
						Name:  testconvert.String("legacyRuleV0"),
						Query: testconvert.String("key eq \"test-user\""),
						Percentages: &map[string]float64{
							"True":  10,
							"False": 90,
						},
					},
				},
				DefaultRule: &flag.Rule{
					Name:            testconvert.String("legacyDefaultRule"),
					VariationResult: testconvert.String("Default"),
				},
			},
		},
		{
			name: "Flag with query + experimentation rollout",
			d: dto.DTO{DTOv0: dto.DTOv0{
				Rule:       testconvert.String("key eq \"test-user\""),
				Percentage: testconvert.Float64(100),
				True:       testconvert.Interface("true"),
				False:      testconvert.Interface("false"),
				Default:    testconvert.Interface("default"),
				RolloutV0: &dto.RolloutV0{
					Experimentation: &dto.ExperimentationV0{
						Start: testconvert.Time(time.Date(2021, time.February, 1, 10, 10, 10, 10, time.UTC)),
						End:   testconvert.Time(time.Date(2021, time.February, 2, 10, 10, 10, 10, time.UTC)),
					},
				},
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				Rules: &[]flag.Rule{
					{
						Name:  testconvert.String("legacyRuleV0"),
						Query: testconvert.String("key eq \"test-user\""),
						Percentages: &map[string]float64{
							"True":  100,
							"False": 0,
						},
					},
				},
				DefaultRule: &flag.Rule{
					Name:            testconvert.String("legacyDefaultRule"),
					VariationResult: testconvert.String("Default"),
				},
				Rollout: &flag.Rollout{
					Experimentation: &flag.ExperimentationRollout{
						Start: testconvert.Time(time.Date(2021, time.February, 1, 10, 10, 10, 10, time.UTC)),
						End:   testconvert.Time(time.Date(2021, time.February, 2, 10, 10, 10, 10, time.UTC)),
					},
				},
			},
		},
		{
			name: "Flag with query + progressive rollout",
			d: dto.DTO{DTOv0: dto.DTOv0{
				Rule:       testconvert.String("key eq \"test-user\""),
				Percentage: testconvert.Float64(100),
				True:       testconvert.Interface("true"),
				False:      testconvert.Interface("false"),
				Default:    testconvert.Interface("default"),
				RolloutV0: &dto.RolloutV0{
					Progressive: &dto.ProgressiveV0{
						Percentage: dto.ProgressivePercentageV0{
							Initial: 0,
							End:     100,
						},
						ReleaseRamp: dto.ProgressiveReleaseRampV0{
							Start: testconvert.Time(time.Date(2021, time.February, 1, 10, 10, 10, 10, time.UTC)),
							End:   testconvert.Time(time.Date(2021, time.February, 2, 10, 10, 10, 10, time.UTC)),
						},
					},
				},
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				Rules: &[]flag.Rule{
					{
						Name:  testconvert.String("legacyRuleV0"),
						Query: testconvert.String("key eq \"test-user\""),
						ProgressiveRollout: &flag.ProgressiveRollout{
							Initial: &flag.ProgressiveRolloutStep{
								Variation:  testconvert.String("False"),
								Percentage: testconvert.Float64(0),
								Date:       testconvert.Time(time.Date(2021, time.February, 1, 10, 10, 10, 10, time.UTC)),
							},
							End: &flag.ProgressiveRolloutStep{
								Variation:  testconvert.String("True"),
								Percentage: testconvert.Float64(100),
								Date:       testconvert.Time(time.Date(2021, time.February, 2, 10, 10, 10, 10, time.UTC)),
							},
						},
					},
				},
				DefaultRule: &flag.Rule{
					Name:            testconvert.String("legacyDefaultRule"),
					VariationResult: testconvert.String("Default"),
				},
			},
		},
		{
			name: "Flag without query + progressive rollout",
			d: dto.DTO{DTOv0: dto.DTOv0{
				True:    testconvert.Interface("true"),
				False:   testconvert.Interface("false"),
				Default: testconvert.Interface("default"),
				RolloutV0: &dto.RolloutV0{
					Progressive: &dto.ProgressiveV0{
						Percentage: dto.ProgressivePercentageV0{
							Initial: 0,
							End:     100,
						},
						ReleaseRamp: dto.ProgressiveReleaseRampV0{
							Start: testconvert.Time(time.Date(2021, time.February, 1, 10, 10, 10, 10, time.UTC)),
							End:   testconvert.Time(time.Date(2021, time.February, 2, 10, 10, 10, 10, time.UTC)),
						},
					},
				},
			}},
			want: flag.InternalFlag{
				Variations: &map[string]*interface{}{
					"Default": testconvert.Interface("default"),
					"False":   testconvert.Interface("false"),
					"True":    testconvert.Interface("true"),
				},
				DefaultRule: &flag.Rule{
					Name: testconvert.String("legacyDefaultRule"),
					ProgressiveRollout: &flag.ProgressiveRollout{
						Initial: &flag.ProgressiveRolloutStep{
							Variation:  testconvert.String("False"),
							Percentage: testconvert.Float64(0),
							Date:       testconvert.Time(time.Date(2021, time.February, 1, 10, 10, 10, 10, time.UTC)),
						},
						End: &flag.ProgressiveRolloutStep{
							Variation:  testconvert.String("True"),
							Percentage: testconvert.Float64(100),
							Date:       testconvert.Time(time.Date(2021, time.February, 2, 10, 10, 10, 10, time.UTC)),
						},
					},
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			res := dto.ConvertV0DtoToInternalFlag(tt.d, false)
			m, _ := json.Marshal(res)
			fmt.Println(string(m))
			assert.Equal(t, tt.want, dto.ConvertV0DtoToInternalFlag(tt.d, false))
		})
	}
}

func TestConvertV0ScheduleStep(t *testing.T) {
	tests := []struct {
		name string
		dto  dto.DTO
	}{
		{
			name: "Update a rule that exists already",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					Rule:       testconvert.String("key eq \"yo\""),
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(95),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String("anonymous eq false"),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Update a rule that exists already + percentages",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					Rule:       testconvert.String("key eq \"yo\""),
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(95),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule:       testconvert.String("anonymous eq false"),
									Percentage: testconvert.Float64(5),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "No rule, update only percentages",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Percentage: testconvert.Float64(10),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "No rule, add rule which not match",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String("key eq \"ko\""),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "No rule, add rule which match",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String("key eq \"yo\""),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Change value of a variation",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									True: testconvert.Interface("newValue"),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Change percentage with no rule",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Percentage: testconvert.Float64(10),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Change percentage and add rule (not in percentage)",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule:       testconvert.String("key eq \"yo\""),
									Percentage: testconvert.Float64(10),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Change percentage and add rule (in percentage)",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule:       testconvert.String("key eq \"yo\""),
									Percentage: testconvert.Float64(50),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Add rule and remove rule + change percentages",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Rule:       testconvert.String("key eq \"yo\""),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String("key eq \"yo\""),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String(""),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Percentage: testconvert.Float64(10),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Rule with percentages, remove rule",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Rule:       testconvert.String("key eq \"yo\""),
					Percentage: testconvert.Float64(95),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String(""),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Rule with percentages, remove rule",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Rule:       testconvert.String("key eq \"yo\""),
					Percentage: testconvert.Float64(95),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String(""),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Rule with percentages, update progressive rollout in the past",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Rule:       testconvert.String("key eq \"yo\""),
					Percentage: testconvert.Float64(0),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									RolloutV0: &dto.RolloutV0{
										Progressive: &dto.ProgressiveV0{
											Percentage: dto.ProgressivePercentageV0{
												Initial: 0,
												End:     100,
											},
											ReleaseRamp: dto.ProgressiveReleaseRampV0{
												Start: testconvert.Time(time.Now().Add(-300 * time.Second)),
												End:   testconvert.Time(time.Now().Add(-1 * time.Second)),
											},
										},
									},
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Rule with percentages, update progressive rollout pending",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Rule:       testconvert.String("key eq \"yo\""),
					Percentage: testconvert.Float64(0),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									RolloutV0: &dto.RolloutV0{
										Progressive: &dto.ProgressiveV0{
											Percentage: dto.ProgressivePercentageV0{
												Initial: 0,
												End:     100,
											},
											ReleaseRamp: dto.ProgressiveReleaseRampV0{
												Start: testconvert.Time(time.Now().Add(-1 * time.Second)),
												End:   testconvert.Time(time.Now().Add(600 * time.Second)),
											},
										},
									},
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Schedule an experimentation",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Rule:       testconvert.String("key eq \"yo\""),
					Percentage: testconvert.Float64(0),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Percentage: testconvert.Float64(100),
									RolloutV0: &dto.RolloutV0{
										Experimentation: &dto.ExperimentationV0{
											Start: testconvert.Time(time.Now().Add(-1 * time.Second)),
											End:   testconvert.Time(time.Now().Add(600 * time.Second)),
										},
									},
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Multiple changes at the same time",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Rule:       testconvert.String("key eq \"yo\""),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Percentage: testconvert.Float64(10),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule: testconvert.String("key eq \"yo\""),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									True: testconvert.Interface("newValue"),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Percentage: testconvert.Float64(10),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule:       testconvert.String(""),
									Percentage: testconvert.Float64(100),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{
									Disable: testconvert.Bool(true),
								},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{
									Disable: testconvert.Bool(false),
									DTOv0: dto.DTOv0{
										Rule:       testconvert.String("anonymous eq false"),
										Percentage: testconvert.Float64(100),
									},
								},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									RolloutV0: &dto.RolloutV0{
										Experimentation: &dto.ExperimentationV0{
											Start: testconvert.Time(time.Now().Add(-2 * time.Second)),
											End:   testconvert.Time(time.Now().Add(2 * time.Second)),
										},
									},
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									RolloutV0: &dto.RolloutV0{
										Experimentation: &dto.ExperimentationV0{
											End: testconvert.Time(time.Now().Add(-2 * time.Second)),
										},
									},
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "No rule before, and update rule empty string",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:       testconvert.Interface("true"),
					False:      testconvert.Interface("false"),
					Default:    testconvert.Interface("default"),
					Percentage: testconvert.Float64(100),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									Rule:       testconvert.String(""),
									Percentage: testconvert.Float64(95),
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "No rule before, and no rule after just adding progressive rollout",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:    testconvert.Interface("true"),
					False:   testconvert.Interface("false"),
					Default: testconvert.Interface("default"),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{DTOv0: dto.DTOv0{
									RolloutV0: &dto.RolloutV0{
										Progressive: &dto.ProgressiveV0{
											Percentage: dto.ProgressivePercentageV0{
												Initial: 0,
												End:     100,
											},
											ReleaseRamp: dto.ProgressiveReleaseRampV0{
												Start: testconvert.Time(time.Now().Add(10 * time.Minute)),
												End:   testconvert.Time(time.Now().Add(20 * time.Minute)),
											},
										},
									},
								}},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "Update rule + add progressive",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:    testconvert.Interface("true"),
					False:   testconvert.Interface("false"),
					Default: testconvert.Interface("default"),
					Rule:    testconvert.String("key eq \"yo\""),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{
									TrackEvents: testconvert.Bool(true),
									Version:     testconvert.String("1.0.1"),
									DTOv0: dto.DTOv0{
										Rule: testconvert.String("anonymous eq false"),
										RolloutV0: &dto.RolloutV0{
											Progressive: &dto.ProgressiveV0{
												Percentage: dto.ProgressivePercentageV0{
													Initial: 0,
													End:     100,
												},
												ReleaseRamp: dto.ProgressiveReleaseRampV0{
													Start: testconvert.Time(time.Now().Add(-10 * time.Minute)),
													End:   testconvert.Time(time.Now().Add(0 * time.Minute)),
												},
											},
										},
									},
								},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "No rule + add rule and progressive",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:    testconvert.Interface("true"),
					False:   testconvert.Interface("false"),
					Default: testconvert.Interface("default"),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{
									TrackEvents: testconvert.Bool(true),
									Version:     testconvert.String("1.0.1"),
									DTOv0: dto.DTOv0{
										Rule: testconvert.String("anonymous eq false"),

										RolloutV0: &dto.RolloutV0{
											Progressive: &dto.ProgressiveV0{
												Percentage: dto.ProgressivePercentageV0{
													Initial: 0,
													End:     100,
												},
												ReleaseRamp: dto.ProgressiveReleaseRampV0{
													Start: testconvert.Time(time.Now().Add(-10 * time.Minute)),
													End:   testconvert.Time(time.Now().Add(0 * time.Minute)),
												},
											},
										},
									},
								},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
		{
			name: "No rule + add empty rule and progressive",
			dto: dto.DTO{
				DTOv0: dto.DTOv0{
					True:    testconvert.Interface("true"),
					False:   testconvert.Interface("false"),
					Default: testconvert.Interface("default"),
					RolloutV0: &dto.RolloutV0{
						Scheduled: &dto.ScheduledRolloutV0{Steps: []dto.ScheduledStepV0{
							{
								DTO: dto.DTO{
									TrackEvents: testconvert.Bool(true),
									Version:     testconvert.String("1.0.1"),
									DTOv0: dto.DTOv0{
										Rule: testconvert.String(""),

										RolloutV0: &dto.RolloutV0{
											Progressive: &dto.ProgressiveV0{
												Percentage: dto.ProgressivePercentageV0{
													Initial: 0,
													End:     100,
												},
												ReleaseRamp: dto.ProgressiveReleaseRampV0{
													Start: testconvert.Time(time.Now().Add(-10 * time.Minute)),
													End:   testconvert.Time(time.Now().Add(0 * time.Minute)),
												},
											},
										},
									},
								},
								Date: testconvert.Time(time.Now().Add(-2 * time.Second)),
							},
						}},
					},
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			u := ffuser.NewUser("yo")
			flagName := "yo"

			convertInternalFlag := tt.dto.Convert()
			gotInternalFlag, resolutionDetails := convertInternalFlag.Value(flagName, u, flag.EvaluationContext{})

			convertFlagv1 := flagv1.ConvertDtoToV1(tt.dto)
			gotFlagV1, resolutionDetails1 := convertFlagv1.Value(flagName, u, flag.EvaluationContext{})

			fmt.Println(gotFlagV1, gotInternalFlag)
			assert.Equal(t, gotFlagV1, gotInternalFlag)
			assert.Equal(t, resolutionDetails.Variant, resolutionDetails1.Variant)
			assert.Equal(t, resolutionDetails.ErrorCode, resolutionDetails1.ErrorCode)
		})
	}
}
