// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { VcctDrugType } from './VcctDrugType'

@Entity()
export class Vcct {
	@Column({
    nullable: true,
		name: 'md_mcode'
  })
	mdMcode: string

	@Column({
    nullable: true,
		name: 'a_00_registration_date',
		type: 'timestamptz'
  })
	a00RegistrationDate: Date

	@Column({
    nullable: true,
		name: 'a_01_patient_name'
  })
	a01PatientName: string

	@Column({
    nullable: true,
		name: 'a_02_father_name'
  })
	a02FatherName: string

	@Column({
    nullable: true,
		name: 'a_03_sexe'
  })
	a03Sexe: string

	@Column({
    nullable: true,
		name: 'a_041_date_of_birth',
		type: 'timestamptz'
  })
	a041DateOfBirth: Date

	@Column({
    nullable: true,
		name: 'a_05_age',
		type: 'integer'
  })
	a05Age: number

	@Column({
    nullable: true,
		name: 'vcct_visit_date',
		type: 'timestamptz'
  })
	vcctVisitDate: Date

	@Column({
    nullable: true,
		name: 'vcct_tb_patient'
  })
	vcctTbPatient: string

	@Column({
    nullable: true,
		name: 'vcct_placeof_testing'
  })
	vcctPlaceofTesting: string

	@Column({
    nullable: true,
		name: 'a_07_patient_target'
  })
	a07PatientTarget: string

	@Column({
    nullable: true,
		name: 'vcct_unsafe_sex_in_last_six_weeks'
  })
	vcctUnsafeSexInLastSixWeeks: string

	@Column({
    nullable: true,
		name: 'vcct_id_usince',
		type: 'integer'
  })
	vcctIdUsince: number

	@Column({
    nullable: true,
		name: 'vcct_drug_use_within_last_1_year'
  })
	vcctDrugUseWithinLast1Year: string

	@OneToMany(type => VcctDrugType, vcctDrugType => vcctDrugType.vcct, {
    cascade: true
  })
	vcctDrugTypes: VcctDrugType[]

	@Column({
    nullable: true,
		name: 'vcct_share_needle_or_syringe_in_last_six_weeks'
  })
	vcctShareNeedleOrSyringeInLastSixWeeks: string

	@Column({
    nullable: true,
		name: 'vcct_share_needle_or_syringe_in_last_six_weeks_1'
  })
	vcctShareNeedleOrSyringeInLastSixWeeks1: string

	@Column({
    nullable: true,
		name: 'vcct_blood_transfusion_in_last_six_weeks'
  })
	vcctBloodTransfusionInLastSixWeeks: string

	@Column({
    nullable: true,
		name: 'vcct_body_pierce_and_tattoo_in_last_six_weeks'
  })
	vcctBodyPierceAndTattooInLastSixWeeks: string

	@Column({
    nullable: true,
		name: 'vcct_prev_hiv_testing'
  })
	vcctPrevHivTesting: string

	@Column({
    nullable: true,
		name: 'vcct_prev_hiv_testing_date',
		type: 'timestamptz'
  })
	vcctPrevHivTestingDate: Date

	@Column({
    nullable: true,
		name: 'vcct_result_of_last_hiv_testing'
  })
	vcctResultOfLastHivTesting: string

	@Column({
    nullable: true,
		name: 'vcct_pretest_performed'
  })
	vcctPretestPerformed: string

	@Column({
    nullable: true,
		name: 'vcct_pre_test_date',
		type: 'timestamptz'
  })
	vcctPreTestDate: Date

	@Column({
    nullable: true,
		name: 'vcct_hiv_test'
  })
	vcctHivTest: string

	@Column({
    nullable: true,
		name: 'vcct_hiv_blood_test',
		type: 'integer'
  })
	vcctHivBloodTest: number

	@Column({
    nullable: true,
		name: 'vcct_post_test_performed'
  })
	vcctPostTestPerformed: string

