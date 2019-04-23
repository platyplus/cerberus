// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { VcctDrugType } from './VcctDrugType'

@Entity()
export class Vcct {
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
  vcctVisitDate: string

  @Column()
  vcctTbPatient: string

  @Column()
  vcctPlaceofTesting: string

  @Column()
  a07PatientTarget: string

  @Column()
  vcctUnsafeSexInLastSixWeeks: string

  @Column()
  vcctIdUsince: string

  @Column()
  vcctDrugUseWithinLast1Year: string

  @OneToMany(type => VcctDrugType, vcctDrugType => vcctDrugType.vcct)
  vcctDrugTypes: VcctDrugType[]

  @Column()
  vcctShareNeedleOrSyringeInLastSixWeeks: string

  @Column()
  vcctShareNeedleOrSyringeInLastSixWeeks1: string

  @Column()
  vcctBloodTransfusionInLastSixWeeks: string

  @Column()
  vcctBodyPierceAndTattooInLastSixWeeks: string

  @Column()
  vcctPrevHivTesting: string

  @Column()
  vcctPrevHivTestingDate: string

  @Column()
  vcctResultOfLastHivTesting: string

  @Column()
  vcctPretestPerformed: string

  @Column()
  vcctPreTestDate: string

  @Column()
  vcctHivTest: string

  @Column()
  vcctHivBloodTest: string

  @Column()
  vcctPostTestPerformed: string

  @Column()
  vcctPostTestDate: string

  @Column()
  vcctTestResult: string

  @Column()
  vcctTestResultByNhl: string

  @Column()
  vcctNhlDate: string

  @Column()
  vcctHistoryOfSyphilis: string

  @Column()
  vcctTestForSyphilisInCurrentVisit: string

  @Column()
  vcctCurrentIctTestResult: string

  @Column()
  vcctCurrentRprTestResult: string

  @Column()
  vcctRprPositiveDilution: string

  @Column()
  vcct1stTimeHivTest: string

  @Column()
  vcct1stTimeHivTestAndPositive: string

  @Column()
  vcctPartnerHivTesting: string

  @Column()
  vcctDateOfPartnerHivTesting: string

  @Column()
  vcctKnownYourPartnerHivStatus: string

  @Column()
  vcctIfYouDontKnowOfferPartnerHivTest: string

  @Column()
  vcctPatientShouldReturnIn: string

  @Column()
  vcctEndOfVisitOther: string

  @Column()
  vcctDateNextVisit: string

  @Column()
  vcctHivRetesting: string

  @Column()
  vcctHivRetestingDate: string

  @Column()
  vcctHivRetestingResult: string

  @Column()
  vcctNhlhivRetestingDate: string

  @Column()
  vcctNhlhivRetestingResult: string

  @Column()
  vcctFollowupvisitdate: string

  @Column()
  verify: string

  @Column()
  lastRegistrationDate: string

  @Column()
  key: string

}
