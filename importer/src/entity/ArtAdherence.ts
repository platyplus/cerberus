// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, Column } from 'typeorm'
import { AdhArtEpisode } from './AdhArtEpisode'
import { AdhTbEpisode } from './AdhTbEpisode'

@Entity()
export class ArtAdherence {
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
  adhPlaceOfMedicalCare: string

  @Column()
  adhVisit: string

  @Column()
  adhVisitAssessment: string

  @Column()
  adhReasonOfVisit: string

  @Column()
  adhVisitDate: string

  @Column()
  adhAppointment: string

  @Column()
  adhCounselor: string

  @Column()
  a07AMaritalStatus: string

  @Column()
  adhNoOfChildren: string

  @Column()
  adhAccommodation: string

  @Column()
  adhAccomoIfStable: string

  @Column()
  adhOccupation: string

  @Column()
  adhOccupationIfYes: string

  @Column()
  adhFinancialSituation: string

  @Column()
  adhLevelOfEducation: string

  @Column()
  adhSocialRemark: string

  @Column()
  adhPatientHasCareTaker: string

  @Column()
  adhIfYesName: string

  @Column()
  adhIfNoWhy: string

  @Column()
  adhRelationshipToPatientI: string

  @Column()
  adhInSameHouseHoldI: string

  @Column()
  adhCareTakerAttendClinicI: string

  @OneToMany(type => AdhArtEpisode, adhArtEpisode => adhArtEpisode.artAdherence)
  adhArtEpisodes: AdhArtEpisode[]

  @OneToMany(type => AdhTbEpisode, adhTbEpisode => adhTbEpisode.artAdherence)
  adhTbEpisodes: AdhTbEpisode[]

  @Column()
  adhAdherenceProblem: string

  @Column()
  adhProblem: string

  @Column()
  adhAdhSocialProblem: string

  @Column()
  adhAdhMedicalProblem: string

  @Column()
  adhAdhMedicalProblemOther: string

  @Column()
  adhAdhMiscellaneousProblem: string

  @Column()
  adhComment: string

  @Column()
  adhNoSideEffects: string

  @Column()
  adhSideEffects: string

  @Column()
  adhSevereSideEffects: string

  @Column()
  adhLongTermSideEffects: string

  @Column()
  adhShortTermGeneral: string

  @Column()
  adhShortTermSideEffectsOther: string

  @Column()
  adhSevereSe: string

  @Column()
  adhReferToDoctor: string

  @Column()
  adhNoOfMissedDosesLast7Days: string

  @Column()
  adhNoOfMissedDosesLast30Days: string

  @Column()
  adhTotalDoses: string

  @Column()
  adhAdherenceWithinLast30Days: string

  @Column()
  adhDosesFound: string

  @Column()
  adhDosesShouldHave: string

  @Column()
  adhExtraDosesProvided: string

  @Column()
  adhDoseFor: string

  @Column()
  adhAdherenceLevelSinceLastVisit: string

  @Column()
  adhSocialFamilialsituation: string

  @Column()
  adhSocialIfProblem: string

  @Column()
  adhCareTaker: string

  @Column()
  adhCareTakerIfChange: string

  @Column()
  adhInSameHouseHoldF: string

  @Column()
  adhRelationshipToPatientF: string

  @Column()
  adhCareTakerAttendClinicF: string

  @Column()
  adhCareTakerAttendClinicIfProblem: string

  @Column()
  adhPsychologicalDisorder: string

  @Column()
  adhPsychoIfYes: string

  @Column()
  adhCurrentDrugUse: string

  @Column()
  adhDrug: string

  @Column()
  adhAlcoholLastUse: string

  @Column()
  adhAlcoholTimeDay: string

  @Column()
  adhAlcoholDaysWeek: string

  @Column()
  adhAlcoholWayOfUse: string

  @Column()
  adhAmpheataminelLastUse: string

  @Column()
  adhAmpheatamineTimeDay: string

  @Column()
  adhAmpheatamineDaysWeek: string

  @Column()
  adhAmpheatamineWayOfUse: string

  @Column()
  adhDiazepineLastUse: string

  @Column()
  adhDiazepineTimeDay: string

  @Column()
  adhDiazepineDaysWeek: string

  @Column()
  adhDiazepineWayOfUse: string

  @Column()
  adhCannabisLastUse: string

  @Column()
  adhCannabisTimeDay: string

  @Column()
  adhCannabisDaysWeek: string

  @Column()
  adhCannabisWayOfUse: string

  @Column()
  adhEcstasyLastUse: string

  @Column()
  adhEcstasyTimeDay: string

  @Column()
  adhEsctasyDaysWeek: string

  @Column()
  adhEsctasyWayOfUse: string

  @Column()
  adhHerionLastUse: string

  @Column()
  adhHerionTimeDay: string

  @Column()
  adhHerionDaysWeek: string

  @Column()
  adhHerionWayOfUse: string

  @Column()
  adhOpiumLastUse: string

  @Column()
  adhOpiumTimeDay: string

  @Column()
  adhOpiumDaysWeek: string

  @Column()
  adhOpiumWayOfUse: string

  @Column()
  adhDidYouShareNeedleSyringe: string

  @Column()
  adhHerbalMedicines: string

  @Column()
  adhConclusion: string

  @Column()
  adhSuggestions: string

  @Column()
  adhCheckList: string

  @Column()
  adhNextAppointmentDate: string

  @Column()
  verify: string

  @Column()
  lastRegistrationDate: string

}
