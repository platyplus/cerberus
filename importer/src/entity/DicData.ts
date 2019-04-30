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
		name: 'edu_001_art_sessions',
		type: 'integer',
		nullable: true
	})
	edu001ArtSessions: number

	@Column({
		name: 'edu_a_01_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA01NewSw: number

	@Column({
		name: 'edu_a_01_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA01NewMsm: number

	@Column({
		name: 'edu_a_01_new_other',
		type: 'integer',
		nullable: true
	})
	eduA01NewOther: number

	@Column({
		name: 'edu_b_01_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB01RepeaterSw: number

	@Column({
		name: 'edu_b_01_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB01RepeaterMsm: number

	@Column({
		name: 'edu_b_01_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB01RepeaterOther: number

	@Column({
		name: 'edu_002_art_support_group',
		type: 'integer',
		nullable: true
	})
	edu002ArtSupportGroup: number

	@Column({
		name: 'edu_a_02_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA02NewSw: number

	@Column({
		name: 'edu_a_02_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA02NewMsm: number

	@Column({
		name: 'edu_a_02_new_other',
		type: 'integer',
		nullable: true
	})
	eduA02NewOther: number

	@Column({
		name: 'edu_b_02_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB02RepeaterSw: number

	@Column({
		name: 'edu_b_02_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB02RepeaterMsm: number

	@Column({
		name: 'edu_b_02_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB02RepeaterOther: number

	@Column({
		name: 'edu_003_bomb_book',
		type: 'integer',
		nullable: true
	})
	edu003BombBook: number

	@Column({
		name: 'edu_a_03_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA03NewSw: number

	@Column({
		name: 'edu_a_03_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA03NewMsm: number

	@Column({
		name: 'edu_a_03_new_other',
		type: 'integer',
		nullable: true
	})
	eduA03NewOther: number

	@Column({
		name: 'edu_b_03_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB03RepeaterSw: number

	@Column({
		name: 'edu_b_03_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB03RepeaterMsm: number

	@Column({
		name: 'edu_b_03_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB03RepeaterOther: number

	@Column({
		name: 'edu_004_contraception',
		type: 'integer',
		nullable: true
	})
	edu004Contraception: number

	@Column({
		name: 'edu_a_04_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA04NewSw: number

	@Column({
		name: 'edu_a_04_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA04NewMsm: number

	@Column({
		name: 'edu_a_04_new_other',
		type: 'integer',
		nullable: true
	})
	eduA04NewOther: number

	@Column({
		name: 'edu_b_04_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB04RepeaterSw: number

	@Column({
		name: 'edu_b_04_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB04RepeaterMsm: number

	@Column({
		name: 'edu_b_04_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB04RepeaterOther: number

	@Column({
		name: 'edu_005_dice_to_know',
		type: 'integer',
		nullable: true
	})
	edu005DiceToKnow: number

	@Column({
		name: 'edu_a_05_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA05NewSw: number

	@Column({
		name: 'edu_a_05_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA05NewMsm: number

	@Column({
		name: 'edu_a_05_new_other',
		type: 'integer',
		nullable: true
	})
	eduA05NewOther: number

	@Column({
		name: 'edu_b_05_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB05RepeaterSw: number

	@Column({
		name: 'edu_b_05_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB05RepeaterMsm: number

	@Column({
		name: 'edu_b_05_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB05RepeaterOther: number

	@Column({
		name: 'edu_006_educational_games',
		type: 'integer',
		nullable: true
	})
	edu006EducationalGames: number

	@Column({
		name: 'edu_a_06_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA06NewSw: number

	@Column({
		name: 'edu_a_06_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA06NewMsm: number

	@Column({
		name: 'edu_a_06_new_other',
		type: 'integer',
		nullable: true
	})
	eduA06NewOther: number

	@Column({
		name: 'edu_b_06_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB06RepeaterSw: number

	@Column({
		name: 'edu_b_06_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB06RepeaterMsm: number

	@Column({
		name: 'edu_b_06_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB06RepeaterOther: number

	@Column({
		name: 'edu_007_female_condom',
		type: 'integer',
		nullable: true
	})
	edu007FemaleCondom: number

	@Column({
		name: 'edu_a_07_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA07NewSw: number

	@Column({
		name: 'edu_a_07_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA07NewMsm: number

	@Column({
		name: 'edu_a_07_new_other',
		type: 'integer',
		nullable: true
	})
	eduA07NewOther: number

	@Column({
		name: 'edu_b_07_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB07RepeaterSw: number

	@Column({
		name: 'edu_b_07_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB07RepeaterMsm: number

	@Column({
		name: 'edu_b_07_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB07RepeaterOther: number

	@Column({
		name: 'edu_008_focus_group',
		type: 'integer',
		nullable: true
	})
	edu008FocusGroup: number

	@Column({
		name: 'edu_a_08_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA08NewSw: number

	@Column({
		name: 'edu_a_08_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA08NewMsm: number

	@Column({
		name: 'edu_a_08_new_other',
		type: 'integer',
		nullable: true
	})
	eduA08NewOther: number

	@Column({
		name: 'edu_b_08_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB08RepeaterSw: number

	@Column({
		name: 'edu_b_08_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB08RepeaterMsm: number

	@Column({
		name: 'edu_b_08_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB08RepeaterOther: number

	@Column({
		name: 'edu_009_male_condom',
		type: 'integer',
		nullable: true
	})
	edu009MaleCondom: number

	@Column({
		name: 'edu_a_09_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA09NewSw: number

	@Column({
		name: 'edu_a_09_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA09NewMsm: number

	@Column({
		name: 'edu_a_09_new_other',
		type: 'integer',
		nullable: true
	})
	eduA09NewOther: number

	@Column({
		name: 'edu_b_09_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB09RepeaterSw: number

	@Column({
		name: 'edu_b_09_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB09RepeaterMsm: number

	@Column({
		name: 'edu_b_09_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB09RepeaterOther: number

	@Column({
		name: 'edu_010_monthly_workshops',
		type: 'integer',
		nullable: true
	})
	edu010MonthlyWorkshops: number

	@Column({
		name: 'edu_a_10_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA10NewSw: number

	@Column({
		name: 'edu_a_10_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA10NewMsm: number

	@Column({
		name: 'edu_a_10_new_other',
		type: 'integer',
		nullable: true
	})
	eduA10NewOther: number

	@Column({
		name: 'edu_b_10_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB10RepeaterSw: number

	@Column({
		name: 'edu_b_10_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB10RepeaterMsm: number

	@Column({
		name: 'edu_b_10_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB10RepeaterOther: number

	@Column({
		name: 'edu_011_msm_support_group',
		type: 'integer',
		nullable: true
	})
	edu011MsmSupportGroup: number

	@Column({
		name: 'edu_a_11_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA11NewSw: number

	@Column({
		name: 'edu_a_11_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA11NewMsm: number

	@Column({
		name: 'edu_a_11_new_other',
		type: 'integer',
		nullable: true
	})
	eduA11NewOther: number

	@Column({
		name: 'edu_b_11_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB11RepeaterSw: number

	@Column({
		name: 'edu_b_11_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB11RepeaterMsm: number

	@Column({
		name: 'edu_b_11_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB11RepeaterOther: number

	@Column({
		name: 'edu_012_nutrition',
		type: 'integer',
		nullable: true
	})
	edu012Nutrition: number

	@Column({
		name: 'edu_a_12_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA12NewSw: number

	@Column({
		name: 'edu_a_12_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA12NewMsm: number

	@Column({
		name: 'edu_a_12_new_other',
		type: 'integer',
		nullable: true
	})
	eduA12NewOther: number

	@Column({
		name: 'edu_b_12_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB12RepeaterSw: number

	@Column({
		name: 'edu_b_12_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB12RepeaterMsm: number

	@Column({
		name: 'edu_b_12_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB12RepeaterOther: number

	@Column({
		name: 'edu_013_plha_sessions',
		type: 'integer',
		nullable: true
	})
	edu013PlhaSessions: number

	@Column({
		name: 'edu_a_13_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA13NewSw: number

	@Column({
		name: 'edu_a_13_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA13NewMsm: number

	@Column({
		name: 'edu_a_13_new_other',
		type: 'integer',
		nullable: true
	})
	eduA13NewOther: number

	@Column({
		name: 'edu_b_13_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB13RepeaterSw: number

	@Column({
		name: 'edu_b_13_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB13RepeaterMsm: number

	@Column({
		name: 'edu_b_13_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB13RepeaterOther: number

	@Column({
		name: 'edu_014_plha_support_group',
		type: 'integer',
		nullable: true
	})
	edu014PlhaSupportGroup: number

	@Column({
		name: 'edu_a_14_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA14NewSw: number

	@Column({
		name: 'edu_a_14_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA14NewMsm: number

	@Column({
		name: 'edu_a_14_new_other',
		type: 'integer',
		nullable: true
	})
	eduA14NewOther: number

	@Column({
		name: 'edu_b_14_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB14RepeaterSw: number

	@Column({
		name: 'edu_b_14_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB14RepeaterMsm: number

	@Column({
		name: 'edu_b_14_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB14RepeaterOther: number

	@Column({
		name: 'edu_015_role_plays',
		type: 'integer',
		nullable: true
	})
	edu015RolePlays: number

	@Column({
		name: 'edu_a_15_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA15NewSw: number

	@Column({
		name: 'edu_a_15_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA15NewMsm: number

	@Column({
		name: 'edu_a_15_new_other',
		type: 'integer',
		nullable: true
	})
	eduA15NewOther: number

	@Column({
		name: 'edu_b_15_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB15RepeaterSw: number

	@Column({
		name: 'edu_b_15_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB15RepeaterMsm: number

	@Column({
		name: 'edu_b_15_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB15RepeaterOther: number

	@Column({
		name: 'edu_016_safer_sex',
		type: 'integer',
		nullable: true
	})
	edu016SaferSex: number

	@Column({
		name: 'edu_a_16_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA16NewSw: number

	@Column({
		name: 'edu_a_16_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA16NewMsm: number

	@Column({
		name: 'edu_a_16_new_other',
		type: 'integer',
		nullable: true
	})
	eduA16NewOther: number

	@Column({
		name: 'edu_b_16_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB16RepeaterSw: number

	@Column({
		name: 'edu_b_16_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB16RepeaterMsm: number

	@Column({
		name: 'edu_b_16_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB16RepeaterOther: number

	@Column({
		name: 'edu_017_st_is_hiv',
		type: 'integer',
		nullable: true
	})
	edu017StIsHiv: number

	@Column({
		name: 'edu_a_17_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA17NewSw: number

	@Column({
		name: 'edu_a_17_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA17NewMsm: number

	@Column({
		name: 'edu_a_17_new_other',
		type: 'integer',
		nullable: true
	})
	eduA17NewOther: number

	@Column({
		name: 'edu_b_17_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB17RepeaterSw: number

	@Column({
		name: 'edu_b_17_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB17RepeaterMsm: number

	@Column({
		name: 'edu_b_17_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB17RepeaterOther: number

	@Column({
		name: 'edu_018_sw_support_group',
		type: 'integer',
		nullable: true
	})
	edu018SwSupportGroup: number

	@Column({
		name: 'edu_a_18_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA18NewSw: number

	@Column({
		name: 'edu_a_18_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA18NewMsm: number

	@Column({
		name: 'edu_a_18_new_other',
		type: 'integer',
		nullable: true
	})
	eduA18NewOther: number

	@Column({
		name: 'edu_b_18_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB18RepeaterSw: number

	@Column({
		name: 'edu_b_18_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB18RepeaterMsm: number

	@Column({
		name: 'edu_b_18_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB18RepeaterOther: number

	@Column({
		name: 'edu_019_tb_sessions',
		type: 'integer',
		nullable: true
	})
	edu019TbSessions: number

	@Column({
		name: 'edu_a_19_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA19NewSw: number

	@Column({
		name: 'edu_a_19_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA19NewMsm: number

	@Column({
		name: 'edu_a_19_new_other',
		type: 'integer',
		nullable: true
	})
	eduA19NewOther: number

	@Column({
		name: 'edu_b_19_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB19RepeaterSw: number

	@Column({
		name: 'edu_b_19_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB19RepeaterMsm: number

	@Column({
		name: 'edu_b_19_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB19RepeaterOther: number

	@Column({
		name: 'edu_020_v_peer_training',
		type: 'integer',
		nullable: true
	})
	edu020VPeerTraining: number

	@Column({
		name: 'edu_a_20_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA20NewSw: number

	@Column({
		name: 'edu_a_20_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA20NewMsm: number

	@Column({
		name: 'edu_a_20_new_other',
		type: 'integer',
		nullable: true
	})
	eduA20NewOther: number

	@Column({
		name: 'edu_b_20_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB20RepeaterSw: number

	@Column({
		name: 'edu_b_20_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB20RepeaterMsm: number

	@Column({
		name: 'edu_b_20_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB20RepeaterOther: number

	@Column({
		name: 'edu_021_other',
		type: 'integer',
		nullable: true
	})
	edu021Other: number

	@Column({
		name: 'edu_a_21_new_sw',
		type: 'integer',
		nullable: true
	})
	eduA21NewSw: number

	@Column({
		name: 'edu_a_21_new_msm',
		type: 'integer',
		nullable: true
	})
	eduA21NewMsm: number

	@Column({
		name: 'edu_a_21_new_other',
		type: 'integer',
		nullable: true
	})
	eduA21NewOther: number

	@Column({
		name: 'edu_b_21_repeater_sw',
		type: 'integer',
		nullable: true
	})
	eduB21RepeaterSw: number

	@Column({
		name: 'edu_b_21_repeater_msm',
		type: 'integer',
		nullable: true
	})
	eduB21RepeaterMsm: number

	@Column({
		name: 'edu_b_21_repeater_other',
		type: 'integer',
		nullable: true
	})
	eduB21RepeaterOther: number

	@Column({
		name: 'rec_001_bag_making',
		type: 'integer',
		nullable: true
	})
	rec001BagMaking: number

	@Column({
		name: 'rec_a_01_new_sw',
		type: 'integer',
		nullable: true
	})
	recA01NewSw: number

	@Column({
		name: 'rec_a_01_new_msm',
		type: 'integer',
		nullable: true
	})
	recA01NewMsm: number

	@Column({
		name: 'rec_a_01_new_other',
		type: 'integer',
		nullable: true
	})
	recA01NewOther: number

	@Column({
		name: 'rec_b_01_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB01RepeaterSw: number

	@Column({
		name: 'rec_b_01_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB01RepeaterMsm: number

	@Column({
		name: 'rec_b_01_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB01RepeaterOther: number

	@Column({
		name: 'rec_002_beauty_sessions',
		type: 'integer',
		nullable: true
	})
	rec002BeautySessions: number

	@Column({
		name: 'rec_a_02_new_sw',
		type: 'integer',
		nullable: true
	})
	recA02NewSw: number

	@Column({
		name: 'rec_a_02_new_msm',
		type: 'integer',
		nullable: true
	})
	recA02NewMsm: number

	@Column({
		name: 'rec_a_02_new_other',
		type: 'integer',
		nullable: true
	})
	recA02NewOther: number

	@Column({
		name: 'rec_b_02_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB02RepeaterSw: number

	@Column({
		name: 'rec_b_02_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB02RepeaterMsm: number

	@Column({
		name: 'rec_b_02_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB02RepeaterOther: number

	@Column({
		name: 'rec_003_dancing',
		type: 'integer',
		nullable: true
	})
	rec003Dancing: number

	@Column({
		name: 'rec_a_03_new_sw',
		type: 'integer',
		nullable: true
	})
	recA03NewSw: number

	@Column({
		name: 'rec_a_03_new_msm',
		type: 'integer',
		nullable: true
	})
	recA03NewMsm: number

	@Column({
		name: 'rec_a_03_new_other',
		type: 'integer',
		nullable: true
	})
	recA03NewOther: number

	@Column({
		name: 'rec_b_03_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB03RepeaterSw: number

	@Column({
		name: 'rec_b_03_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB03RepeaterMsm: number

	@Column({
		name: 'rec_b_03_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB03RepeaterOther: number

	@Column({
		name: 'rec_004_english_sessions',
		type: 'integer',
		nullable: true
	})
	rec004EnglishSessions: number

	@Column({
		name: 'rec_a_04_new_sw',
		type: 'integer',
		nullable: true
	})
	recA04NewSw: number

	@Column({
		name: 'rec_a_04_new_msm',
		type: 'integer',
		nullable: true
	})
	recA04NewMsm: number

	@Column({
		name: 'rec_a_04_new_other',
		type: 'integer',
		nullable: true
	})
	recA04NewOther: number

	@Column({
		name: 'rec_b_04_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB04RepeaterSw: number

	@Column({
		name: 'rec_b_04_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB04RepeaterMsm: number

	@Column({
		name: 'rec_b_04_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB04RepeaterOther: number

	@Column({
		name: 'rec_005_game',
		type: 'integer',
		nullable: true
	})
	rec005Game: number

	@Column({
		name: 'rec_a_05_new_sw',
		type: 'integer',
		nullable: true
	})
	recA05NewSw: number

	@Column({
		name: 'rec_a_05_new_msm',
		type: 'integer',
		nullable: true
	})
	recA05NewMsm: number

	@Column({
		name: 'rec_a_05_new_other',
		type: 'integer',
		nullable: true
	})
	recA05NewOther: number

	@Column({
		name: 'rec_b_05_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB05RepeaterSw: number

	@Column({
		name: 'rec_b_05_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB05RepeaterMsm: number

	@Column({
		name: 'rec_b_05_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB05RepeaterOther: number

	@Column({
		name: 'rec_006_hair_straight',
		type: 'integer',
		nullable: true
	})
	rec006HairStraight: number

	@Column({
		name: 'rec_a_06_new_sw',
		type: 'integer',
		nullable: true
	})
	recA06NewSw: number

	@Column({
		name: 'rec_a_06_new_msm',
		type: 'integer',
		nullable: true
	})
	recA06NewMsm: number

	@Column({
		name: 'rec_a_06_new_other',
		type: 'integer',
		nullable: true
	})
	recA06NewOther: number

	@Column({
		name: 'rec_b_06_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB06RepeaterSw: number

	@Column({
		name: 'rec_b_06_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB06RepeaterMsm: number

	@Column({
		name: 'rec_b_06_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB06RepeaterOther: number

	@Column({
		name: 'rec_007_ktv_movie',
		type: 'integer',
		nullable: true
	})
	rec007KtvMovie: number

	@Column({
		name: 'rec_a_07_new_sw',
		type: 'integer',
		nullable: true
	})
	recA07NewSw: number

	@Column({
		name: 'rec_a_07_new_msm',
		type: 'integer',
		nullable: true
	})
	recA07NewMsm: number

	@Column({
		name: 'rec_a_07_new_other',
		type: 'integer',
		nullable: true
	})
	recA07NewOther: number

	@Column({
		name: 'rec_b_07_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB07RepeaterSw: number

	@Column({
		name: 'rec_b_07_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB07RepeaterMsm: number

	@Column({
		name: 'rec_b_07_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB07RepeaterOther: number

	@Column({
		name: 'rec_008_leaflet',
		type: 'integer',
		nullable: true
	})
	rec008Leaflet: number

	@Column({
		name: 'rec_a_08_new_sw',
		type: 'integer',
		nullable: true
	})
	recA08NewSw: number

	@Column({
		name: 'rec_a_08_new_msm',
		type: 'integer',
		nullable: true
	})
	recA08NewMsm: number

	@Column({
		name: 'rec_a_08_new_other',
		type: 'integer',
		nullable: true
	})
	recA08NewOther: number

	@Column({
		name: 'rec_b_08_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB08RepeaterSw: number

	@Column({
		name: 'rec_b_08_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB08RepeaterMsm: number

	@Column({
		name: 'rec_b_08_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB08RepeaterOther: number

	@Column({
		name: 'rec_009_legal_counselling',
		type: 'integer',
		nullable: true
	})
	rec009LegalCounselling: number

	@Column({
		name: 'rec_a_09_new_sw',
		type: 'integer',
		nullable: true
	})
	recA09NewSw: number

	@Column({
		name: 'rec_a_09_new_msm',
		type: 'integer',
		nullable: true
	})
	recA09NewMsm: number

	@Column({
		name: 'rec_a_09_new_other',
		type: 'integer',
		nullable: true
	})
	recA09NewOther: number

	@Column({
		name: 'rec_b_09_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB09RepeaterSw: number

	@Column({
		name: 'rec_b_09_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB09RepeaterMsm: number

	@Column({
		name: 'rec_b_09_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB09RepeaterOther: number

	@Column({
		name: 'rec_010_massage_training',
		type: 'integer',
		nullable: true
	})
	rec010MassageTraining: number

	@Column({
		name: 'rec_a_10_new_sw',
		type: 'integer',
		nullable: true
	})
	recA10NewSw: number

	@Column({
		name: 'rec_a_10_new_msm',
		type: 'integer',
		nullable: true
	})
	recA10NewMsm: number

	@Column({
		name: 'rec_a_10_new_other',
		type: 'integer',
		nullable: true
	})
	recA10NewOther: number

	@Column({
		name: 'rec_b_10_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB10RepeaterSw: number

	@Column({
		name: 'rec_b_10_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB10RepeaterMsm: number

	@Column({
		name: 'rec_b_10_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB10RepeaterOther: number

	@Column({
		name: 'rec_011_meditation_sessions',
		type: 'integer',
		nullable: true
	})
	rec011MeditationSessions: number

	@Column({
		name: 'rec_a_11_new_sw',
		type: 'integer',
		nullable: true
	})
	recA11NewSw: number

	@Column({
		name: 'rec_a_11_new_msm',
		type: 'integer',
		nullable: true
	})
	recA11NewMsm: number

	@Column({
		name: 'rec_a_11_new_other',
		type: 'integer',
		nullable: true
	})
	recA11NewOther: number

	@Column({
		name: 'rec_b_11_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB11RepeaterSw: number

	@Column({
		name: 'rec_b_11_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB11RepeaterMsm: number

	@Column({
		name: 'rec_b_11_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB11RepeaterOther: number

	@Column({
		name: 'rec_012_nail_polish',
		type: 'integer',
		nullable: true
	})
	rec012NailPolish: number

	@Column({
		name: 'rec_a_12_new_sw',
		type: 'integer',
		nullable: true
	})
	recA12NewSw: number

	@Column({
		name: 'rec_a_12_new_msm',
		type: 'integer',
		nullable: true
	})
	recA12NewMsm: number

	@Column({
		name: 'rec_a_12_new_other',
		type: 'integer',
		nullable: true
	})
	recA12NewOther: number

	@Column({
		name: 'rec_b_12_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB12RepeaterSw: number

	@Column({
		name: 'rec_b_12_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB12RepeaterMsm: number

	@Column({
		name: 'rec_b_12_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB12RepeaterOther: number

	@Column({
		name: 'rec_013_relexation',
		type: 'integer',
		nullable: true
	})
	rec013Relexation: number

	@Column({
		name: 'rec_a_13_new_sw',
		type: 'integer',
		nullable: true
	})
	recA13NewSw: number

	@Column({
		name: 'rec_a_13_new_msm',
		type: 'integer',
		nullable: true
	})
	recA13NewMsm: number

	@Column({
		name: 'rec_a_13_new_other',
		type: 'integer',
		nullable: true
	})
	recA13NewOther: number

	@Column({
		name: 'rec_b_13_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB13RepeaterSw: number

	@Column({
		name: 'rec_b_13_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB13RepeaterMsm: number

	@Column({
		name: 'rec_b_13_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB13RepeaterOther: number

	@Column({
		name: 'rec_014_self_esteem',
		type: 'integer',
		nullable: true
	})
	rec014SelfEsteem: number

	@Column({
		name: 'rec_a_14_new_sw',
		type: 'integer',
		nullable: true
	})
	recA14NewSw: number

	@Column({
		name: 'rec_a_14_new_msm',
		type: 'integer',
		nullable: true
	})
	recA14NewMsm: number

	@Column({
		name: 'rec_a_14_new_other',
		type: 'integer',
		nullable: true
	})
	recA14NewOther: number

	@Column({
		name: 'rec_b_14_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB14RepeaterSw: number

	@Column({
		name: 'rec_b_14_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB14RepeaterMsm: number

	@Column({
		name: 'rec_b_14_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB14RepeaterOther: number

	@Column({
		name: 'rec_015_sewing',
		type: 'integer',
		nullable: true
	})
	rec015Sewing: number

	@Column({
		name: 'rec_a_15_new_sw',
		type: 'integer',
		nullable: true
	})
	recA15NewSw: number

	@Column({
		name: 'rec_a_15_new_msm',
		type: 'integer',
		nullable: true
	})
	recA15NewMsm: number

	@Column({
		name: 'rec_a_15_new_other',
		type: 'integer',
		nullable: true
	})
	recA15NewOther: number

	@Column({
		name: 'rec_b_15_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB15RepeaterSw: number

	@Column({
		name: 'rec_b_15_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB15RepeaterMsm: number

	@Column({
		name: 'rec_b_15_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB15RepeaterOther: number

	@Column({
		name: 'rec_016_nutritional_activity',
		type: 'integer',
		nullable: true
	})
	rec016NutritionalActivity: number

	@Column({
		name: 'rec_a_16_new_sw',
		type: 'integer',
		nullable: true
	})
	recA16NewSw: number

	@Column({
		name: 'rec_a_16_new_msm',
		type: 'integer',
		nullable: true
	})
	recA16NewMsm: number

	@Column({
		name: 'rec_a_16_new_other',
		type: 'integer',
		nullable: true
	})
	recA16NewOther: number

	@Column({
		name: 'rec_b_16_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB16RepeaterSw: number

	@Column({
		name: 'rec_b_16_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB16RepeaterMsm: number

	@Column({
		name: 'rec_b_16_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB16RepeaterOther: number

	@Column({
		name: 'rec_017_other',
		type: 'integer',
		nullable: true
	})
	rec017Other: number

	@Column({
		name: 'rec_a_17_new_sw',
		type: 'integer',
		nullable: true
	})
	recA17NewSw: number

	@Column({
		name: 'rec_a_17_new_msm',
		type: 'integer',
		nullable: true
	})
	recA17NewMsm: number

	@Column({
		name: 'rec_a_17_new_other',
		type: 'integer',
		nullable: true
	})
	recA17NewOther: number

	@Column({
		name: 'rec_b_17_repeater_sw',
		type: 'integer',
		nullable: true
	})
	recB17RepeaterSw: number

	@Column({
		name: 'rec_b_17_repeater_msm',
		type: 'integer',
		nullable: true
	})
	recB17RepeaterMsm: number

	@Column({
		name: 'rec_b_17_repeater_other',
		type: 'integer',
		nullable: true
	})
	recB17RepeaterOther: number

	@Column({
		name: 'total_sw',
		type: 'integer',
		nullable: true
	})
	totalSw: number

	@Column({
		name: 'total_msm',
		type: 'integer',
		nullable: true
	})
	totalMsm: number

	@Column({
		name: 'total_other',
		type: 'integer',
		nullable: true
	})
	totalOther: number

	@Column({
		name: 'vpet_sw',
		type: 'integer',
		nullable: true
	})
	vpetSw: number

	@Column({
		name: 'vpet_msm',
		type: 'integer',
		nullable: true
	})
	vpetMsm: number

	@Column({
		name: 'no_of_staff_peer',
		type: 'integer',
		nullable: true
	})
	noOfStaffPeer: number

	@Column({
		name: 'no_of_perdiem_peer',
		type: 'integer',
		nullable: true
	})
	noOfPerdiemPeer: number

	@Column({
		name: 'no_of_volunteer_peer',
		type: 'integer',
		nullable: true
	})
	noOfVolunteerPeer: number

	@Column({
		name: 'remark',
		nullable: true
	})
	remark: string

	@Column({
		name: 'male_condom',
		type: 'integer',
		nullable: true
	})
	maleCondom: number

	@Column({
		name: 'female_condom',
		type: 'integer',
		nullable: true
	})
	femaleCondom: number

	@Column({
		name: 'total_condom',
		type: 'integer',
		nullable: true
	})
	totalCondom: number

	@Column({
		name: 'leaflet',
		type: 'integer',
		nullable: true
	})
	leaflet: number

	@Column({
		name: 'gadget',
		type: 'integer',
		nullable: true
	})
	gadget: number

	@Column({
		name: 'other',
		type: 'integer',
		nullable: true
	})
	other: number

	@Column({
		name: 'total_iec',
		type: 'integer',
		nullable: true
	})
	totalIec: number

	@Column({
		name: 'sys_date',
		type: 'timestamptz',
		nullable: true
	})
	sysDate: Date

	@Column({
		name: 'last_registration_date',
		type: 'timestamptz',
		nullable: true
	})
	lastRegistrationDate: Date

	@Column({
		name: 'fusion_criteria',
		type: 'integer',
		nullable: true
	})
	fusionCriteria: number

}
