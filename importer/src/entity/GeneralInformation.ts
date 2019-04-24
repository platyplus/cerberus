// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class GeneralInformation {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  mdMcode: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a00RegistrationDate: Date

  @Column({
    nullable: true
  })
  a01PatientName: string

  @Column({
    nullable: true
  })
  a02FatherName: string

  @Column({
    nullable: true
  })
  a03Sexe: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a041DateOfBirth: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  a05Age: number

  @Column({
    nullable: true
  })
  a07PatientTarget: string

  @Column({
    nullable: true
  })
  giPlaceOfMedicalCare: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  giVisitDate: Date

  @Column({
    nullable: true
  })
  a07AMaritalStatus: string

  @Column({
    nullable: true
  })
  b04CurrentWorkPlace: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  a06AHeight: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  giBw: number

  @Column({
    nullable: true
  })
  giLbOrKg: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  giBmi: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  giTemperature: number

  @Column({
    nullable: true
  })
  giCorF: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  giBp: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  giBp1: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  giRr: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  giPulse: number

  @Column({
    nullable: true
  })
  giReproductiveHealth: string

  @Column({
    nullable: true
  })
  giContraception: string

  @Column({
    nullable: true
  })
  giContraceptionType: string

  @Column({
    nullable: true
  })
  giOtherContraceptionType: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  giDrugTakenOn: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  giLmPdate: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  giParity: number

  @Column({
    nullable: true
  })
  giCondomUseForLastSex: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  giNumberClientsLastWorkingDay: number

  @Column({
    nullable: true
  })
  giShareNeedleOrSyringeInLast: string

  @Column({
    nullable: true
  })
  giShareNeedleOrSyringeInLastMonth: string

  @Column({
    nullable: true
  })
  giShareNeedleOrSyringeInLast6Months: string

  @Column({
    nullable: true
  })
  giRemarks: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  verify: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  lastRegistrationDate: Date

  @Column({
    nullable: true
  })
  key: string

}
