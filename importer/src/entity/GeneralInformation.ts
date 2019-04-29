// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class GeneralInformation {
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
		name: 'patient_target'
  })
	patientTarget: string

	@Column({
    nullable: true,
		name: 'gi_place_of_medical_care'
  })
	giPlaceOfMedicalCare: string

	@Column({
    nullable: true,
		name: 'gi_visit_date',
		type: 'timestamptz'
  })
	giVisitDate: Date

	@Column({
    nullable: true,
		name: 'marital_status'
  })
	maritalStatus: string

	@Column({
    nullable: true,
		name: 'b_04_current_work_place'
  })
	b04CurrentWorkPlace: string

	@Column({
    nullable: true,
		name: 'height',
		type: 'integer'
  })
	height: number

	@Column({
    nullable: true,
		name: 'gi_bw',
		type: 'integer'
  })
	giBw: number

	@Column({
    nullable: true,
		name: 'gi_lb_or_kg'
  })
	giLbOrKg: string

	@Column({
    nullable: true,
		name: 'gi_bmi',
		type: 'integer'
  })
	giBmi: number

	@Column({
    nullable: true,
		name: 'gi_temperature',
		type: 'integer'
  })
	giTemperature: number

	@Column({
    nullable: true,
		name: 'gi_cor_f'
  })
	giCorF: string

	@Column({
    nullable: true,
		name: 'blood_pressure_systolic',
		type: 'integer'
  })
	bloodPressureSystolic: number

	@Column({
    nullable: true,
		name: 'blood_pressure_diastolic',
		type: 'integer'
  })
	bloodPressureDiastolic: number

	@Column({
    nullable: true,
		name: 'gi_rr',
		type: 'integer'
  })
	giRr: number

	@Column({
    nullable: true,
		name: 'gi_pulse',
		type: 'integer'
  })
	giPulse: number

	@Column({
    nullable: true,
		name: 'gi_reproductive_health'
  })
	giReproductiveHealth: string

	@Column({
    nullable: true,
		name: 'gi_contraception',
		type: 'boolean'
  })
	giContraception: boolean

	@Column({
    nullable: true,
		name: 'gi_contraception_type'
  })
	giContraceptionType: string

	@Column({
    nullable: true,
		name: 'gi_other_contraception_type'
  })
	giOtherContraceptionType: string

	@Column({
    nullable: true,
		name: 'gi_drug_taken_on',
		type: 'timestamptz'
  })
	giDrugTakenOn: Date

	@Column({
    nullable: true,
		name: 'gi_lm_pdate',
		type: 'timestamptz'
  })
	giLmPdate: Date

	@Column({
    nullable: true,
		name: 'gi_parity',
		type: 'integer'
  })
	giParity: number

	@Column({
    nullable: true,
		name: 'gi_condom_use_for_last_sex',
		type: 'boolean'
  })
	giCondomUseForLastSex: boolean

	@Column({
    nullable: true,
		name: 'gi_number_clients_last_working_day',
		type: 'integer'
  })
	giNumberClientsLastWorkingDay: number

	@Column({
    nullable: true,
		name: 'gi_share_needle_or_syringe_in_last',
		type: 'boolean'
  })
	giShareNeedleOrSyringeInLast: boolean

	@Column({
    nullable: true,
		name: 'gi_share_needle_or_syringe_in_last_month',
		type: 'boolean'
  })
	giShareNeedleOrSyringeInLastMonth: boolean

	@Column({
    nullable: true,
		name: 'gi_share_needle_or_syringe_in_last_6_months',
		type: 'boolean'
  })
	giShareNeedleOrSyringeInLast6Months: boolean

	@Column({
    nullable: true,
		name: 'gi_remarks'
  })
	giRemarks: string

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
