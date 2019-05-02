// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { AdhArtEpisode } from './AdhArtEpisode'
import { AdhTbEpisode } from './AdhTbEpisode'
import { DrugUsage } from './DrugUsage'

@Entity()
export class ArtAdherence {
	@PrimaryColumn({
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		name: 'registration_date',
		type: 'timestamptz',
		nullable: true
	})
	registrationDate: Date

	@Column({
		name: 'patient_name',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
		nullable: true
	})
	sex: string

	@Column({
		name: 'date_of_birth',
		type: 'timestamptz',
		nullable: true
	})
	dateOfBirth: Date

	@Column({
		name: 'age',
		type: 'integer',
		nullable: true
	})
	age: number

	@Column({
		name: 'patient_target',
		nullable: true
	})
	patientTarget: string

	@PrimaryColumn({
		name: 'place_of_medical_care'
	})
	placeOfMedicalCare: string

	@Column({
		name: 'visit',
		nullable: true
	})
	visit: string

	@Column({
		name: 'visit_assessment',
		type: 'integer',
		nullable: true
	})
	visitAssessment: number

	@Column({
		name: 'visit_reason',
		nullable: true
	})
	visitReason: string

	@PrimaryColumn({
		name: 'visit_date',
		type: 'timestamptz'
	})
	visitDate: Date

	@Column({
		name: 'appointment',
		nullable: true
	})
	appointment: string

	@Column({
		name: 'counselor',
		nullable: true
	})
	counselor: string

	@Column({
		name: 'marital_status',
		nullable: true
	})
	maritalStatus: string

	@Column({
		name: 'children_number',
		type: 'integer',
		nullable: true
	})
	childrenNumber: number

	@Column({
		name: 'accomodation',
		nullable: true
	})
	accomodation: string

	@Column({
		name: 'accomodation_if_stable',
		nullable: true
	})
	accomodationIfStable: string

	@Column({
		name: 'has_occupation',
		type: 'boolean',
		nullable: true
	})
	hasOccupation: boolean

	@Column({
		name: 'occupation',
		nullable: true
	})
	occupation: string

	@Column({
		name: 'financial_situation',
		nullable: true
	})
	financialSituation: string

	@Column({
		name: 'level_of_education',
		nullable: true
	})
	levelOfEducation: string

	@Column({
		name: 'social_remark',
		nullable: true
	})
	socialRemark: string

	@Column({
		name: 'adh_patient_has_care_taker',
		type: 'boolean',
		nullable: true
	})
	adhPatientHasCareTaker: boolean

	@Column({
		name: 'adh_if_yes_name',
		nullable: true
	})
	adhIfYesName: string

	@Column({
		name: 'adh_if_no_why',
		nullable: true
	})
	adhIfNoWhy: string

	@Column({
		name: 'adh_relationship_to_patient_i',
		nullable: true
	})
	adhRelationshipToPatientI: string

	@Column({
		name: 'adh_in_same_house_hold_i',
		type: 'boolean',
		nullable: true
	})
	adhInSameHouseHoldI: boolean

	@Column({
		name: 'caretaker_attend_clinic_i',
		type: 'boolean',
		nullable: true
	})
	caretakerAttendClinicI: boolean

	@Column({
		name: 'art_start_date',
		type: 'timestamptz',
		nullable: true
	})
	artStartDate: Date

	@OneToMany(type => AdhArtEpisode, adhArtEpisode => adhArtEpisode.artAdherence, {
		cascade: true
	})
	adhArtEpisodes: AdhArtEpisode[]

	@Column({
		name: 'adh_tb_start_date',
		type: 'timestamptz',
		nullable: true
	})
	adhTbStartDate: Date

	@OneToMany(type => AdhTbEpisode, adhTbEpisode => adhTbEpisode.artAdherence, {
		cascade: true
	})
	adhTbEpisodes: AdhTbEpisode[]

	@Column({
		name: 'adherence_problem',
		type: 'boolean',
		nullable: true
	})
	adherenceProblem: boolean

	@Column({
		name: 'adh_problem',
		nullable: true
	})
	adhProblem: string

	@Column({
		name: 'social_problem',
		nullable: true
	})
	socialProblem: string

	@Column({
		name: 'medical_problem',
		nullable: true
	})
	medicalProblem: string

	@Column({
		name: 'medical_problem_other',
		nullable: true
	})
	medicalProblemOther: string

	@Column({
		name: 'misc_problem',
		nullable: true
	})
	miscProblem: string

	@Column({
		name: 'comment',
		nullable: true
	})
	comment: string

	@Column({
		name: 'adh_no_side_effects',
		nullable: true
	})
	adhNoSideEffects: string

