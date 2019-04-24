// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { AdhArtEpisode } from './AdhArtEpisode'
import { AdhTbEpisode } from './AdhTbEpisode'

@Entity()
export class ArtAdherence {
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
  adhPlaceOfMedicalCare: string

  @Column({
    nullable: true
  })
  adhVisit: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhVisitAssessment: number

  @Column({
    nullable: true
  })
  adhReasonOfVisit: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhVisitDate: Date

  @Column({
    nullable: true
  })
  adhAppointment: string

  @Column({
    nullable: true
  })
  adhCounselor: string

  @Column({
    nullable: true
  })
  a07AMaritalStatus: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhNoOfChildren: number

  @Column({
    nullable: true
  })
  adhAccommodation: string

  @Column({
    nullable: true
  })
  adhAccomoIfStable: string

  @Column({
    nullable: true
  })
  adhOccupation: string

  @Column({
    nullable: true
  })
  adhOccupationIfYes: string

  @Column({
    nullable: true
  })
  adhFinancialSituation: string

  @Column({
    nullable: true
  })
  adhLevelOfEducation: string

  @Column({
    nullable: true
  })
  adhSocialRemark: string

  @Column({
    nullable: true
  })
  adhPatientHasCareTaker: string

  @Column({
    nullable: true
  })
  adhIfYesName: string

  @Column({
    nullable: true
  })
  adhIfNoWhy: string

  @Column({
    nullable: true
  })
  adhRelationshipToPatientI: string

  @Column({
    nullable: true
  })
  adhInSameHouseHoldI: string

  @Column({
    nullable: true
  })
  adhCareTakerAttendClinicI: string

  @OneToMany(type => AdhArtEpisode, adhArtEpisode => adhArtEpisode.artAdherence, {
    cascade: true
  })
  adhArtEpisodes: AdhArtEpisode[]

  @OneToMany(type => AdhTbEpisode, adhTbEpisode => adhTbEpisode.artAdherence, {
    cascade: true
  })
  adhTbEpisodes: AdhTbEpisode[]

  @Column({
    nullable: true
  })
  adhAdherenceProblem: string

  @Column({
    nullable: true
  })
  adhProblem: string

  @Column({
    nullable: true
  })
  adhAdhSocialProblem: string

  @Column({
    nullable: true
  })
  adhAdhMedicalProblem: string

  @Column({
    nullable: true
  })
  adhAdhMedicalProblemOther: string

  @Column({
    nullable: true
  })
  adhAdhMiscellaneousProblem: string

  @Column({
    nullable: true
  })
  adhComment: string

  @Column({
    nullable: true
  })
  adhNoSideEffects: string

  @Column({
    nullable: true
  })
  adhSideEffects: string

  @Column({
    nullable: true
  })
  adhSevereSideEffects: string

  @Column({
    nullable: true
  })
  adhLongTermSideEffects: string

  @Column({
    nullable: true
  })
  adhShortTermGeneral: string

  @Column({
    nullable: true
  })
  adhShortTermSideEffectsOther: string

  @Column({
    nullable: true
  })
  adhSevereSe: string

  @Column({
    nullable: true
  })
  adhReferToDoctor: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhNoOfMissedDosesLast7Days: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhNoOfMissedDosesLast30Days: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhTotalDoses: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhAdherenceWithinLast30Days: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhDosesFound: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhDosesShouldHave: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhExtraDosesProvided: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhDoseFor: number

  @Column({
    nullable: true
  })
  adhAdherenceLevelSinceLastVisit: string

  @Column({
    nullable: true
  })
  adhSocialFamilialsituation: string

  @Column({
    nullable: true
  })
  adhSocialIfProblem: string

  @Column({
    nullable: true
  })
  adhCareTaker: string

  @Column({
    nullable: true
  })
  adhCareTakerIfChange: string

  @Column({
    nullable: true
  })
  adhInSameHouseHoldF: string

  @Column({
    nullable: true
  })
  adhRelationshipToPatientF: string

  @Column({
    nullable: true
  })
  adhCareTakerAttendClinicF: string

  @Column({
    nullable: true
  })
  adhCareTakerAttendClinicIfProblem: string

  @Column({
    nullable: true
  })
  adhPsychologicalDisorder: string

  @Column({
    nullable: true
  })
  adhPsychoIfYes: string

  @Column({
    nullable: true
  })
  adhCurrentDrugUse: string

  @Column({
    nullable: true
  })
  adhDrug: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhAlcoholLastUse: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhAlcoholTimeDay: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhAlcoholDaysWeek: number

  @Column({
    nullable: true
  })
  adhAlcoholWayOfUse: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhAmpheataminelLastUse: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhAmpheatamineTimeDay: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhAmpheatamineDaysWeek: number

  @Column({
    nullable: true
  })
  adhAmpheatamineWayOfUse: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhDiazepineLastUse: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhDiazepineTimeDay: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhDiazepineDaysWeek: number

  @Column({
    nullable: true
  })
  adhDiazepineWayOfUse: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhCannabisLastUse: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhCannabisTimeDay: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhCannabisDaysWeek: number

  @Column({
    nullable: true
  })
  adhCannabisWayOfUse: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhEcstasyLastUse: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhEcstasyTimeDay: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhEsctasyDaysWeek: number

  @Column({
    nullable: true
  })
  adhEsctasyWayOfUse: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhHerionLastUse: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhHerionTimeDay: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhHerionDaysWeek: number

  @Column({
    nullable: true
  })
  adhHerionWayOfUse: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhOpiumLastUse: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhOpiumTimeDay: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  adhOpiumDaysWeek: number

  @Column({
    nullable: true
  })
  adhOpiumWayOfUse: string

  @Column({
    nullable: true
  })
  adhDidYouShareNeedleSyringe: string

  @Column({
    nullable: true
  })
  adhHerbalMedicines: string

  @Column({
    nullable: true
  })
  adhConclusion: string

  @Column({
    nullable: true
  })
  adhSuggestions: string

  @Column({
    nullable: true
  })
  adhCheckList: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhNextAppointmentDate: Date

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

}
