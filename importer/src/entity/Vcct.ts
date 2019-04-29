// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { VcctDrugType } from './VcctDrugType'

@Entity()
export class Vcct {
	@Column({
    nullable: true,
		name: 'mdm_code'
  })
	mdmCode: string

	@Column({
    nullable: true,
		name: 'registration_date',
		type: 'timestamptz'
  })
	registrationDate: Date

	@Column({
    nullable: true,
		name: 'patient_name'
  })
	patientName: string

	@Column({
    nullable: true,
		name: 'father_name'
  })
	fatherName: string

	@Column({
    nullable: true,
		name: 'sex'
  })
	sex: string

	@Column({
    nullable: true,
		name: 'date_of_birth',
		type: 'timestamptz'
  })
	dateOfBirth: Date

	@Column({
    nullable: true,
		name: 'age',
		type: 'integer'
  })
	age: number

	@Column({
    nullable: true,
		name: 'vcct_visit_date',
		type: 'timestamptz'
  })
	vcctVisitDate: Date

	@Column({
    nullable: true,
		name: 'vcct_tb_patient',
		type: 'boolean'
  })
	vcctTbPatient: boolean

	@Column({
    nullable: true,
		name: 'vcct_placeof_testing'
  })
	vcctPlaceofTesting: string

	@Column({
    nullable: true,
		name: 'patient_target'
  })
	patientTarget: string

	@Column({
    nullable: true,
		name: 'vcct_unsafe_sex_in_last_six_weeks',
		type: 'boolean'
  })
	vcctUnsafeSexInLastSixWeeks: boolean

	@Column({
    nullable: true,
		name: 'vcct_id_usince',
		type: 'integer'
  })
	vcctIdUsince: number

	@Column({
    nullable: true,
		name: 'vcct_drug_use_within_last_1_year',
		type: 'boolean'
  })
	vcctDrugUseWithinLast1Year: boolean

	@OneToMany(type => VcctDrugType, vcctDrugType => vcctDrugType.vcct, {
    cascade: true
  })
	vcctDrugTypes: VcctDrugType[]

	@Column({
    nullable: true,
		name: 'vcct_share_needle_or_syringe_in_last_six_weeks',
		type: 'boolean'
  })
	vcctShareNeedleOrSyringeInLastSixWeeks: boolean

	@Column({
    nullable: true,
		name: 'vcct_blood_transfusion_in_last_six_weeks',
		type: 'boolean'
  })
	vcctBloodTransfusionInLastSixWeeks: boolean

	@Column({
    nullable: true,
		name: 'vcct_body_pierce_and_tattoo_in_last_six_weeks',
		type: 'boolean'
  })
	vcctBodyPierceAndTattooInLastSixWeeks: boolean

	@Column({
    nullable: true,
		name: 'vcct_prev_hiv_testing',
		type: 'boolean'
  })
	vcctPrevHivTesting: boolean

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
		name: 'vcct_history_of_syphilis',
		type: 'boolean'
  })
	vcctHistoryOfSyphilis: boolean

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
		name: 'vcct_partner_hiv_testing',
		type: 'boolean'
  })
	vcctPartnerHivTesting: boolean

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
		name: 'vcct_hiv_retesting',
		type: 'boolean'
  })
	vcctHivRetesting: boolean

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
