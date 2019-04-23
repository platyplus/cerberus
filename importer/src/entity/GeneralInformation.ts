// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class GeneralInformation {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  mdMcode: string

  @Column()
  a00RegistrationDate: string

  @Column()
  a01PatientName: string

  @Column()
  a02FatherName: string

  @Column()
  a03Sexe: string

  @Column()
  a041DateOfBirth: string

  @Column()
  a05Age: string

  @Column()
  a07PatientTarget: string

  @Column()
  giPlaceOfMedicalCare: string

  @Column()
  giVisitDate: string

  @Column()
  a07AMaritalStatus: string

  @Column()
  b04CurrentWorkPlace: string

  @Column()
  a06AHeight: string

  @Column()
  giBw: string

  @Column()
  giLbOrKg: string

  @Column()
  giBmi: string

  @Column()
  giTemperature: string

  @Column()
  giCorF: string

  @Column()
  giBp: string

  @Column()
  giBp1: string

  @Column()
  giRr: string

  @Column()
  giPulse: string

  @Column()
  giReproductiveHealth: string

  @Column()
  giContraception: string

  @Column()
  giContraceptionType: string

  @Column()
  giOtherContraceptionType: string

  @Column()
  giDrugTakenOn: string

  @Column()
  giLmPdate: string

  @Column()
  giParity: string

  @Column()
  giCondomUseForLastSex: string

  @Column()
  giNumberClientsLastWorkingDay: string

  @Column()
  giShareNeedleOrSyringeInLast: string

  @Column()
  giShareNeedleOrSyringeInLastMonth: string

  @Column()
  giShareNeedleOrSyringeInLast6Months: string

  @Column()
  giRemarks: string

  @Column()
  verify: string

  @Column()
  lastRegistrationDate: string

  @Column()
  key: string

}
