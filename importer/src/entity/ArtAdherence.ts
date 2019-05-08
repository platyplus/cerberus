// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { TreatmentEpisode } from './TreatmentEpisode'
import { AdherenceProblem } from './AdherenceProblem'
import { DrugUsage } from './DrugUsage'

@Entity()
export class ArtAdherence {
	@PrimaryColumn({
		name: 'mdm_code',
		type: 'text',
		default: 'unknown'
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
		type: 'text',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		type: 'text',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
		type: 'text',
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
		type: 'text',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'place_of_medical_care',
		type: 'text',
		nullable: true,
		default: 'unknown'
	})
	placeOfMedicalCare: string

	@Column({
		name: 'visit',
		type: 'text',
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
		type: 'text',
		nullable: true
	})
	visitReason: string

	@Column({
		name: 'visit_date',
		type: 'timestamptz',
		nullable: true
	})
	visitDate: Date

	@Column({
		name: 'appointment',
		type: 'text',
		nullable: true
	})
	appointment: string

	@Column({
		name: 'counselor',
		type: 'text',
		nullable: true
	})
	counselor: string

	@Column({
		name: 'marital_status',
		type: 'text',
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
		type: 'text',
		nullable: true
	})
	accomodation: string

	@Column({
		name: 'accomodation_if_stable',
		type: 'text',
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
		type: 'text',
		nullable: true
	})
	occupation: string

	@Column({
		name: 'financial_situation',
		type: 'text',
		nullable: true
	})
	financialSituation: string

	@Column({
		name: 'level_of_education',
		type: 'text',
		nullable: true
	})
	levelOfEducation: string

	@Column({
		name: 'social_remark',
		type: 'text',
		nullable: true
	})
	socialRemark: string

	@Column({
		name: 'has_caretaker',
		type: 'boolean',
		nullable: true
	})
	hasCaretaker: boolean

	@Column({
		name: 'caretaker_name',
		type: 'text',
		nullable: true
	})
	caretakerName: string

	@Column({
		name: 'why_no_caretaker',
		type: 'text',
		nullable: true
	})
	whyNoCaretaker: string

	@Column({
		name: 'caretaker_relationship',
		type: 'text',
		nullable: true
	})
	caretakerRelationship: string

	@Column({
		name: 'caretaker_in_same_household',
		type: 'boolean',
		nullable: true
	})
	caretakerInSameHousehold: boolean

	@Column({
		name: 'caretaker_attended_clinic_with_patient',
		type: 'boolean',
		nullable: true
	})
	caretakerAttendedClinicWithPatient: boolean

	@Column({
		name: 'art_start_date',
		type: 'timestamptz',
		nullable: true
	})
	artStartDate: Date

	@OneToMany(type => TreatmentEpisode, treatmentEpisode => treatmentEpisode.artAdherence, {
		cascade: true
	})
	treatmentEpisodes: TreatmentEpisode[]

	@Column({
		name: 'tb_start_date',
		type: 'timestamptz',
		nullable: true
	})
	tbStartDate: Date

	@Column({
		name: 'has_adherence_problem',
		type: 'boolean',
		nullable: true
	})
	hasAdherenceProblem: boolean

	@OneToMany(type => AdherenceProblem, adherenceProblem => adherenceProblem.artAdherence, {
		cascade: true
	})
	adherenceProblems: AdherenceProblem[]

	@Column({
		name: 'comment',
		type: 'text',
		nullable: true
	})
	comment: string

	@Column({
		name: 'no_side_effects',
		type: 'text',
		nullable: true
	})
	noSideEffects: string

	@Column({
		name: 'side_effects',
		type: 'text',
		nullable: true,
		array: true
	})
	sideEffects: string[]

	@Column({
		name: 'has_severe_side_effect',
		type: 'boolean',
		nullable: true
	})
	hasSevereSideEffect: boolean

	@Column({
		name: 'refer_to_doctor',
		type: 'boolean',
		nullable: true
	})
	referToDoctor: boolean

	@Column({
		name: 'nb_missed_doses_last_7_days',
		type: 'integer',
		nullable: true
	})
	nbMissedDosesLast7Days: number

	@Column({
		name: 'nb_missed_doses_last_30_days',
		type: 'integer',
		nullable: true
	})
	nbMissedDosesLast30Days: number

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
		name: 'doses_found',
		type: 'integer',
		nullable: true
	})
	dosesFound: number

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
		type: 'text',
		nullable: true
	})
	adherenceSinceLastVisit: string

	@Column({
		name: 'social_familial_situation',
		type: 'text',
		nullable: true
	})
	socialFamilialSituation: string

	@Column({
		name: 'social_problem',
		type: 'text',
		nullable: true
	})
	socialProblem: string

	@Column({
		name: 'caretaker_status',
		type: 'text',
		nullable: true
	})
	caretakerStatus: string

	@Column({
		name: 'caretaker_problem',
		type: 'text',
		nullable: true
	})
	caretakerProblem: string

	@Column({
		name: 'has_psychological_disorder',
		type: 'boolean',
		nullable: true
	})
	hasPsychologicalDisorder: boolean

	@Column({
		name: 'psychological_disorder',
		type: 'text',
		nullable: true
	})
	psychologicalDisorder: string

	@Column({
		name: 'uses_drug',
		type: 'boolean',
		nullable: true
	})
	usesDrug: boolean

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
		name: 'uses_herbal_medicines',
		type: 'boolean',
		nullable: true
	})
	usesHerbalMedicines: boolean

	@Column({
		name: 'conclusion',
		type: 'text',
		nullable: true
	})
	conclusion: string

	@Column({
		name: 'suggestions',
		type: 'text',
		nullable: true
	})
	suggestions: string

	@Column({
		name: 'checklist',
		type: 'text',
		nullable: true
	})
	checklist: string

	@Column({
		name: 'next_appointment_date',
		type: 'timestamptz',
		nullable: true
	})
	nextAppointmentDate: Date

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@PrimaryColumn({
		name: 'last_registration_date',
		type: 'timestamptz'
	})
	lastRegistrationDate: Date

}
