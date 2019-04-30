// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { VcctDrugType } from './VcctDrugType'

@Entity()
export class Vcct {
	@Column({
		type: 'string',
		nullable: true,
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'registration_date'
	})
	registrationDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_name'
	})
	patientName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'father_name'
	})
	fatherName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sex'
	})
	sex: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date_of_birth'
	})
	dateOfBirth: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'age'
	})
	age: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_visit_date'
	})
	vcctVisitDate: Date

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_tb_patient'
	})
	vcctTbPatient: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_placeof_testing'
	})
	vcctPlaceofTesting: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_unsafe_sex_in_last_six_weeks'
	})
	vcctUnsafeSexInLastSixWeeks: boolean

	@Column({
		type: 'integer',
		nullable: true,
		name: 'vcct_id_usince'
	})
	vcctIdUsince: number

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_drug_use_within_last_1_year'
	})
	vcctDrugUseWithinLast1Year: boolean

	@OneToMany(type => VcctDrugType, vcctDrugType => vcctDrugType.vcct, {
		cascade: true
	})
	vcctDrugTypes: VcctDrugType[]

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_share_needle_or_syringe_in_last_six_weeks'
	})
	vcctShareNeedleOrSyringeInLastSixWeeks: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_blood_transfusion_in_last_six_weeks'
	})
	vcctBloodTransfusionInLastSixWeeks: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_body_pierce_and_tattoo_in_last_six_weeks'
	})
	vcctBodyPierceAndTattooInLastSixWeeks: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_prev_hiv_testing'
	})
	vcctPrevHivTesting: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_prev_hiv_testing_date'
	})
	vcctPrevHivTestingDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_result_of_last_hiv_testing'
	})
	vcctResultOfLastHivTesting: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_pretest_performed'
	})
	vcctPretestPerformed: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_pre_test_date'
	})
	vcctPreTestDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_hiv_test'
	})
	vcctHivTest: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'vcct_hiv_blood_test'
	})
	vcctHivBloodTest: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_post_test_performed'
	})
	vcctPostTestPerformed: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_post_test_date'
	})
	vcctPostTestDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_test_result'
	})
	vcctTestResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_test_result_by_nhl'
	})
	vcctTestResultByNhl: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_nhl_date'
	})
	vcctNhlDate: Date

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_history_of_syphilis'
	})
	vcctHistoryOfSyphilis: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_test_for_syphilis_in_current_visit'
	})
	vcctTestForSyphilisInCurrentVisit: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_current_ict_test_result'
	})
	vcctCurrentIctTestResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_current_rpr_test_result'
	})
	vcctCurrentRprTestResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_rpr_positive_dilution'
	})
	vcctRprPositiveDilution: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'vcct_1st_time_hiv_test'
	})
	vcct1stTimeHivTest: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'vcct_1st_time_hiv_test_and_positive'
	})
	vcct1stTimeHivTestAndPositive: number

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_partner_hiv_testing'
	})
	vcctPartnerHivTesting: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_date_of_partner_hiv_testing'
	})
	vcctDateOfPartnerHivTesting: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_known_your_partner_hiv_status'
	})
	vcctKnownYourPartnerHivStatus: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_if_you_dont_know_offer_partner_hiv_test'
	})
	vcctIfYouDontKnowOfferPartnerHivTest: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_patient_should_return_in'
	})
	vcctPatientShouldReturnIn: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_end_of_visit_other'
	})
	vcctEndOfVisitOther: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_date_next_visit'
	})
	vcctDateNextVisit: Date

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'vcct_hiv_retesting'
	})
	vcctHivRetesting: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_hiv_retesting_date'
	})
	vcctHivRetestingDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_hiv_retesting_result'
	})
	vcctHivRetestingResult: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_nhlhiv_retesting_date'
	})
	vcctNhlhivRetestingDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'vcct_nhlhiv_retesting_result'
	})
	vcctNhlhivRetestingResult: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'vcct_followupvisitdate'
	})
	vcctFollowupvisitdate: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'verify'
	})
	verify: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'last_registration_date'
	})
	lastRegistrationDate: Date

	@PrimaryColumn({
		type: 'string',
		name: 'key'
	})
	key: string

}
