// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { AdhArtEpisode } from './AdhArtEpisode'
import { AdhTbEpisode } from './AdhTbEpisode'

@Entity()
export class ArtAdherence {
	@PrimaryColumn({
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

	@PrimaryColumn({
    name: 'place_of_medical_care'
  })
	placeOfMedicalCare: string

	@Column({
    nullable: true,
		name: 'visit'
  })
	visit: string

	@Column({
    nullable: true,
		name: 'visit_assessment',
		type: 'integer'
  })
	visitAssessment: number

	@Column({
    nullable: true,
		name: 'visit_reason'
  })
	visitReason: string

	@PrimaryColumn({
    name: 'visit_date',
		type: 'timestamptz'
  })
	visitDate: Date

	@Column({
    nullable: true,
		name: 'appointment'
  })
	appointment: string

	@Column({
    nullable: true,
		name: 'counselor'
  })
	counselor: string

	@Column({
    nullable: true,
		name: 'marital_status'
  })
	maritalStatus: string

	@Column({
    nullable: true,
		name: 'children_number',
		type: 'integer'
  })
	childrenNumber: number

	@Column({
    nullable: true,
		name: 'accomodation'
  })
	accomodation: string

	@Column({
    nullable: true,
		name: 'accomodation_if_stable'
  })
	accomodationIfStable: string

	@Column({
    nullable: true,
		name: 'has_occupation'
  })
	hasOccupation: string

	@Column({
    nullable: true,
		name: 'occupation'
  })
	occupation: string

	@Column({
    nullable: true,
		name: 'financial_situation'
  })
	financialSituation: string

	@Column({
    nullable: true,
		name: 'level_of_education'
  })
	levelOfEducation: string

	@Column({
    nullable: true,
		name: 'social_remark'
  })
	socialRemark: string

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
		name: 'caretaker_attend_clinic_i'
  })
	caretakerAttendClinicI: string

	@Column({
    nullable: true,
		name: 'art_start_date',
		type: 'timestamptz'
  })
	artStartDate: Date

	@OneToMany(type => AdhArtEpisode, adhArtEpisode => adhArtEpisode.artAdherence, {
    cascade: true
  })
	adhArtEpisodes: AdhArtEpisode[]

	@Column({
    nullable: true,
		name: 'adh_tb_start_date',
		type: 'timestamptz'
  })
	adhTbStartDate: Date

	@OneToMany(type => AdhTbEpisode, adhTbEpisode => adhTbEpisode.artAdherence, {
    cascade: true
  })
	adhTbEpisodes: AdhTbEpisode[]

	@Column({
    nullable: true,
		name: 'adherence_problem'
  })
	adherenceProblem: string

	@Column({
    nullable: true,
		name: 'adh_problem'
  })
	adhProblem: string

	@Column({
    nullable: true,
		name: 'social_problem'
  })
	socialProblem: string

	@Column({
    nullable: true,
		name: 'medical_problem'
  })
	medicalProblem: string

	@Column({
    nullable: true,
		name: 'medical_problem_other'
  })
	medicalProblemOther: string

	@Column({
    nullable: true,
		name: 'misc_problem'
  })
	miscProblem: string

