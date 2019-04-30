// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class GeneralInformation {
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
		name: 'patient_target',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'gi_place_of_medical_care',
		nullable: true
	})
	giPlaceOfMedicalCare: string

	@Column({
		name: 'gi_visit_date',
		type: 'timestamptz',
		nullable: true
	})
	giVisitDate: Date

	@Column({
		name: 'marital_status',
		nullable: true
	})
	maritalStatus: string

	@Column({
		name: 'b_04_current_work_place',
		nullable: true
	})
	b04CurrentWorkPlace: string

	@Column({
		name: 'height',
		type: 'integer',
		nullable: true
	})
	height: number

	@Column({
		name: 'gi_bw',
		type: 'integer',
		nullable: true
	})
	giBw: number

	@Column({
		name: 'gi_lb_or_kg',
		nullable: true
	})
	giLbOrKg: string

	@Column({
		name: 'gi_bmi',
		type: 'integer',
		nullable: true
	})
	giBmi: number

	@Column({
		name: 'gi_temperature',
		type: 'integer',
		nullable: true
	})
	giTemperature: number

	@Column({
		name: 'gi_cor_f',
		nullable: true
	})
	giCorF: string

	@Column({
		name: 'blood_pressure_systolic',
		type: 'integer',
		nullable: true
	})
	bloodPressureSystolic: number

	@Column({
		name: 'blood_pressure_diastolic',
		type: 'integer',
		nullable: true
	})
	bloodPressureDiastolic: number

	@Column({
		name: 'gi_rr',
		type: 'integer',
		nullable: true
	})
	giRr: number

	@Column({
		name: 'gi_pulse',
		type: 'integer',
		nullable: true
	})
	giPulse: number

	@Column({
		name: 'gi_reproductive_health',
		nullable: true
	})
	giReproductiveHealth: string

	@Column({
		name: 'gi_contraception',
		type: 'boolean',
		nullable: true
	})
	giContraception: boolean

	@Column({
		name: 'gi_contraception_type',
		nullable: true
	})
	giContraceptionType: string

	@Column({
		name: 'gi_other_contraception_type',
		nullable: true
	})
	giOtherContraceptionType: string

	@Column({
		name: 'gi_drug_taken_on',
		type: 'timestamptz',
		nullable: true
	})
	giDrugTakenOn: Date

	@Column({
		name: 'gi_lm_pdate',
		type: 'timestamptz',
		nullable: true
	})
	giLmPdate: Date

	@Column({
		name: 'gi_parity',
		type: 'integer',
		nullable: true
	})
	giParity: number

	@Column({
		name: 'gi_condom_use_for_last_sex',
		type: 'boolean',
		nullable: true
	})
	giCondomUseForLastSex: boolean

	@Column({
		name: 'gi_number_clients_last_working_day',
		type: 'integer',
		nullable: true
	})
	giNumberClientsLastWorkingDay: number

	@Column({
		name: 'gi_share_needle_or_syringe_in_last',
		type: 'boolean',
		nullable: true
	})
	giShareNeedleOrSyringeInLast: boolean

	@Column({
		name: 'gi_share_needle_or_syringe_in_last_month',
		type: 'boolean',
		nullable: true
	})
	giShareNeedleOrSyringeInLastMonth: boolean

	@Column({
		name: 'gi_share_needle_or_syringe_in_last_6_months',
		type: 'boolean',
		nullable: true
	})
	giShareNeedleOrSyringeInLast6Months: boolean

	@Column({
		name: 'gi_remarks',
		nullable: true
	})
	giRemarks: string

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
