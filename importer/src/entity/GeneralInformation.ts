// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class GeneralInformation {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
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
		name: 'a_07_patient_target'
  })
  a07PatientTarget: string

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
		name: 'a_07_a_marital_status'
  })
  a07AMaritalStatus: string

  @Column({
    nullable: true,
		name: 'b_04_current_work_place'
  })
  b04CurrentWorkPlace: string

  @Column({
    nullable: true,
		name: 'a_06_a_height',
		type: 'integer'
  })
  a06AHeight: number

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
		name: 'gi_bp',
		type: 'integer'
  })
  giBp: number

  @Column({
    nullable: true,
		name: 'gi_bp_1',
		type: 'integer'
  })
  giBp1: number

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
		name: 'gi_contraception'
  })
  giContraception: string

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
		name: 'gi_condom_use_for_last_sex'
  })
  giCondomUseForLastSex: string

  @Column({
    nullable: true,
		name: 'gi_number_clients_last_working_day',
		type: 'integer'
  })
  giNumberClientsLastWorkingDay: number

  @Column({
    nullable: true,
		name: 'gi_share_needle_or_syringe_in_last'
  })
  giShareNeedleOrSyringeInLast: string

  @Column({
    nullable: true,
		name: 'gi_share_needle_or_syringe_in_last_month'
  })
  giShareNeedleOrSyringeInLastMonth: string

  @Column({
    nullable: true,
		name: 'gi_share_needle_or_syringe_in_last_6_months'
  })
  giShareNeedleOrSyringeInLast6Months: string

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

  @Column({
    nullable: true,
		name: 'key'
  })
  key: string

}