	@Column({
    nullable: true,
		name: 'comment'
  })
	comment: string

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
		name: 'total_doses',
		type: 'integer'
  })
	totalDoses: number

	@Column({
    nullable: true,
		name: 'adherence_within_last_30_days',
		type: 'integer'
  })
	adherenceWithinLast30Days: number

	@Column({
    nullable: true,
		name: 'doses_number',
		type: 'integer'
  })
	dosesNumber: number

	@Column({
    nullable: true,
		name: 'doses_should_have',
		type: 'integer'
  })
	dosesShouldHave: number

	@Column({
    nullable: true,
		name: 'extra_doses_provided',
		type: 'integer'
  })
	extraDosesProvided: number

	@Column({
    nullable: true,
		name: 'dose_for',
		type: 'integer'
  })
	doseFor: number

	@Column({
    nullable: true,
		name: 'adherence_since_last_visit'
  })
	adherenceSinceLastVisit: string

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
		name: 'caretaker_status'
  })
	caretakerStatus: string

	@Column({
    nullable: true,
		name: 'caretaker_name'
  })
	caretakerName: string

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
		name: 'caretaker_attend_clinic_f'
  })
	caretakerAttendClinicF: string

	@Column({
    nullable: true,
		name: 'caretaker_attend_clinic_problem'
  })
	caretakerAttendClinicProblem: string

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
		name: 'current_drug_use'
  })
	currentDrugUse: string

	@Column({
    nullable: true,
		name: 'drug'
  })
	drug: string

	@Column({
    nullable: true,
		name: 'alcohol_last_use',
		type: 'timestamptz'
  })
	alcoholLastUse: Date

	@Column({
    nullable: true,
		name: 'alcohol_times_dat',
		type: 'integer'
  })
	alcoholTimesDat: number

	@Column({
    nullable: true,
		name: 'alcohol_days_week',
		type: 'integer'
  })
	alcoholDaysWeek: number

	@Column({
    nullable: true,
		name: 'alcohol_way_of_use'
  })
	alcoholWayOfUse: string

	@Column({
    nullable: true,
		name: 'amphetamine_last_use',
		type: 'timestamptz'
  })
	amphetamineLastUse: Date

	@Column({
    nullable: true,
		name: 'amphetamine_times_day',
		type: 'integer'
  })
	amphetamineTimesDay: number

	@Column({
    nullable: true,
		name: 'amphetamine_days_week',
		type: 'integer'
  })
	amphetamineDaysWeek: number

	@Column({
    nullable: true,
		name: 'amphetamine_way_of_use'
  })
	amphetamineWayOfUse: string

	@Column({
    nullable: true,
		name: 'diazepine_last_use',
		type: 'timestamptz'
  })
	diazepineLastUse: Date

	@Column({
    nullable: true,
		name: 'diazepine_times_day',
		type: 'integer'
  })
	diazepineTimesDay: number

	@Column({
    nullable: true,
		name: 'diazepine_days_week',
		type: 'integer'
  })
	diazepineDaysWeek: number

	@Column({
    nullable: true,
		name: 'diazepine_way_of_use'
  })
	diazepineWayOfUse: string

	@Column({
    nullable: true,
		name: 'cannabis_last_use',
		type: 'timestamptz'
  })
	cannabisLastUse: Date

	@Column({
    nullable: true,
		name: 'cannabis_times_day',
		type: 'integer'
  })
	cannabisTimesDay: number

	@Column({
    nullable: true,
		name: 'cannabis_days_week',
		type: 'integer'
  })
	cannabisDaysWeek: number

	@Column({
    nullable: true,
		name: 'cannabis_way_of_use'
  })
	cannabisWayOfUse: string

	@Column({
    nullable: true,
		name: 'ecstasy_last_use',
		type: 'timestamptz'
  })
	ecstasyLastUse: Date

	@Column({
    nullable: true,
		name: 'ecstasy_times_day',
		type: 'integer'
  })
	ecstasyTimesDay: number

	@Column({
    nullable: true,
		name: 'ecstasy_days_week',
		type: 'integer'
  })
	ecstasyDaysWeek: number

	@Column({
    nullable: true,
		name: 'ecstasy_way_of_use'
  })
	ecstasyWayOfUse: string

	@Column({
    nullable: true,
		name: 'heroin_last_use',
		type: 'timestamptz'
  })
	heroinLastUse: Date

	@Column({
    nullable: true,
		name: 'heroin_times_day',
		type: 'integer'
  })
	heroinTimesDay: number

	@Column({
    nullable: true,
		name: 'heroin_days_week',
		type: 'integer'
  })
	heroinDaysWeek: number

	@Column({
    nullable: true,
		name: 'heroin_way_of_use'
  })
	heroinWayOfUse: string

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
		name: 'shared_syringe'
  })
	sharedSyringe: string

	@Column({
    nullable: true,
		name: 'herbal_medicines'
  })
	herbalMedicines: string

	@Column({
    nullable: true,
		name: 'conclusion'
  })
	conclusion: string

	@Column({
    nullable: true,
		name: 'adh_suggestions'
  })
	adhSuggestions: string

	@Column({
    nullable: true,
		name: 'checklist'
  })
	checklist: string

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