	@Column({
    nullable: true,
		name: 'vcct_post_test_date',
		type: 'timestamptz'
  })
	vcctPostTestDate: Date

	@Column({
    nullable: true,
		name: 'vcct_test_result'
  })
	vcctTestResult: string

	@Column({
    nullable: true,
		name: 'vcct_test_result_by_nhl'
  })
	vcctTestResultByNhl: string

	@Column({
    nullable: true,
		name: 'vcct_nhl_date',
		type: 'timestamptz'
  })
	vcctNhlDate: Date

	@Column({
    nullable: true,
		name: 'vcct_history_of_syphilis'
  })
	vcctHistoryOfSyphilis: string

	@Column({
    nullable: true,
		name: 'vcct_test_for_syphilis_in_current_visit'
  })
	vcctTestForSyphilisInCurrentVisit: string

	@Column({
    nullable: true,
		name: 'vcct_current_ict_test_result'
  })
	vcctCurrentIctTestResult: string

	@Column({
    nullable: true,
		name: 'vcct_current_rpr_test_result'
  })
	vcctCurrentRprTestResult: string

	@Column({
    nullable: true,
		name: 'vcct_rpr_positive_dilution'
  })
	vcctRprPositiveDilution: string

	@Column({
    nullable: true,
		name: 'vcct_1st_time_hiv_test',
		type: 'integer'
  })
	vcct1stTimeHivTest: number

	@Column({
    nullable: true,
		name: 'vcct_1st_time_hiv_test_and_positive',
		type: 'integer'
  })
	vcct1stTimeHivTestAndPositive: number

	@Column({
    nullable: true,
		name: 'vcct_partner_hiv_testing'
  })
	vcctPartnerHivTesting: string

	@Column({
    nullable: true,
		name: 'vcct_date_of_partner_hiv_testing',
		type: 'timestamptz'
  })
	vcctDateOfPartnerHivTesting: Date

	@Column({
    nullable: true,
		name: 'vcct_known_your_partner_hiv_status'
  })
	vcctKnownYourPartnerHivStatus: string

	@Column({
    nullable: true,
		name: 'vcct_if_you_dont_know_offer_partner_hiv_test'
  })
	vcctIfYouDontKnowOfferPartnerHivTest: string

	@Column({
    nullable: true,
		name: 'vcct_patient_should_return_in'
  })
	vcctPatientShouldReturnIn: string

	@Column({
    nullable: true,
		name: 'vcct_end_of_visit_other'
  })
	vcctEndOfVisitOther: string

	@Column({
    nullable: true,
		name: 'vcct_date_next_visit',
		type: 'timestamptz'
  })
	vcctDateNextVisit: Date

	@Column({
    nullable: true,
		name: 'vcct_hiv_retesting'
  })
	vcctHivRetesting: string

	@Column({
    nullable: true,
		name: 'vcct_hiv_retesting_date',
		type: 'timestamptz'
  })
	vcctHivRetestingDate: Date

	@Column({
    nullable: true,
		name: 'vcct_hiv_retesting_result'
  })
	vcctHivRetestingResult: string

	@Column({
    nullable: true,
		name: 'vcct_nhlhiv_retesting_date',
		type: 'timestamptz'
  })
	vcctNhlhivRetestingDate: Date

	@Column({
    nullable: true,
		name: 'vcct_nhlhiv_retesting_result'
  })
	vcctNhlhivRetestingResult: string

	@Column({
    nullable: true,
		name: 'vcct_followupvisitdate',
		type: 'timestamptz'
  })
	vcctFollowupvisitdate: Date

	@Column({
    nullable: true,
		name: 'verify',
		type: 'integer'
  })
	verify: number

	@Column({
    nullable: true,
		name: 'last_registration_date',
		type: 'timestamptz'
  })
	lastRegistrationDate: Date

	@PrimaryColumn({
    name: 'key'
  })
	key: string

}
