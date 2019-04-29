// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class DicData {
	@PrimaryColumn({
    name: 'date',
		type: 'timestamptz'
  })
	date: Date

	@Column({
    nullable: true,
		name: 'edu_001_art_sessions',
		type: 'integer'
  })
	edu001ArtSessions: number

	@Column({
    nullable: true,
		name: 'edu_a_01_new_sw',
		type: 'integer'
  })
	eduA01NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_01_new_msm',
		type: 'integer'
  })
	eduA01NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_01_new_other',
		type: 'integer'
  })
	eduA01NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_01_repeater_sw',
		type: 'integer'
  })
	eduB01RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_01_repeater_msm',
		type: 'integer'
  })
	eduB01RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_01_repeater_other',
		type: 'integer'
  })
	eduB01RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_002_art_support_group',
		type: 'integer'
  })
	edu002ArtSupportGroup: number

	@Column({
    nullable: true,
		name: 'edu_a_02_new_sw',
		type: 'integer'
  })
	eduA02NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_02_new_msm',
		type: 'integer'
  })
	eduA02NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_02_new_other',
		type: 'integer'
  })
	eduA02NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_02_repeater_sw',
		type: 'integer'
  })
	eduB02RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_02_repeater_msm',
		type: 'integer'
  })
	eduB02RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_02_repeater_other',
		type: 'integer'
  })
	eduB02RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_003_bomb_book',
		type: 'integer'
  })
	edu003BombBook: number

	@Column({
    nullable: true,
		name: 'edu_a_03_new_sw',
		type: 'integer'
  })
	eduA03NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_03_new_msm',
		type: 'integer'
  })
	eduA03NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_03_new_other',
		type: 'integer'
  })
	eduA03NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_03_repeater_sw',
		type: 'integer'
  })
	eduB03RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_03_repeater_msm',
		type: 'integer'
  })
	eduB03RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_03_repeater_other',
		type: 'integer'
  })
	eduB03RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_004_contraception',
		type: 'integer'
  })
	edu004Contraception: number

	@Column({
    nullable: true,
		name: 'edu_a_04_new_sw',
		type: 'integer'
  })
	eduA04NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_04_new_msm',
		type: 'integer'
  })
	eduA04NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_04_new_other',
		type: 'integer'
  })
	eduA04NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_04_repeater_sw',
		type: 'integer'
  })
	eduB04RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_04_repeater_msm',
		type: 'integer'
  })
	eduB04RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_04_repeater_other',
		type: 'integer'
  })
	eduB04RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_005_dice_to_know',
		type: 'integer'
  })
	edu005DiceToKnow: number

	@Column({
    nullable: true,
		name: 'edu_a_05_new_sw',
		type: 'integer'
  })
	eduA05NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_05_new_msm',
		type: 'integer'
  })
	eduA05NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_05_new_other',
		type: 'integer'
  })
	eduA05NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_05_repeater_sw',
		type: 'integer'
  })
	eduB05RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_05_repeater_msm',
		type: 'integer'
  })
	eduB05RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_05_repeater_other',
		type: 'integer'
  })
	eduB05RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_006_educational_games',
		type: 'integer'
  })
	edu006EducationalGames: number

	@Column({
    nullable: true,
		name: 'edu_a_06_new_sw',
		type: 'integer'
  })
	eduA06NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_06_new_msm',
		type: 'integer'
  })
	eduA06NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_06_new_other',
		type: 'integer'
  })
	eduA06NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_06_repeater_sw',
		type: 'integer'
  })
	eduB06RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_06_repeater_msm',
		type: 'integer'
  })
	eduB06RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_06_repeater_other',
		type: 'integer'
  })
	eduB06RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_007_female_condom',
		type: 'integer'
  })
	edu007FemaleCondom: number

	@Column({
    nullable: true,
		name: 'edu_a_07_new_sw',
		type: 'integer'
  })
	eduA07NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_07_new_msm',
		type: 'integer'
  })
	eduA07NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_07_new_other',
		type: 'integer'
  })
	eduA07NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_07_repeater_sw',
		type: 'integer'
  })
	eduB07RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_07_repeater_msm',
		type: 'integer'
  })
	eduB07RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_07_repeater_other',
		type: 'integer'
  })
	eduB07RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_008_focus_group',
		type: 'integer'
  })
	edu008FocusGroup: number

	@Column({
    nullable: true,
		name: 'edu_a_08_new_sw',
		type: 'integer'
  })
	eduA08NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_08_new_msm',
		type: 'integer'
  })
	eduA08NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_08_new_other',
		type: 'integer'
  })
	eduA08NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_08_repeater_sw',
		type: 'integer'
  })
	eduB08RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_08_repeater_msm',
		type: 'integer'
  })
	eduB08RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_08_repeater_other',
		type: 'integer'
  })
	eduB08RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_009_male_condom',
		type: 'integer'
  })
	edu009MaleCondom: number

	@Column({
    nullable: true,
		name: 'edu_a_09_new_sw',
		type: 'integer'
  })
	eduA09NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_09_new_msm',
		type: 'integer'
  })
	eduA09NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_09_new_other',
		type: 'integer'
  })
	eduA09NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_09_repeater_sw',
		type: 'integer'
  })
	eduB09RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_09_repeater_msm',
		type: 'integer'
  })
	eduB09RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_09_repeater_other',
		type: 'integer'
  })
	eduB09RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_010_monthly_workshops',
		type: 'integer'
  })
	edu010MonthlyWorkshops: number

	@Column({
    nullable: true,
		name: 'edu_a_10_new_sw',
		type: 'integer'
  })
	eduA10NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_10_new_msm',
		type: 'integer'
  })
	eduA10NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_10_new_other',
		type: 'integer'
  })
	eduA10NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_10_repeater_sw',
		type: 'integer'
  })
	eduB10RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_10_repeater_msm',
		type: 'integer'
  })
	eduB10RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_10_repeater_other',
		type: 'integer'
  })
	eduB10RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_011_msm_support_group',
		type: 'integer'
  })
	edu011MsmSupportGroup: number

	@Column({
    nullable: true,
		name: 'edu_a_11_new_sw',
		type: 'integer'
  })
	eduA11NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_11_new_msm',
		type: 'integer'
  })
	eduA11NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_11_new_other',
		type: 'integer'
  })
	eduA11NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_11_repeater_sw',
		type: 'integer'
  })
	eduB11RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_11_repeater_msm',
		type: 'integer'
  })
	eduB11RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_11_repeater_other',
		type: 'integer'
  })
	eduB11RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_012_nutrition',
		type: 'integer'
  })
	edu012Nutrition: number

	@Column({
    nullable: true,
		name: 'edu_a_12_new_sw',
		type: 'integer'
  })
	eduA12NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_12_new_msm',
		type: 'integer'
  })
	eduA12NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_12_new_other',
		type: 'integer'
  })
	eduA12NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_12_repeater_sw',
		type: 'integer'
  })
	eduB12RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_12_repeater_msm',
		type: 'integer'
  })
	eduB12RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_12_repeater_other',
		type: 'integer'
  })
	eduB12RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_013_plha_sessions',
		type: 'integer'
  })
	edu013PlhaSessions: number

	@Column({
    nullable: true,
		name: 'edu_a_13_new_sw',
		type: 'integer'
  })
	eduA13NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_13_new_msm',
		type: 'integer'
  })
	eduA13NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_13_new_other',
		type: 'integer'
  })
	eduA13NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_13_repeater_sw',
		type: 'integer'
  })
	eduB13RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_13_repeater_msm',
		type: 'integer'
  })
	eduB13RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_13_repeater_other',
		type: 'integer'
  })
	eduB13RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_014_plha_support_group',
		type: 'integer'
  })
	edu014PlhaSupportGroup: number

	@Column({
    nullable: true,
		name: 'edu_a_14_new_sw',
		type: 'integer'
  })
	eduA14NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_14_new_msm',
		type: 'integer'
  })
	eduA14NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_14_new_other',
		type: 'integer'
  })
	eduA14NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_14_repeater_sw',
		type: 'integer'
  })
	eduB14RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_14_repeater_msm',
		type: 'integer'
  })
	eduB14RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_14_repeater_other',
		type: 'integer'
  })
	eduB14RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_015_role_plays',
		type: 'integer'
  })
	edu015RolePlays: number

	@Column({
    nullable: true,
		name: 'edu_a_15_new_sw',
		type: 'integer'
  })
	eduA15NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_15_new_msm',
		type: 'integer'
  })
	eduA15NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_15_new_other',
		type: 'integer'
  })
	eduA15NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_15_repeater_sw',
		type: 'integer'
  })
	eduB15RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_15_repeater_msm',
		type: 'integer'
  })
	eduB15RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_15_repeater_other',
		type: 'integer'
  })
	eduB15RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_016_safer_sex',
		type: 'integer'
  })
	edu016SaferSex: number

	@Column({
    nullable: true,
		name: 'edu_a_16_new_sw',
		type: 'integer'
  })
	eduA16NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_16_new_msm',
		type: 'integer'
  })
	eduA16NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_16_new_other',
		type: 'integer'
  })
	eduA16NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_16_repeater_sw',
		type: 'integer'
  })
	eduB16RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_16_repeater_msm',
		type: 'integer'
  })
	eduB16RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_16_repeater_other',
		type: 'integer'
  })
	eduB16RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_017_st_is_hiv',
		type: 'integer'
  })
	edu017StIsHiv: number

	@Column({
    nullable: true,
		name: 'edu_a_17_new_sw',
		type: 'integer'
  })
	eduA17NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_17_new_msm',
		type: 'integer'
  })
	eduA17NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_17_new_other',
		type: 'integer'
  })
	eduA17NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_17_repeater_sw',
		type: 'integer'
  })
	eduB17RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_17_repeater_msm',
		type: 'integer'
  })
	eduB17RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_17_repeater_other',
		type: 'integer'
  })
	eduB17RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_018_sw_support_group',
		type: 'integer'
  })
	edu018SwSupportGroup: number

	@Column({
    nullable: true,
		name: 'edu_a_18_new_sw',
		type: 'integer'
  })
	eduA18NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_18_new_msm',
		type: 'integer'
  })
	eduA18NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_18_new_other',
		type: 'integer'
  })
	eduA18NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_18_repeater_sw',
		type: 'integer'
  })
	eduB18RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_18_repeater_msm',
		type: 'integer'
  })
	eduB18RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_18_repeater_other',
		type: 'integer'
  })
	eduB18RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_019_tb_sessions',
		type: 'integer'
  })
	edu019TbSessions: number

	@Column({
    nullable: true,
		name: 'edu_a_19_new_sw',
		type: 'integer'
  })
	eduA19NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_19_new_msm',
		type: 'integer'
  })
	eduA19NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_19_new_other',
		type: 'integer'
  })
	eduA19NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_19_repeater_sw',
		type: 'integer'
  })
	eduB19RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_19_repeater_msm',
		type: 'integer'
  })
	eduB19RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_19_repeater_other',
		type: 'integer'
  })
	eduB19RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_020_v_peer_training',
		type: 'integer'
  })
	edu020VPeerTraining: number

	@Column({
    nullable: true,
		name: 'edu_a_20_new_sw',
		type: 'integer'
  })
	eduA20NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_20_new_msm',
		type: 'integer'
  })
	eduA20NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_20_new_other',
		type: 'integer'
  })
	eduA20NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_20_repeater_sw',
		type: 'integer'
  })
	eduB20RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_20_repeater_msm',
		type: 'integer'
  })
	eduB20RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_20_repeater_other',
		type: 'integer'
  })
	eduB20RepeaterOther: number

	@Column({
    nullable: true,
		name: 'edu_021_other',
		type: 'integer'
  })
	edu021Other: number

	@Column({
    nullable: true,
		name: 'edu_a_21_new_sw',
		type: 'integer'
  })
	eduA21NewSw: number

	@Column({
    nullable: true,
		name: 'edu_a_21_new_msm',
		type: 'integer'
  })
	eduA21NewMsm: number

	@Column({
    nullable: true,
		name: 'edu_a_21_new_other',
		type: 'integer'
  })
	eduA21NewOther: number

	@Column({
    nullable: true,
		name: 'edu_b_21_repeater_sw',
		type: 'integer'
  })
	eduB21RepeaterSw: number

	@Column({
    nullable: true,
		name: 'edu_b_21_repeater_msm',
		type: 'integer'
  })
	eduB21RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'edu_b_21_repeater_other',
		type: 'integer'
  })
	eduB21RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_001_bag_making',
		type: 'integer'
  })
	rec001BagMaking: number

	@Column({
    nullable: true,
		name: 'rec_a_01_new_sw',
		type: 'integer'
  })
	recA01NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_01_new_msm',
		type: 'integer'
  })
	recA01NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_01_new_other',
		type: 'integer'
  })
	recA01NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_01_repeater_sw',
		type: 'integer'
  })
	recB01RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_01_repeater_msm',
		type: 'integer'
  })
	recB01RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_01_repeater_other',
		type: 'integer'
  })
	recB01RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_002_beauty_sessions',
		type: 'integer'
  })
	rec002BeautySessions: number

	@Column({
    nullable: true,
		name: 'rec_a_02_new_sw',
		type: 'integer'
  })
	recA02NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_02_new_msm',
		type: 'integer'
  })
	recA02NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_02_new_other',
		type: 'integer'
  })
	recA02NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_02_repeater_sw',
		type: 'integer'
  })
	recB02RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_02_repeater_msm',
		type: 'integer'
  })
	recB02RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_02_repeater_other',
		type: 'integer'
  })
	recB02RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_003_dancing',
		type: 'integer'
  })
	rec003Dancing: number

	@Column({
    nullable: true,
		name: 'rec_a_03_new_sw',
		type: 'integer'
  })
	recA03NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_03_new_msm',
		type: 'integer'
  })
	recA03NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_03_new_other',
		type: 'integer'
  })
	recA03NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_03_repeater_sw',
		type: 'integer'
  })
	recB03RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_03_repeater_msm',
		type: 'integer'
  })
	recB03RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_03_repeater_other',
		type: 'integer'
  })
	recB03RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_004_english_sessions',
		type: 'integer'
  })
	rec004EnglishSessions: number

	@Column({
    nullable: true,
		name: 'rec_a_04_new_sw',
		type: 'integer'
  })
	recA04NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_04_new_msm',
		type: 'integer'
  })
	recA04NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_04_new_other',
		type: 'integer'
  })
	recA04NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_04_repeater_sw',
		type: 'integer'
  })
	recB04RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_04_repeater_msm',
		type: 'integer'
  })
	recB04RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_04_repeater_other',
		type: 'integer'
  })
	recB04RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_005_game',
		type: 'integer'
  })
	rec005Game: number

	@Column({
    nullable: true,
		name: 'rec_a_05_new_sw',
		type: 'integer'
  })
	recA05NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_05_new_msm',
		type: 'integer'
  })
	recA05NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_05_new_other',
		type: 'integer'
  })
	recA05NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_05_repeater_sw',
		type: 'integer'
  })
	recB05RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_05_repeater_msm',
		type: 'integer'
  })
	recB05RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_05_repeater_other',
		type: 'integer'
  })
	recB05RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_006_hair_straight',
		type: 'integer'
  })
	rec006HairStraight: number

	@Column({
    nullable: true,
		name: 'rec_a_06_new_sw',
		type: 'integer'
  })
	recA06NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_06_new_msm',
		type: 'integer'
  })
	recA06NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_06_new_other',
		type: 'integer'
  })
	recA06NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_06_repeater_sw',
		type: 'integer'
  })
	recB06RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_06_repeater_msm',
		type: 'integer'
  })
	recB06RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_06_repeater_other',
		type: 'integer'
  })
	recB06RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_007_ktv_movie',
		type: 'integer'
  })
	rec007KtvMovie: number

	@Column({
    nullable: true,
		name: 'rec_a_07_new_sw',
		type: 'integer'
  })
	recA07NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_07_new_msm',
		type: 'integer'
  })
	recA07NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_07_new_other',
		type: 'integer'
  })
	recA07NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_07_repeater_sw',
		type: 'integer'
  })
	recB07RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_07_repeater_msm',
		type: 'integer'
  })
	recB07RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_07_repeater_other',
		type: 'integer'
  })
	recB07RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_008_leaflet',
		type: 'integer'
  })
	rec008Leaflet: number

	@Column({
    nullable: true,
		name: 'rec_a_08_new_sw',
		type: 'integer'
  })
	recA08NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_08_new_msm',
		type: 'integer'
  })
	recA08NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_08_new_other',
		type: 'integer'
  })
	recA08NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_08_repeater_sw',
		type: 'integer'
  })
	recB08RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_08_repeater_msm',
		type: 'integer'
  })
	recB08RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_08_repeater_other',
		type: 'integer'
  })
	recB08RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_009_legal_counselling',
		type: 'integer'
  })
	rec009LegalCounselling: number

	@Column({
    nullable: true,
		name: 'rec_a_09_new_sw',
		type: 'integer'
  })
	recA09NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_09_new_msm',
		type: 'integer'
  })
	recA09NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_09_new_other',
		type: 'integer'
  })
	recA09NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_09_repeater_sw',
		type: 'integer'
  })
	recB09RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_09_repeater_msm',
		type: 'integer'
  })
	recB09RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_09_repeater_other',
		type: 'integer'
  })
	recB09RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_010_massage_training',
		type: 'integer'
  })
	rec010MassageTraining: number

	@Column({
    nullable: true,
		name: 'rec_a_10_new_sw',
		type: 'integer'
  })
	recA10NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_10_new_msm',
		type: 'integer'
  })
	recA10NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_10_new_other',
		type: 'integer'
  })
	recA10NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_10_repeater_sw',
		type: 'integer'
  })
	recB10RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_10_repeater_msm',
		type: 'integer'
  })
	recB10RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_10_repeater_other',
		type: 'integer'
  })
	recB10RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_011_meditation_sessions',
		type: 'integer'
  })
	rec011MeditationSessions: number

	@Column({
    nullable: true,
		name: 'rec_a_11_new_sw',
		type: 'integer'
  })
	recA11NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_11_new_msm',
		type: 'integer'
  })
	recA11NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_11_new_other',
		type: 'integer'
  })
	recA11NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_11_repeater_sw',
		type: 'integer'
  })
	recB11RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_11_repeater_msm',
		type: 'integer'
  })
	recB11RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_11_repeater_other',
		type: 'integer'
  })
	recB11RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_012_nail_polish',
		type: 'integer'
  })
	rec012NailPolish: number

	@Column({
    nullable: true,
		name: 'rec_a_12_new_sw',
		type: 'integer'
  })
	recA12NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_12_new_msm',
		type: 'integer'
  })
	recA12NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_12_new_other',
		type: 'integer'
  })
	recA12NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_12_repeater_sw',
		type: 'integer'
  })
	recB12RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_12_repeater_msm',
		type: 'integer'
  })
	recB12RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_12_repeater_other',
		type: 'integer'
  })
	recB12RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_013_relexation',
		type: 'integer'
  })
	rec013Relexation: number

	@Column({
    nullable: true,
		name: 'rec_a_13_new_sw',
		type: 'integer'
  })
	recA13NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_13_new_msm',
		type: 'integer'
  })
	recA13NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_13_new_other',
		type: 'integer'
  })
	recA13NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_13_repeater_sw',
		type: 'integer'
  })
	recB13RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_13_repeater_msm',
		type: 'integer'
  })
	recB13RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_13_repeater_other',
		type: 'integer'
  })
	recB13RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_014_self_esteem',
		type: 'integer'
  })
	rec014SelfEsteem: number

	@Column({
    nullable: true,
		name: 'rec_a_14_new_sw',
		type: 'integer'
  })
	recA14NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_14_new_msm',
		type: 'integer'
  })
	recA14NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_14_new_other',
		type: 'integer'
  })
	recA14NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_14_repeater_sw',
		type: 'integer'
  })
	recB14RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_14_repeater_msm',
		type: 'integer'
  })
	recB14RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_14_repeater_other',
		type: 'integer'
  })
	recB14RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_015_sewing',
		type: 'integer'
  })
	rec015Sewing: number

	@Column({
    nullable: true,
		name: 'rec_a_15_new_sw',
		type: 'integer'
  })
	recA15NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_15_new_msm',
		type: 'integer'
  })
	recA15NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_15_new_other',
		type: 'integer'
  })
	recA15NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_15_repeater_sw',
		type: 'integer'
  })
	recB15RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_15_repeater_msm',
		type: 'integer'
  })
	recB15RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_15_repeater_other',
		type: 'integer'
  })
	recB15RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_016_nutritional_activity',
		type: 'integer'
  })
	rec016NutritionalActivity: number

	@Column({
    nullable: true,
		name: 'rec_a_16_new_sw',
		type: 'integer'
  })
	recA16NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_16_new_msm',
		type: 'integer'
  })
	recA16NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_16_new_other',
		type: 'integer'
  })
	recA16NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_16_repeater_sw',
		type: 'integer'
  })
	recB16RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_16_repeater_msm',
		type: 'integer'
  })
	recB16RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_16_repeater_other',
		type: 'integer'
  })
	recB16RepeaterOther: number

	@Column({
    nullable: true,
		name: 'rec_017_other',
		type: 'integer'
  })
	rec017Other: number

	@Column({
    nullable: true,
		name: 'rec_a_17_new_sw',
		type: 'integer'
  })
	recA17NewSw: number

	@Column({
    nullable: true,
		name: 'rec_a_17_new_msm',
		type: 'integer'
  })
	recA17NewMsm: number

	@Column({
    nullable: true,
		name: 'rec_a_17_new_other',
		type: 'integer'
  })
	recA17NewOther: number

	@Column({
    nullable: true,
		name: 'rec_b_17_repeater_sw',
		type: 'integer'
  })
	recB17RepeaterSw: number

	@Column({
    nullable: true,
		name: 'rec_b_17_repeater_msm',
		type: 'integer'
  })
	recB17RepeaterMsm: number

	@Column({
    nullable: true,
		name: 'rec_b_17_repeater_other',
		type: 'integer'
  })
	recB17RepeaterOther: number

	@Column({
    nullable: true,
		name: 'total_sw',
		type: 'integer'
  })
	totalSw: number

	@Column({
    nullable: true,
		name: 'total_msm',
		type: 'integer'
  })
	totalMsm: number

	@Column({
    nullable: true,
		name: 'total_other',
		type: 'integer'
  })
	totalOther: number

	@Column({
    nullable: true,
		name: 'vpet_sw',
		type: 'integer'
  })
	vpetSw: number

	@Column({
    nullable: true,
		name: 'vpet_msm',
		type: 'integer'
  })
	vpetMsm: number

	@Column({
    nullable: true,
		name: 'no_of_staff_peer',
		type: 'integer'
  })
	noOfStaffPeer: number

	@Column({
    nullable: true,
		name: 'no_of_perdiem_peer',
		type: 'integer'
  })
	noOfPerdiemPeer: number

	@Column({
    nullable: true,
		name: 'no_of_volunteer_peer',
		type: 'integer'
  })
	noOfVolunteerPeer: number

	@Column({
    nullable: true,
		name: 'remark'
  })
	remark: string

	@Column({
    nullable: true,
		name: 'male_condom',
		type: 'integer'
  })
	maleCondom: number

	@Column({
    nullable: true,
		name: 'female_condom',
		type: 'integer'
  })
	femaleCondom: number

	@Column({
    nullable: true,
		name: 'total_condom',
		type: 'integer'
  })
	totalCondom: number

	@Column({
    nullable: true,
		name: 'leaflet',
		type: 'integer'
  })
	leaflet: number

	@Column({
    nullable: true,
		name: 'gadget',
		type: 'integer'
  })
	gadget: number

	@Column({
    nullable: true,
		name: 'other',
		type: 'integer'
  })
	other: number

	@Column({
    nullable: true,
		name: 'total_iec',
		type: 'integer'
  })
	totalIec: number

	@Column({
    nullable: true,
		name: 'sys_date',
		type: 'timestamptz'
  })
	sysDate: Date

	@Column({
    nullable: true,
		name: 'last_registration_date',
		type: 'timestamptz'
  })
	lastRegistrationDate: Date

	@Column({
    nullable: true,
		name: 'fusion_criteria',
		type: 'integer'
  })
	fusionCriteria: number

}
