// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { DrugType } from './DrugType'

@Entity()
export class Vcct {
	@Column({
		name: 'mdm_code',
		type: 'text',
		nullable: true
	})
	mdmCode: string

	@Column({
		name: 'registration_date',
		type: 'timestamptz',
		nullable: true
	})
	registrationDate: Date

	@Column({
		name: 'patient_name',
		type: 'text',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		type: 'text',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
		type: 'text',
		nullable: true
	})
	sex: string

	@Column({
		name: 'date_of_birth',
		type: 'timestamptz',
		nullable: true
	})
	dateOfBirth: Date

	@Column({
		name: 'age',
		type: 'integer',
		nullable: true
	})
	age: number

	@Column({
		name: 'visit_date',
		type: 'timestamptz',
		nullable: true
	})
	visitDate: Date

	@Column({
		name: 'is_tb_patient',
		type: 'boolean',
		nullable: true
	})
	isTbPatient: boolean

	@Column({
		name: 'place_of_testing',
		type: 'text',
		nullable: true
	})
	placeOfTesting: string

	@Column({
		name: 'patient_target',
		type: 'text',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'vcct_unsafe_sex_in_last_six_weeks',
		type: 'boolean',
		nullable: true
	})
	vcctUnsafeSexInLastSixWeeks: boolean

	@Column({
		name: 'vcct_id_usince',
		type: 'integer',
		nullable: true
	})
	vcctIdUsince: number

	@Column({
		name: 'vcct_drug_use_within_last_1_year',
		type: 'boolean',
		nullable: true
	})
	vcctDrugUseWithinLast1Year: boolean

	@OneToMany(type => DrugType, drugType => drugType.vcct, {
		cascade: true
	})
	drugTypes: DrugType[]

	@Column({
		name: 'vcct_share_needle_or_syringe_in_last_six_weeks',
		type: 'boolean',
		nullable: true
	})
	vcctShareNeedleOrSyringeInLastSixWeeks: boolean

	@Column({
		name: 'vcct_blood_transfusion_in_last_six_weeks',
		type: 'boolean',
		nullable: true
	})
	vcctBloodTransfusionInLastSixWeeks: boolean

	@Column({
		name: 'vcct_body_pierce_and_tattoo_in_last_six_weeks',
		type: 'boolean',
		nullable: true
	})
	vcctBodyPierceAndTattooInLastSixWeeks: boolean

	@Column({
		name: 'vcct_prev_hiv_testing',
		type: 'boolean',
		nullable: true
	})
	vcctPrevHivTesting: boolean

	@Column({
		name: 'vcct_prev_hiv_testing_date',
		type: 'timestamptz',
		nullable: true
	})
	vcctPrevHivTestingDate: Date

	@Column({
		name: 'vcct_result_of_last_hiv_testing',
		type: 'text',
		nullable: true
	})
	vcctResultOfLastHivTesting: string

	@Column({
		name: 'vcct_pretest_performed',
		type: 'text',
		nullable: true
	})
	vcctPretestPerformed: string

	@Column({
		name: 'vcct_pre_test_date',
		type: 'timestamptz',
		nullable: true
	})
	vcctPreTestDate: Date

	@Column({
		name: 'vcct_hiv_test',
		type: 'text',
		nullable: true
	})
	vcctHivTest: string

	@Column({
		name: 'vcct_hiv_blood_test',
		type: 'integer',
		nullable: true
	})
	vcctHivBloodTest: number

	@Column({
		name: 'vcct_post_test_performed',
		type: 'text',
		nullable: true
	})
	vcctPostTestPerformed: string

	@Column({
		name: 'vcct_post_test_date',
		type: 'timestamptz',
		nullable: true
	})
	vcctPostTestDate: Date

	@Column({
		name: 'vcct_test_result',
		type: 'text',
		nullable: true
	})
	vcctTestResult: string

	@Column({
		name: 'vcct_test_result_by_nhl',
		type: 'text',
		nullable: true
	})
	vcctTestResultByNhl: string

	@Column({
		name: 'vcct_nhl_date',
		type: 'timestamptz',
		nullable: true
	})
	vcctNhlDate: Date

	@Column({
		name: 'vcct_history_of_syphilis',
		type: 'boolean',
		nullable: true
	})
	vcctHistoryOfSyphilis: boolean

	@Column({
		name: 'vcct_test_for_syphilis_in_current_visit',
		type: 'text',
		nullable: true
	})
	vcctTestForSyphilisInCurrentVisit: string

	@Column({
		name: 'vcct_current_ict_test_result',
		type: 'text',
		nullable: true
	})
	vcctCurrentIctTestResult: string

	@Column({
		name: 'vcct_current_rpr_test_result',
		type: 'text',
		nullable: true
	})
	vcctCurrentRprTestResult: string

	@Column({
		name: 'vcct_rpr_positive_dilution',
		type: 'text',
		nullable: true
	})
	vcctRprPositiveDilution: string

	@Column({
		name: 'vcct_1st_time_hiv_test',
		type: 'integer',
		nullable: true
	})
	vcct1stTimeHivTest: number

	@Column({
		name: 'vcct_1st_time_hiv_test_and_positive',
		type: 'integer',
		nullable: true
	})
	vcct1stTimeHivTestAndPositive: number

	@Column({
		name: 'vcct_partner_hiv_testing',
		type: 'boolean',
		nullable: true
	})
	vcctPartnerHivTesting: boolean

	@Column({
		name: 'vcct_date_of_partner_hiv_testing',
		type: 'timestamptz',
		nullable: true
	})
	vcctDateOfPartnerHivTesting: Date

	@Column({
		name: 'vcct_known_your_partner_hiv_status',
		type: 'text',
		nullable: true
	})
	vcctKnownYourPartnerHivStatus: string

	@Column({
		name: 'vcct_if_you_dont_know_offer_partner_hiv_test',
		type: 'text',
		nullable: true
	})
	vcctIfYouDontKnowOfferPartnerHivTest: string

	@Column({
		name: 'vcct_patient_should_return_in',
		type: 'text',
		nullable: true
	})
	vcctPatientShouldReturnIn: string

	@Column({
		name: 'vcct_end_of_visit_other',
		type: 'text',
		nullable: true
	})
	vcctEndOfVisitOther: string

	@Column({
		name: 'date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	dateNextVisit: Date

	@Column({
		name: 'vcct_hiv_retesting',
		type: 'boolean',
		nullable: true
	})
	vcctHivRetesting: boolean

	@Column({
		name: 'vcct_hiv_retesting_date',
		type: 'timestamptz',
		nullable: true
	})
	vcctHivRetestingDate: Date

	@Column({
		name: 'vcct_hiv_retesting_result',
		type: 'text',
		nullable: true
	})
	vcctHivRetestingResult: string

	@Column({
		name: 'vcct_nhlhiv_retesting_date',
		type: 'timestamptz',
		nullable: true
	})
	vcctNhlhivRetestingDate: Date

	@Column({
		name: 'vcct_nhlhiv_retesting_result',
		type: 'text',
		nullable: true
	})
	vcctNhlhivRetestingResult: string

	@Column({
		name: 'vcct_followupvisitdate',
		type: 'timestamptz',
		nullable: true
	})
	vcctFollowupvisitdate: Date

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@Column({
		name: 'last_registration_date',
		type: 'timestamptz',
		nullable: true
	})
	lastRegistrationDate: Date

	@PrimaryColumn({
		name: 'key',
		type: 'text',
		default: 'unknown'
	})
	key: string

}
