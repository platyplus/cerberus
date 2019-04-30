// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { AdhArtEpisode } from './AdhArtEpisode'
import { AdhTbEpisode } from './AdhTbEpisode'

@Entity()
export class ArtAdherence {
	@PrimaryColumn({
		type: 'string',
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'registration_date'
	})
	registrationDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_name'
	})
	patientName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'father_name'
	})
	fatherName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sex'
	})
	sex: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date_of_birth'
	})
	dateOfBirth: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'age'
	})
	age: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

	@PrimaryColumn({
		type: 'string',
		name: 'place_of_medical_care'
	})
	placeOfMedicalCare: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'visit'
	})
	visit: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'visit_assessment'
	})
	visitAssessment: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'visit_reason'
	})
	visitReason: string

	@PrimaryColumn({
		type: 'timestamptz',
		name: 'visit_date'
	})
	visitDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'appointment'
	})
	appointment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'counselor'
	})
	counselor: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'marital_status'
	})
	maritalStatus: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'children_number'
	})
	childrenNumber: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'accomodation'
	})
	accomodation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'accomodation_if_stable'
	})
	accomodationIfStable: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'has_occupation'
	})
	hasOccupation: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'occupation'
	})
	occupation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'financial_situation'
	})
	financialSituation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'level_of_education'
	})
	levelOfEducation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'social_remark'
	})
	socialRemark: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'adh_patient_has_care_taker'
	})
	adhPatientHasCareTaker: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_if_yes_name'
	})
	adhIfYesName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_if_no_why'
	})
	adhIfNoWhy: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_relationship_to_patient_i'
	})
	adhRelationshipToPatientI: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'adh_in_same_house_hold_i'
	})
	adhInSameHouseHoldI: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'caretaker_attend_clinic_i'
	})
	caretakerAttendClinicI: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_start_date'
	})
	artStartDate: Date

	@OneToMany(type => AdhArtEpisode, adhArtEpisode => adhArtEpisode.artAdherence, {
		cascade: true
	})
	adhArtEpisodes: AdhArtEpisode[]

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'adh_tb_start_date'
	})
	adhTbStartDate: Date

	@OneToMany(type => AdhTbEpisode, adhTbEpisode => adhTbEpisode.artAdherence, {
		cascade: true
	})
	adhTbEpisodes: AdhTbEpisode[]

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'adherence_problem'
	})
	adherenceProblem: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_problem'
	})
	adhProblem: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'social_problem'
	})
	socialProblem: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'medical_problem'
	})
	medicalProblem: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'medical_problem_other'
	})
	medicalProblemOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'misc_problem'
	})
	miscProblem: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'comment'
	})
	comment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_no_side_effects'
	})
	adhNoSideEffects: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_side_effects'
	})
	adhSideEffects: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_severe_side_effects'
	})
	adhSevereSideEffects: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_long_term_side_effects'
	})
	adhLongTermSideEffects: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_short_term_general'
	})
	adhShortTermGeneral: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_short_term_side_effects_other'
	})
	adhShortTermSideEffectsOther: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'adh_severe_se'
	})
	adhSevereSe: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'adh_refer_to_doctor'
	})
	adhReferToDoctor: boolean

	@Column({
		type: 'integer',
		nullable: true,
		name: 'adh_no_of_missed_doses_last_7_days'
	})
	adhNoOfMissedDosesLast7Days: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'adh_no_of_missed_doses_last_30_days'
	})
	adhNoOfMissedDosesLast30Days: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'total_doses'
	})
	totalDoses: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'adherence_within_last_30_days'
	})
	adherenceWithinLast30Days: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'doses_number'
	})
	dosesNumber: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'doses_should_have'
	})
	dosesShouldHave: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'extra_doses_provided'
	})
	extraDosesProvided: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'dose_for'
	})
	doseFor: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'adherence_since_last_visit'
	})
	adherenceSinceLastVisit: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_social_familialsituation'
	})
	adhSocialFamilialsituation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_social_if_problem'
	})
	adhSocialIfProblem: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'caretaker_status'
	})
	caretakerStatus: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'caretaker_name'
	})
	caretakerName: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'adh_in_same_house_hold_f'
	})
	adhInSameHouseHoldF: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_relationship_to_patient_f'
	})
	adhRelationshipToPatientF: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'caretaker_attend_clinic_f'
	})
	caretakerAttendClinicF: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'caretaker_attend_clinic_problem'
	})
	caretakerAttendClinicProblem: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'adh_psychological_disorder'
	})
	adhPsychologicalDisorder: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_psycho_if_yes'
	})
	adhPsychoIfYes: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'current_drug_use'
	})
	currentDrugUse: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'drug'
	})
	drug: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'alcohol_last_use'
	})
	alcoholLastUse: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'alcohol_times_dat'
	})
	alcoholTimesDat: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'alcohol_days_week'
	})
	alcoholDaysWeek: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'alcohol_way_of_use'
	})
	alcoholWayOfUse: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'amphetamine_last_use'
	})
	amphetamineLastUse: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'amphetamine_times_day'
	})
	amphetamineTimesDay: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'amphetamine_days_week'
	})
	amphetamineDaysWeek: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'amphetamine_way_of_use'
	})
	amphetamineWayOfUse: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'diazepine_last_use'
	})
	diazepineLastUse: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'diazepine_times_day'
	})
	diazepineTimesDay: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'diazepine_days_week'
	})
	diazepineDaysWeek: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'diazepine_way_of_use'
	})
	diazepineWayOfUse: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'cannabis_last_use'
	})
	cannabisLastUse: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'cannabis_times_day'
	})
	cannabisTimesDay: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'cannabis_days_week'
	})
	cannabisDaysWeek: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'cannabis_way_of_use'
	})
	cannabisWayOfUse: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'ecstasy_last_use'
	})
	ecstasyLastUse: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'ecstasy_times_day'
	})
	ecstasyTimesDay: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'ecstasy_days_week'
	})
	ecstasyDaysWeek: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'ecstasy_way_of_use'
	})
	ecstasyWayOfUse: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'heroin_last_use'
	})
	heroinLastUse: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'heroin_times_day'
	})
	heroinTimesDay: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'heroin_days_week'
	})
	heroinDaysWeek: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'heroin_way_of_use'
	})
	heroinWayOfUse: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'adh_opium_last_use'
	})
	adhOpiumLastUse: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'adh_opium_time_day'
	})
	adhOpiumTimeDay: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'adh_opium_days_week'
	})
	adhOpiumDaysWeek: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_opium_way_of_use'
	})
	adhOpiumWayOfUse: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'shared_syringe'
	})
	sharedSyringe: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'herbal_medicines'
	})
	herbalMedicines: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'conclusion'
	})
	conclusion: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'adh_suggestions'
	})
	adhSuggestions: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'checklist'
	})
	checklist: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'adh_next_appointment_date'
	})
	adhNextAppointmentDate: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'verify'
	})
	verify: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'last_registration_date'
	})
	lastRegistrationDate: Date

}
