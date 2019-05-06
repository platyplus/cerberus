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
		name: 'place_of_medical_care',
		nullable: true
	})
	placeOfMedicalCare: string

	@Column({
		name: 'visit_date',
		type: 'timestamptz',
		nullable: true
	})
	visitDate: Date

	@Column({
		name: 'marital_status',
		nullable: true
	})
	maritalStatus: string

	@Column({
		name: 'current_workplace',
		nullable: true
	})
	currentWorkplace: string

	@Column({
		name: 'height',
		type: 'integer',
		nullable: true
	})
	height: number

	@Column({
		name: 'body_weight',
		type: 'integer',
		nullable: true
	})
	bodyWeight: number

	@Column({
		name: 'lb_or_kg',
		nullable: true
	})
	lbOrKg: string

	@Column({
		name: 'bmi',
		type: 'integer',
		nullable: true
	})
	bmi: number

	@Column({
		name: 'temperature',
		type: 'integer',
		nullable: true
	})
	temperature: number

	@Column({
		name: 'celsius_or_fahrenheit',
		nullable: true
	})
	celsiusOrFahrenheit: string

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
		name: 'rr',
		type: 'integer',
		nullable: true
	})
	rr: number

	@Column({
		name: 'pulse',
		type: 'integer',
		nullable: true
	})
	pulse: number

	@Column({
		name: 'reproductive_health',
		nullable: true
	})
	reproductiveHealth: string

	@Column({
		name: 'contraception',
		type: 'boolean',
		nullable: true
	})
	contraception: boolean

	@Column({
		name: 'contraception_type',
		nullable: true
	})
	contraceptionType: string

	@Column({
		name: 'other_contraception_type',
		nullable: true
	})
	otherContraceptionType: string

	@Column({
		name: 'drug_taken_on',
		type: 'timestamptz',
		nullable: true
	})
	drugTakenOn: Date

	@Column({
		name: 'lmp_date',
		type: 'timestamptz',
		nullable: true
	})
	lmpDate: Date

	@Column({
		name: 'parity',
		type: 'integer',
		nullable: true
	})
	parity: number

	@Column({
		name: 'condom_use_for_last_sex',
		type: 'boolean',
		nullable: true
	})
	condomUseForLastSex: boolean

	@Column({
		name: 'number_clients_last_working_day',
		type: 'integer',
		nullable: true
	})
	numberClientsLastWorkingDay: number

	@Column({
		name: 'share_needle_or_syringe_in_last',
		type: 'boolean',
		nullable: true
	})
	shareNeedleOrSyringeInLast: boolean

	@Column({
		name: 'share_needle_or_syringe_in_last_month',
		type: 'boolean',
		nullable: true
	})
	shareNeedleOrSyringeInLastMonth: boolean

	@Column({
		name: 'share_needle_or_syringe_in_last_six_months',
		type: 'boolean',
		nullable: true
	})
	shareNeedleOrSyringeInLastSixMonths: boolean

	@Column({
		name: 'remarks',
		nullable: true
	})
	remarks: string

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