	@Column({
		name: 'adh_side_effects',
		nullable: true
	})
	adhSideEffects: string

	@Column({
		name: 'adh_severe_side_effects',
		nullable: true
	})
	adhSevereSideEffects: string

	@Column({
		name: 'adh_long_term_side_effects',
		nullable: true
	})
	adhLongTermSideEffects: string

	@Column({
		name: 'adh_short_term_general',
		nullable: true
	})
	adhShortTermGeneral: string

	@Column({
		name: 'adh_short_term_side_effects_other',
		nullable: true
	})
	adhShortTermSideEffectsOther: string

	@Column({
		name: 'adh_severe_se',
		type: 'boolean',
		nullable: true
	})
	adhSevereSe: boolean

	@Column({
		name: 'adh_refer_to_doctor',
		type: 'boolean',
		nullable: true
	})
	adhReferToDoctor: boolean

	@Column({
		name: 'adh_no_of_missed_doses_last_7_days',
		type: 'integer',
		nullable: true
	})
	adhNoOfMissedDosesLast7Days: number

	@Column({
		name: 'adh_no_of_missed_doses_last_30_days',
		type: 'integer',
		nullable: true
	})
	adhNoOfMissedDosesLast30Days: number

	@Column({
		name: 'total_doses',
		type: 'integer',
		nullable: true
	})
	totalDoses: number

	@Column({
		name: 'adherence_within_last_30_days',
		type: 'integer',
		nullable: true
	})
	adherenceWithinLast30Days: number

	@Column({
		name: 'doses_number',
		type: 'integer',
		nullable: true
	})
	dosesNumber: number

	@Column({
		name: 'doses_should_have',
		type: 'integer',
		nullable: true
	})
	dosesShouldHave: number

	@Column({
		name: 'extra_doses_provided',
		type: 'integer',
		nullable: true
	})
	extraDosesProvided: number

	@Column({
		name: 'dose_for',
		type: 'integer',
		nullable: true
	})
	doseFor: number

	@Column({
		name: 'adherence_since_last_visit',
		nullable: true
	})
	adherenceSinceLastVisit: string

	@Column({
		name: 'adh_social_familialsituation',
		nullable: true
	})
	adhSocialFamilialsituation: string

	@Column({
		name: 'adh_social_if_problem',
		nullable: true
	})
	adhSocialIfProblem: string

	@Column({
		name: 'caretaker_status',
		nullable: true
	})
	caretakerStatus: string

	@Column({
		name: 'caretaker_name',
		nullable: true
	})
	caretakerName: string

	@Column({
		name: 'adh_in_same_house_hold_f',
		type: 'boolean',
		nullable: true
	})
	adhInSameHouseHoldF: boolean

	@Column({
		name: 'adh_relationship_to_patient_f',
		nullable: true
	})
	adhRelationshipToPatientF: string

	@Column({
		name: 'caretaker_attend_clinic_f',
		type: 'boolean',
		nullable: true
	})
	caretakerAttendClinicF: boolean

	@Column({
		name: 'caretaker_attend_clinic_problem',
		nullable: true
	})
	caretakerAttendClinicProblem: string

	@Column({
		name: 'adh_psychological_disorder',
		type: 'boolean',
		nullable: true
	})
	adhPsychologicalDisorder: boolean

	@Column({
		name: 'adh_psycho_if_yes',
		nullable: true
	})
	adhPsychoIfYes: string

	@Column({
		name: 'current_drug_use',
		type: 'boolean',
		nullable: true
	})
	currentDrugUse: boolean

	@Column({
		name: 'drug',
		nullable: true
	})
	drug: string

	@OneToMany(type => DrugUsage, drugUsage => drugUsage.artAdherence, {
		cascade: true
	})
	drugUsages: DrugUsage[]

	@Column({
		name: 'shared_syringe',
		type: 'boolean',
		nullable: true
	})
	sharedSyringe: boolean

	@Column({
		name: 'herbal_medicines',
		type: 'boolean',
		nullable: true
	})
	herbalMedicines: boolean

	@Column({
		name: 'conclusion',
		nullable: true
	})
	conclusion: string

	@Column({
		name: 'adh_suggestions',
		nullable: true
	})
	adhSuggestions: string

	@Column({
		name: 'checklist',
		nullable: true
	})
	checklist: string

	@Column({
		name: 'adh_next_appointment_date',
		type: 'timestamptz',
		nullable: true
	})
	adhNextAppointmentDate: Date

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@Column({
		name: 'last_registration_date',
		type: 'timestamptz',
		nullable: true
	})
	lastRegistrationDate: Date

}
