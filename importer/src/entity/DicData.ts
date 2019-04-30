// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class DicData {
	@PrimaryColumn({
		type: 'timestamptz',
		name: 'date'
	})
	date: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_001_art_sessions'
	})
	edu001ArtSessions: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_01_new_sw'
	})
	eduA01NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_01_new_msm'
	})
	eduA01NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_01_new_other'
	})
	eduA01NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_01_repeater_sw'
	})
	eduB01RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_01_repeater_msm'
	})
	eduB01RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_01_repeater_other'
	})
	eduB01RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_002_art_support_group'
	})
	edu002ArtSupportGroup: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_02_new_sw'
	})
	eduA02NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_02_new_msm'
	})
	eduA02NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_02_new_other'
	})
	eduA02NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_02_repeater_sw'
	})
	eduB02RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_02_repeater_msm'
	})
	eduB02RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_02_repeater_other'
	})
	eduB02RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_003_bomb_book'
	})
	edu003BombBook: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_03_new_sw'
	})
	eduA03NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_03_new_msm'
	})
	eduA03NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_03_new_other'
	})
	eduA03NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_03_repeater_sw'
	})
	eduB03RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_03_repeater_msm'
	})
	eduB03RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_03_repeater_other'
	})
	eduB03RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_004_contraception'
	})
	edu004Contraception: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_04_new_sw'
	})
	eduA04NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_04_new_msm'
	})
	eduA04NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_04_new_other'
	})
	eduA04NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_04_repeater_sw'
	})
	eduB04RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_04_repeater_msm'
	})
	eduB04RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_04_repeater_other'
	})
	eduB04RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_005_dice_to_know'
	})
	edu005DiceToKnow: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_05_new_sw'
	})
	eduA05NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_05_new_msm'
	})
	eduA05NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_05_new_other'
	})
	eduA05NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_05_repeater_sw'
	})
	eduB05RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_05_repeater_msm'
	})
	eduB05RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_05_repeater_other'
	})
	eduB05RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_006_educational_games'
	})
	edu006EducationalGames: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_06_new_sw'
	})
	eduA06NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_06_new_msm'
	})
	eduA06NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_06_new_other'
	})
	eduA06NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_06_repeater_sw'
	})
	eduB06RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_06_repeater_msm'
	})
	eduB06RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_06_repeater_other'
	})
	eduB06RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_007_female_condom'
	})
	edu007FemaleCondom: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_07_new_sw'
	})
	eduA07NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_07_new_msm'
	})
	eduA07NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_07_new_other'
	})
	eduA07NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_07_repeater_sw'
	})
	eduB07RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_07_repeater_msm'
	})
	eduB07RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_07_repeater_other'
	})
	eduB07RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_008_focus_group'
	})
	edu008FocusGroup: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_08_new_sw'
	})
	eduA08NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_08_new_msm'
	})
	eduA08NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_08_new_other'
	})
	eduA08NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_08_repeater_sw'
	})
	eduB08RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_08_repeater_msm'
	})
	eduB08RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_08_repeater_other'
	})
	eduB08RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_009_male_condom'
	})
	edu009MaleCondom: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_09_new_sw'
	})
	eduA09NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_09_new_msm'
	})
	eduA09NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_09_new_other'
	})
	eduA09NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_09_repeater_sw'
	})
	eduB09RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_09_repeater_msm'
	})
	eduB09RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_09_repeater_other'
	})
	eduB09RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_010_monthly_workshops'
	})
	edu010MonthlyWorkshops: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_10_new_sw'
	})
	eduA10NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_10_new_msm'
	})
	eduA10NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_10_new_other'
	})
	eduA10NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_10_repeater_sw'
	})
	eduB10RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_10_repeater_msm'
	})
	eduB10RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_10_repeater_other'
	})
	eduB10RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_011_msm_support_group'
	})
	edu011MsmSupportGroup: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_11_new_sw'
	})
	eduA11NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_11_new_msm'
	})
	eduA11NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_11_new_other'
	})
	eduA11NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_11_repeater_sw'
	})
	eduB11RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_11_repeater_msm'
	})
	eduB11RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_11_repeater_other'
	})
	eduB11RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_012_nutrition'
	})
	edu012Nutrition: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_12_new_sw'
	})
	eduA12NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_12_new_msm'
	})
	eduA12NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_12_new_other'
	})
	eduA12NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_12_repeater_sw'
	})
	eduB12RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_12_repeater_msm'
	})
	eduB12RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_12_repeater_other'
	})
	eduB12RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_013_plha_sessions'
	})
	edu013PlhaSessions: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_13_new_sw'
	})
	eduA13NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_13_new_msm'
	})
	eduA13NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_13_new_other'
	})
	eduA13NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_13_repeater_sw'
	})
	eduB13RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_13_repeater_msm'
	})
	eduB13RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_13_repeater_other'
	})
	eduB13RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_014_plha_support_group'
	})
	edu014PlhaSupportGroup: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_14_new_sw'
	})
	eduA14NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_14_new_msm'
	})
	eduA14NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_14_new_other'
	})
	eduA14NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_14_repeater_sw'
	})
	eduB14RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_14_repeater_msm'
	})
	eduB14RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_14_repeater_other'
	})
	eduB14RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_015_role_plays'
	})
	edu015RolePlays: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_15_new_sw'
	})
	eduA15NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_15_new_msm'
	})
	eduA15NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_15_new_other'
	})
	eduA15NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_15_repeater_sw'
	})
	eduB15RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_15_repeater_msm'
	})
	eduB15RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_15_repeater_other'
	})
	eduB15RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_016_safer_sex'
	})
	edu016SaferSex: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_16_new_sw'
	})
	eduA16NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_16_new_msm'
	})
	eduA16NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_16_new_other'
	})
	eduA16NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_16_repeater_sw'
	})
	eduB16RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_16_repeater_msm'
	})
	eduB16RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_16_repeater_other'
	})
	eduB16RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_017_st_is_hiv'
	})
	edu017StIsHiv: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_17_new_sw'
	})
	eduA17NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_17_new_msm'
	})
	eduA17NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_17_new_other'
	})
	eduA17NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_17_repeater_sw'
	})
	eduB17RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_17_repeater_msm'
	})
	eduB17RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_17_repeater_other'
	})
	eduB17RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_018_sw_support_group'
	})
	edu018SwSupportGroup: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_18_new_sw'
	})
	eduA18NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_18_new_msm'
	})
	eduA18NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_18_new_other'
	})
	eduA18NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_18_repeater_sw'
	})
	eduB18RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_18_repeater_msm'
	})
	eduB18RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_18_repeater_other'
	})
	eduB18RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_019_tb_sessions'
	})
	edu019TbSessions: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_19_new_sw'
	})
	eduA19NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_19_new_msm'
	})
	eduA19NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_19_new_other'
	})
	eduA19NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_19_repeater_sw'
	})
	eduB19RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_19_repeater_msm'
	})
	eduB19RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_19_repeater_other'
	})
	eduB19RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_020_v_peer_training'
	})
	edu020VPeerTraining: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_20_new_sw'
	})
	eduA20NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_20_new_msm'
	})
	eduA20NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_20_new_other'
	})
	eduA20NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_20_repeater_sw'
	})
	eduB20RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_20_repeater_msm'
	})
	eduB20RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_20_repeater_other'
	})
	eduB20RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_021_other'
	})
	edu021Other: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_21_new_sw'
	})
	eduA21NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_21_new_msm'
	})
	eduA21NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_a_21_new_other'
	})
	eduA21NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_21_repeater_sw'
	})
	eduB21RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_21_repeater_msm'
	})
	eduB21RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'edu_b_21_repeater_other'
	})
	eduB21RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_001_bag_making'
	})
	rec001BagMaking: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_01_new_sw'
	})
	recA01NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_01_new_msm'
	})
	recA01NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_01_new_other'
	})
	recA01NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_01_repeater_sw'
	})
	recB01RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_01_repeater_msm'
	})
	recB01RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_01_repeater_other'
	})
	recB01RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_002_beauty_sessions'
	})
	rec002BeautySessions: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_02_new_sw'
	})
	recA02NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_02_new_msm'
	})
	recA02NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_02_new_other'
	})
	recA02NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_02_repeater_sw'
	})
	recB02RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_02_repeater_msm'
	})
	recB02RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_02_repeater_other'
	})
	recB02RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_003_dancing'
	})
	rec003Dancing: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_03_new_sw'
	})
	recA03NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_03_new_msm'
	})
	recA03NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_03_new_other'
	})
	recA03NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_03_repeater_sw'
	})
	recB03RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_03_repeater_msm'
	})
	recB03RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_03_repeater_other'
	})
	recB03RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_004_english_sessions'
	})
	rec004EnglishSessions: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_04_new_sw'
	})
	recA04NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_04_new_msm'
	})
	recA04NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_04_new_other'
	})
	recA04NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_04_repeater_sw'
	})
	recB04RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_04_repeater_msm'
	})
	recB04RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_04_repeater_other'
	})
	recB04RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_005_game'
	})
	rec005Game: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_05_new_sw'
	})
	recA05NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_05_new_msm'
	})
	recA05NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_05_new_other'
	})
	recA05NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_05_repeater_sw'
	})
	recB05RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_05_repeater_msm'
	})
	recB05RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_05_repeater_other'
	})
	recB05RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_006_hair_straight'
	})
	rec006HairStraight: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_06_new_sw'
	})
	recA06NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_06_new_msm'
	})
	recA06NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_06_new_other'
	})
	recA06NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_06_repeater_sw'
	})
	recB06RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_06_repeater_msm'
	})
	recB06RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_06_repeater_other'
	})
	recB06RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_007_ktv_movie'
	})
	rec007KtvMovie: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_07_new_sw'
	})
	recA07NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_07_new_msm'
	})
	recA07NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_07_new_other'
	})
	recA07NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_07_repeater_sw'
	})
	recB07RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_07_repeater_msm'
	})
	recB07RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_07_repeater_other'
	})
	recB07RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_008_leaflet'
	})
	rec008Leaflet: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_08_new_sw'
	})
	recA08NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_08_new_msm'
	})
	recA08NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_08_new_other'
	})
	recA08NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_08_repeater_sw'
	})
	recB08RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_08_repeater_msm'
	})
	recB08RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_08_repeater_other'
	})
	recB08RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_009_legal_counselling'
	})
	rec009LegalCounselling: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_09_new_sw'
	})
	recA09NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_09_new_msm'
	})
	recA09NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_09_new_other'
	})
	recA09NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_09_repeater_sw'
	})
	recB09RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_09_repeater_msm'
	})
	recB09RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_09_repeater_other'
	})
	recB09RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_010_massage_training'
	})
	rec010MassageTraining: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_10_new_sw'
	})
	recA10NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_10_new_msm'
	})
	recA10NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_10_new_other'
	})
	recA10NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_10_repeater_sw'
	})
	recB10RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_10_repeater_msm'
	})
	recB10RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_10_repeater_other'
	})
	recB10RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_011_meditation_sessions'
	})
	rec011MeditationSessions: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_11_new_sw'
	})
	recA11NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_11_new_msm'
	})
	recA11NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_11_new_other'
	})
	recA11NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_11_repeater_sw'
	})
	recB11RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_11_repeater_msm'
	})
	recB11RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_11_repeater_other'
	})
	recB11RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_012_nail_polish'
	})
	rec012NailPolish: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_12_new_sw'
	})
	recA12NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_12_new_msm'
	})
	recA12NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_12_new_other'
	})
	recA12NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_12_repeater_sw'
	})
	recB12RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_12_repeater_msm'
	})
	recB12RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_12_repeater_other'
	})
	recB12RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_013_relexation'
	})
	rec013Relexation: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_13_new_sw'
	})
	recA13NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_13_new_msm'
	})
	recA13NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_13_new_other'
	})
	recA13NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_13_repeater_sw'
	})
	recB13RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_13_repeater_msm'
	})
	recB13RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_13_repeater_other'
	})
	recB13RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_014_self_esteem'
	})
	rec014SelfEsteem: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_14_new_sw'
	})
	recA14NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_14_new_msm'
	})
	recA14NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_14_new_other'
	})
	recA14NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_14_repeater_sw'
	})
	recB14RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_14_repeater_msm'
	})
	recB14RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_14_repeater_other'
	})
	recB14RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_015_sewing'
	})
	rec015Sewing: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_15_new_sw'
	})
	recA15NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_15_new_msm'
	})
	recA15NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_15_new_other'
	})
	recA15NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_15_repeater_sw'
	})
	recB15RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_15_repeater_msm'
	})
	recB15RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_15_repeater_other'
	})
	recB15RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_016_nutritional_activity'
	})
	rec016NutritionalActivity: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_16_new_sw'
	})
	recA16NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_16_new_msm'
	})
	recA16NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_16_new_other'
	})
	recA16NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_16_repeater_sw'
	})
	recB16RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_16_repeater_msm'
	})
	recB16RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_16_repeater_other'
	})
	recB16RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_017_other'
	})
	rec017Other: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_17_new_sw'
	})
	recA17NewSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_17_new_msm'
	})
	recA17NewMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_a_17_new_other'
	})
	recA17NewOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_17_repeater_sw'
	})
	recB17RepeaterSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_17_repeater_msm'
	})
	recB17RepeaterMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'rec_b_17_repeater_other'
	})
	recB17RepeaterOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'total_sw'
	})
	totalSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'total_msm'
	})
	totalMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'total_other'
	})
	totalOther: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'vpet_sw'
	})
	vpetSw: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'vpet_msm'
	})
	vpetMsm: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'no_of_staff_peer'
	})
	noOfStaffPeer: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'no_of_perdiem_peer'
	})
	noOfPerdiemPeer: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'no_of_volunteer_peer'
	})
	noOfVolunteerPeer: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'remark'
	})
	remark: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'male_condom'
	})
	maleCondom: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'female_condom'
	})
	femaleCondom: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'total_condom'
	})
	totalCondom: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'leaflet'
	})
	leaflet: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gadget'
	})
	gadget: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'other'
	})
	other: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'total_iec'
	})
	totalIec: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'sys_date'
	})
	sysDate: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'last_registration_date'
	})
	lastRegistrationDate: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'fusion_criteria'
	})
	fusionCriteria: number

}
