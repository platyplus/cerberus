// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class GeneralInformation {
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
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'gi_place_of_medical_care'
	})
	giPlaceOfMedicalCare: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'gi_visit_date'
	})
	giVisitDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'marital_status'
	})
	maritalStatus: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'b_04_current_work_place'
	})
	b04CurrentWorkPlace: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'height'
	})
	height: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gi_bw'
	})
	giBw: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'gi_lb_or_kg'
	})
	giLbOrKg: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gi_bmi'
	})
	giBmi: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gi_temperature'
	})
	giTemperature: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'gi_cor_f'
	})
	giCorF: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'blood_pressure_systolic'
	})
	bloodPressureSystolic: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'blood_pressure_diastolic'
	})
	bloodPressureDiastolic: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gi_rr'
	})
	giRr: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gi_pulse'
	})
	giPulse: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'gi_reproductive_health'
	})
	giReproductiveHealth: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'gi_contraception'
	})
	giContraception: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'gi_contraception_type'
	})
	giContraceptionType: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'gi_other_contraception_type'
	})
	giOtherContraceptionType: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'gi_drug_taken_on'
	})
	giDrugTakenOn: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'gi_lm_pdate'
	})
	giLmPdate: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gi_parity'
	})
	giParity: number

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'gi_condom_use_for_last_sex'
	})
	giCondomUseForLastSex: boolean

	@Column({
		type: 'integer',
		nullable: true,
		name: 'gi_number_clients_last_working_day'
	})
	giNumberClientsLastWorkingDay: number

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'gi_share_needle_or_syringe_in_last'
	})
	giShareNeedleOrSyringeInLast: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'gi_share_needle_or_syringe_in_last_month'
	})
	giShareNeedleOrSyringeInLastMonth: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'gi_share_needle_or_syringe_in_last_6_months'
	})
	giShareNeedleOrSyringeInLast6Months: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'gi_remarks'
	})
	giRemarks: string

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
