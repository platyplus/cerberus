// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { VcctDrugType } from './VcctDrugType'

@Entity()
export class Vcct {
	@Column({
		name: 'mdm_code',
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
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
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
		name: 'vcct_visit_date',
		type: 'timestamptz',
		nullable: true
	})
	vcctVisitDate: Date

	@Column({
		name: 'vcct_tb_patient',
		type: 'boolean',
		nullable: true
	})
	vcctTbPatient: boolean

	@Column({
		name: 'vcct_placeof_testing',
		nullable: true
	})
	vcctPlaceofTesting: string

	@Column({
		name: 'patient_target',
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

	@OneToMany(type => VcctDrugType, vcctDrugType => vcctDrugType.vcct, {
		cascade: true
	})
	vcctDrugTypes: VcctDrugType[]

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
		nullable: true
	})
	vcctResultOfLastHivTesting: string

	@Column({
		name: 'vcct_pretest_performed',
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
		nullable: true
	})
	vcctTestResult: string

	@Column({
		name: 'vcct_test_result_by_nhl',
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
		nullable: true
	})
	vcctTestForSyphilisInCurrentVisit: string

	@Column({
		name: 'vcct_current_ict_test_result',
		nullable: true
	})
	vcctCurrentIctTestResult: string

	@Column({
		name: 'vcct_current_rpr_test_result',
		nullable: true
	})
	vcctCurrentRprTestResult: string

	@Column({
		name: 'vcct_rpr_positive_dilution',
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
		nullable: true
	})
	vcctKnownYourPartnerHivStatus: string

	@Column({
		name: 'vcct_if_you_dont_know_offer_partner_hiv_test',
		nullable: true
	})
	vcctIfYouDontKnowOfferPartnerHivTest: string

	@Column({
		name: 'vcct_patient_should_return_in',
		nullable: true
	})
	vcctPatientShouldReturnIn: string

	@Column({
		name: 'vcct_end_of_visit_other',
		nullable: true
	})
	vcctEndOfVisitOther: string

	@Column({
		name: 'vcct_date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	vcctDateNextVisit: Date

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
		name: 'key'
	})
	key: string

}
