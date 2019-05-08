// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { TreatmentEpisode } from './TreatmentEpisode'
import { AdherenceProblem } from './AdherenceProblem'
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
		name: 'has_caretaker',
		type: 'boolean',
		nullable: true
	})
	hasCaretaker: boolean

	@Column({
		name: 'caretaker_name',
		nullable: true
	})
	caretakerName: string

	@Column({
		name: 'why_no_caretaker',
		nullable: true
	})
	whyNoCaretaker: string

	@Column({
		name: 'caretaker_relationship',
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
		nullable: true
	})
	comment: string

	@Column({
		name: 'no_side_effects',
		nullable: true
	})
	noSideEffects: string

	@Column({
		name: 'side_effects',
		nullable: true
	})
	sideEffects: string

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
		nullable: true
	})
	adherenceSinceLastVisit: string

	@Column({
		name: 'social_familial_situation',
		nullable: true
	})
	socialFamilialSituation: string

	@Column({
		name: 'social_problem',
		nullable: true
	})
	socialProblem: string

	@Column({
		name: 'caretaker_status',
		nullable: true
	})
	caretakerStatus: string

	@Column({
		name: 'caretaker_problem',
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
		nullable: true
	})
	conclusion: string

	@Column({
		name: 'suggestions',
		nullable: true
	})
	suggestions: string

	@Column({
		name: 'checklist',
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

	@Column({
		name: 'last_registration_date',
		type: 'timestamptz',
		nullable: true
	})
	lastRegistrationDate: Date

}
