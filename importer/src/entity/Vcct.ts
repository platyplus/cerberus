// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { VcctDrugType } from './VcctDrugType'

@Entity()
export class Vcct {
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
    nullable: true,
		type: 'timestamptz'
  })
  vcctVisitDate: Date

  @Column({
    nullable: true
  })
  vcctTbPatient: string

  @Column({
    nullable: true
  })
  vcctPlaceofTesting: string

  @Column({
    nullable: true
  })
  a07PatientTarget: string

  @Column({
    nullable: true
  })
  vcctUnsafeSexInLastSixWeeks: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  vcctIdUsince: number

  @Column({
    nullable: true
  })
  vcctDrugUseWithinLast1Year: string

  @OneToMany(type => VcctDrugType, vcctDrugType => vcctDrugType.vcct, {
    cascade: true
  })
  vcctDrugTypes: VcctDrugType[]

  @Column({
    nullable: true
  })
  vcctShareNeedleOrSyringeInLastSixWeeks: string

  @Column({
    nullable: true
  })
  vcctShareNeedleOrSyringeInLastSixWeeks1: string

  @Column({
    nullable: true
  })
  vcctBloodTransfusionInLastSixWeeks: string

  @Column({
    nullable: true
  })
  vcctBodyPierceAndTattooInLastSixWeeks: string

  @Column({
    nullable: true
  })
  vcctPrevHivTesting: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctPrevHivTestingDate: Date

  @Column({
    nullable: true
  })
  vcctResultOfLastHivTesting: string

  @Column({
    nullable: true
  })
  vcctPretestPerformed: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctPreTestDate: Date

  @Column({
    nullable: true
  })
  vcctHivTest: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  vcctHivBloodTest: number

  @Column({
    nullable: true
  })
  vcctPostTestPerformed: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctPostTestDate: Date

  @Column({
    nullable: true
  })
  vcctTestResult: string

  @Column({
    nullable: true
  })
  vcctTestResultByNhl: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctNhlDate: Date

  @Column({
    nullable: true
  })
  vcctHistoryOfSyphilis: string

  @Column({
    nullable: true
  })
  vcctTestForSyphilisInCurrentVisit: string

  @Column({
    nullable: true
  })
  vcctCurrentIctTestResult: string

  @Column({
    nullable: true
  })
  vcctCurrentRprTestResult: string

  @Column({
    nullable: true
  })
  vcctRprPositiveDilution: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  vcct1stTimeHivTest: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  vcct1stTimeHivTestAndPositive: number

  @Column({
    nullable: true
  })
  vcctPartnerHivTesting: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctDateOfPartnerHivTesting: Date

  @Column({
    nullable: true
  })
  vcctKnownYourPartnerHivStatus: string

  @Column({
    nullable: true
  })
  vcctIfYouDontKnowOfferPartnerHivTest: string

  @Column({
    nullable: true
  })
  vcctPatientShouldReturnIn: string

  @Column({
    nullable: true
  })
  vcctEndOfVisitOther: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctDateNextVisit: Date

  @Column({
    nullable: true
  })
  vcctHivRetesting: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctHivRetestingDate: Date

  @Column({
    nullable: true
  })
  vcctHivRetestingResult: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctNhlhivRetestingDate: Date

  @Column({
    nullable: true
  })
  vcctNhlhivRetestingResult: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vcctFollowupvisitdate: Date

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
