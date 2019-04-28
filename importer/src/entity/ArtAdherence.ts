// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { AdhArtEpisode } from './AdhArtEpisode'
import { AdhTbEpisode } from './AdhTbEpisode'

@Entity()
export class ArtAdherence {
	@PrimaryColumn({
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

	@PrimaryColumn({
    name: 'adh_place_of_medical_care'
  })
	adhPlaceOfMedicalCare: string

	@Column({
    nullable: true,
		name: 'adh_visit'
  })
	adhVisit: string

	@Column({
    nullable: true,
		name: 'adh_visit_assessment',
		type: 'integer'
  })
	adhVisitAssessment: number

	@Column({
    nullable: true,
		name: 'adh_reason_of_visit'
  })
	adhReasonOfVisit: string

	@PrimaryColumn({
    name: 'adh_visit_date',
		type: 'timestamptz'
  })
	adhVisitDate: Date

	@Column({
    nullable: true,
		name: 'adh_appointment'
  })
	adhAppointment: string

	@Column({
    nullable: true,
		name: 'adh_counselor'
  })
	adhCounselor: string

	@Column({
    nullable: true,
		name: 'a_07_a_marital_status'
  })
	a07AMaritalStatus: string

	@Column({
    nullable: true,
		name: 'adh_no_of_children',
		type: 'integer'
  })
	adhNoOfChildren: number

	@Column({
    nullable: true,
		name: 'adh_accommodation'
  })
	adhAccommodation: string

	@Column({
    nullable: true,
		name: 'adh_accomo_if_stable'
  })
	adhAccomoIfStable: string

	@Column({
    nullable: true,
		name: 'adh_occupation'
  })
	adhOccupation: string

	@Column({
    nullable: true,
		name: 'adh_occupation_if_yes'
  })
	adhOccupationIfYes: string

	@Column({
    nullable: true,
		name: 'adh_financial_situation'
  })
	adhFinancialSituation: string

	@Column({
    nullable: true,
		name: 'adh_level_of_education'
  })
	adhLevelOfEducation: string

	@Column({
    nullable: true,
		name: 'adh_social_remark'
  })
	adhSocialRemark: string

	@Column({
    nullable: true,
		name: 'adh_patient_has_care_taker'
  })
	adhPatientHasCareTaker: string

	@Column({
    nullable: true,
		name: 'adh_if_yes_name'
  })
	adhIfYesName: string

	@Column({
    nullable: true,
		name: 'adh_if_no_why'
  })
	adhIfNoWhy: string

	@Column({
    nullable: true,
		name: 'adh_relationship_to_patient_i'
  })
	adhRelationshipToPatientI: string

	@Column({
    nullable: true,
		name: 'adh_in_same_house_hold_i'
  })
	adhInSameHouseHoldI: string

	@Column({
    nullable: true,
		name: 'adh_care_taker_attend_clinic_i'
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
    nullable: true,
		name: 'adh_adherence_problem'
  })
	adhAdherenceProblem: string

	@Column({
    nullable: true,
		name: 'adh_problem'
  })
	adhProblem: string

	@Column({
    nullable: true,
		name: 'adh_adh_social_problem'
  })
	adhAdhSocialProblem: string

	@Column({
    nullable: true,
		name: 'adh_adh_medical_problem'
  })
	adhAdhMedicalProblem: string

	@Column({
    nullable: true,
		name: 'adh_adh_medical_problem_other'
  })
	adhAdhMedicalProblemOther: string

	@Column({
    nullable: true,
		name: 'adh_adh_miscellaneous_problem'
  })
	adhAdhMiscellaneousProblem: string

	@Column({
    nullable: true,
		name: 'adh_comment'
  })
	adhComment: string

	@Column({
    nullable: true,
		name: 'adh_no_side_effects'
  })
	adhNoSideEffects: string

	@Column({
    nullable: true,
		name: 'adh_side_effects'
  })
	adhSideEffects: string

	@Column({
    nullable: true,
		name: 'adh_severe_side_effects'
  })
	adhSevereSideEffects: string

	@Column({
    nullable: true,
		name: 'adh_long_term_side_effects'
  })
	adhLongTermSideEffects: string

	@Column({
    nullable: true,
		name: 'adh_short_term_general'
  })
	adhShortTermGeneral: string

	@Column({
    nullable: true,
		name: 'adh_short_term_side_effects_other'
  })
	adhShortTermSideEffectsOther: string

	@Column({
    nullable: true,
		name: 'adh_severe_se'
  })
	adhSevereSe: string

	@Column({
    nullable: true,
		name: 'adh_refer_to_doctor'
  })
	adhReferToDoctor: string

	@Column({
    nullable: true,
		name: 'adh_no_of_missed_doses_last_7_days',
		type: 'integer'
  })
	adhNoOfMissedDosesLast7Days: number

	@Column({
    nullable: true,
		name: 'adh_no_of_missed_doses_last_30_days',
		type: 'integer'
  })
	adhNoOfMissedDosesLast30Days: number

	@Column({
    nullable: true,
		name: 'adh_total_doses',
		type: 'integer'
  })
	adhTotalDoses: number

	@Column({
    nullable: true,
		name: 'adh_adherence_within_last_30_days',
		type: 'integer'
  })
	adhAdherenceWithinLast30Days: number

	@Column({
    nullable: true,
		name: 'adh_doses_found',
		type: 'integer'
  })
	adhDosesFound: number

	@Column({
    nullable: true,
		name: 'adh_doses_should_have',
		type: 'integer'
  })
	adhDosesShouldHave: number

	@Column({
    nullable: true,
		name: 'adh_extra_doses_provided',
		type: 'integer'
  })
	adhExtraDosesProvided: number

	@Column({
    nullable: true,
		name: 'adh_dose_for',
		type: 'integer'
  })
	adhDoseFor: number

	@Column({
    nullable: true,
		name: 'adh_adherence_level_since_last_visit'
  })
	adhAdherenceLevelSinceLastVisit: string

	@Column({
    nullable: true,
		name: 'adh_social_familialsituation'
  })
	adhSocialFamilialsituation: string

	@Column({
    nullable: true,
		name: 'adh_social_if_problem'
  })
	adhSocialIfProblem: string

	@Column({
    nullable: true,
		name: 'adh_care_taker'
  })
	adhCareTaker: string

	@Column({
    nullable: true,
		name: 'adh_care_taker_if_change'
  })
	adhCareTakerIfChange: string

	@Column({
    nullable: true,
		name: 'adh_in_same_house_hold_f'
  })
	adhInSameHouseHoldF: string

	@Column({
    nullable: true,
		name: 'adh_relationship_to_patient_f'
  })
	adhRelationshipToPatientF: string

	@Column({
    nullable: true,
		name: 'adh_care_taker_attend_clinic_f'
  })
	adhCareTakerAttendClinicF: string

	@Column({
    nullable: true,
		name: 'adh_care_taker_attend_clinic_if_problem'
  })
	adhCareTakerAttendClinicIfProblem: string

	@Column({
    nullable: true,
		name: 'adh_psychological_disorder'
  })
	adhPsychologicalDisorder: string

	@Column({
    nullable: true,
		name: 'adh_psycho_if_yes'
  })
	adhPsychoIfYes: string

	@Column({
    nullable: true,
		name: 'adh_current_drug_use'
  })
	adhCurrentDrugUse: string

	@Column({
    nullable: true,
		name: 'adh_drug'
  })
	adhDrug: string

	@Column({
    nullable: true,
		name: 'adh_alcohol_last_use',
		type: 'timestamptz'
  })
	adhAlcoholLastUse: Date

	@Column({
    nullable: true,
		name: 'adh_alcohol_time_day',
		type: 'integer'
  })
	adhAlcoholTimeDay: number

	@Column({
    nullable: true,
		name: 'adh_alcohol_days_week',
		type: 'integer'
  })
	adhAlcoholDaysWeek: number

	@Column({
    nullable: true,
		name: 'adh_alcohol_way_of_use'
  })
	adhAlcoholWayOfUse: string

	@Column({
    nullable: true,
		name: 'adh_ampheataminel_last_use',
		type: 'timestamptz'
  })
	adhAmpheataminelLastUse: Date

	@Column({
    nullable: true,
		name: 'adh_ampheatamine_time_day',
		type: 'integer'
  })
	adhAmpheatamineTimeDay: number

	@Column({
    nullable: true,
		name: 'adh_ampheatamine_days_week',
		type: 'integer'
  })
	adhAmpheatamineDaysWeek: number

	@Column({
    nullable: true,
		name: 'adh_ampheatamine_way_of_use'
  })
	adhAmpheatamineWayOfUse: string

	@Column({
    nullable: true,
		name: 'adh_diazepine_last_use',
		type: 'timestamptz'
  })
	adhDiazepineLastUse: Date

	@Column({
    nullable: true,
		name: 'adh_diazepine_time_day',
		type: 'integer'
  })
	adhDiazepineTimeDay: number

	@Column({
    nullable: true,
		name: 'adh_diazepine_days_week',
		type: 'integer'
  })
	adhDiazepineDaysWeek: number

	@Column({
    nullable: true,
		name: 'adh_diazepine_way_of_use'
  })
	adhDiazepineWayOfUse: string

	@Column({
    nullable: true,
		name: 'adh_cannabis_last_use',
		type: 'timestamptz'
  })
	adhCannabisLastUse: Date

	@Column({
    nullable: true,
		name: 'adh_cannabis_time_day',
		type: 'integer'
  })
	adhCannabisTimeDay: number

	@Column({
    nullable: true,
		name: 'adh_cannabis_days_week',
		type: 'integer'
  })
	adhCannabisDaysWeek: number

	@Column({
    nullable: true,
		name: 'adh_cannabis_way_of_use'
  })
	adhCannabisWayOfUse: string

	@Column({
    nullable: true,
		name: 'adh_ecstasy_last_use',
		type: 'timestamptz'
  })
	adhEcstasyLastUse: Date

	@Column({
    nullable: true,
		name: 'adh_ecstasy_time_day',
		type: 'integer'
  })
	adhEcstasyTimeDay: number

	@Column({
    nullable: true,
		name: 'adh_esctasy_days_week',
		type: 'integer'
  })
	adhEsctasyDaysWeek: number

	@Column({
    nullable: true,
		name: 'adh_esctasy_way_of_use'
  })
	adhEsctasyWayOfUse: string

	@Column({
    nullable: true,
		name: 'adh_herion_last_use',
		type: 'timestamptz'
  })
	adhHerionLastUse: Date

	@Column({
    nullable: true,
		name: 'adh_herion_time_day',
		type: 'integer'
  })
	adhHerionTimeDay: number

	@Column({
    nullable: true,
		name: 'adh_herion_days_week',
		type: 'integer'
  })
	adhHerionDaysWeek: number

	@Column({
    nullable: true,
		name: 'adh_herion_way_of_use'
  })
	adhHerionWayOfUse: string

	@Column({
    nullable: true,
		name: 'adh_opium_last_use',
		type: 'timestamptz'
  })
	adhOpiumLastUse: Date

	@Column({
    nullable: true,
		name: 'adh_opium_time_day',
		type: 'integer'
  })
	adhOpiumTimeDay: number

	@Column({
    nullable: true,
		name: 'adh_opium_days_week',
		type: 'integer'
  })
	adhOpiumDaysWeek: number

	@Column({
    nullable: true,
		name: 'adh_opium_way_of_use'
  })
	adhOpiumWayOfUse: string

	@Column({
    nullable: true,
		name: 'adh_did_you_share_needle_syringe'
  })
	adhDidYouShareNeedleSyringe: string

	@Column({
    nullable: true,
		name: 'adh_herbal_medicines'
  })
	adhHerbalMedicines: string

	@Column({
    nullable: true,
		name: 'adh_conclusion'
  })
	adhConclusion: string

	@Column({
    nullable: true,
		name: 'adh_suggestions'
  })
	adhSuggestions: string

	@Column({
    nullable: true,
		name: 'adh_check_list'
  })
	adhCheckList: string

	@Column({
    nullable: true,
		name: 'adh_next_appointment_date',
		type: 'timestamptz'
  })
	adhNextAppointmentDate: Date

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

}
