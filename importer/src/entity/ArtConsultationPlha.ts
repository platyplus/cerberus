// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { Symptom } from './Symptom'
import { PhysicalExam } from './PhysicalExam'
import { HivStage } from './HivStage'
import { Diagnosis } from './Diagnosis'
import { Sputum } from './Sputum'
import { Prophylaxis } from './Prophylaxis'
import { Medication } from './Medication'

@Entity()
export class ArtConsultationPlha {
	@Column({
		name: 'mdm_code',
		nullable: true
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

	@Column({
		name: 'visit_date',
		type: 'timestamptz',
		nullable: true
	})
	visitDate: Date

	@Column({
		name: 'mdm_staff',
		nullable: true
	})
	mdmStaff: string

	@Column({
		name: 'plh_new_patient',
		type: 'boolean',
		nullable: true
	})
	plhNewPatient: boolean

	@Column({
		name: 'art_new_patient',
		type: 'boolean',
		nullable: true
	})
	artNewPatient: boolean

	@Column({
		name: 'art_treatment',
		type: 'boolean',
		nullable: true
	})
	artTreatment: boolean

	@Column({
		name: 'partner_is_tested',
		type: 'boolean',
		nullable: true
	})
	partnerIsTested: boolean

	@Column({
		name: 'partner_test_status',
		nullable: true
	})
	partnerTestStatus: string

	@Column({
		name: 'status_is_disclosed',
		type: 'boolean',
		nullable: true
	})
	statusIsDisclosed: boolean

	@Column({
		name: 'status_disclosed_by',
		nullable: true
	})
	statusDisclosedBy: string

	@Column({
		name: 'is_taking_medicines',
		type: 'boolean',
		nullable: true
	})
	isTakingMedicines: boolean

	@Column({
		name: 'medicine_taken',
		nullable: true
	})
	medicineTaken: string

	@Column({
		name: 'medication_comments',
		nullable: true
	})
	medicationComments: string

	@Column({
		name: 'taken_arvs_before',
		nullable: true
	})
	takenArvsBefore: string

	@Column({
		name: 'art_arv_comment',
		nullable: true
	})
	artArvComment: string

	@Column({
		name: 'art_medical_history_comment',
		nullable: true
	})
	artMedicalHistoryComment: string

	@Column({
		name: 'art_t_bhistory',
		nullable: true
	})
	artTBhistory: string

	@Column({
		name: 'art_previous_t_bdiagnosis',
		nullable: true
	})
	artPreviousTBdiagnosis: string

	@Column({
		name: 'art_year_of_extrapulmonary_episode',
		type: 'integer',
		nullable: true
	})
	artYearOfExtrapulmonaryEpisode: number

	@Column({
		name: 'art_year_of_pulmonary_episode',
		type: 'integer',
		nullable: true
	})
	artYearOfPulmonaryEpisode: number

	@Column({
		name: 'art_t_bhistory_comments',
		nullable: true
	})
	artTBhistoryComments: string

	@Column({
		name: 'art_tb_related_symptoms_opt',
		nullable: true
	})
	artTbRelatedSymptomsOpt: string

	@Column({
		name: 'art_tb_related_symptoms',
		nullable: true
	})
	artTbRelatedSymptoms: string

	@Column({
		name: 'art_tb_related_fever',
		nullable: true
	})
	artTbRelatedFever: string

	@Column({
		name: 'art_tb_related_night_sweats',
		nullable: true
	})
	artTbRelatedNightSweats: string

	@Column({
		name: 'art_tb_related_appetite_loss',
		nullable: true
	})
	artTbRelatedAppetiteLoss: string

	@Column({
		name: 'art_tb_related_weight_loss',
		nullable: true
	})
	artTbRelatedWeightLoss: string

	@Column({
		name: 'art_tb_related_cough',
		nullable: true
	})
	artTbRelatedCough: string

	@Column({
		name: 'art_tb_related_haemoptysis',
		nullable: true
	})
	artTbRelatedHaemoptysis: string

	@Column({
		name: 'art_tb_related_notice',
		nullable: true
	})
	artTbRelatedNotice: string

	@OneToMany(type => Symptom, symptom => symptom.artConsultationPlha, {
		cascade: true
	})
	symptoms: Symptom[]

	@OneToMany(type => PhysicalExam, physicalExam => physicalExam.artConsultationPlha, {
		cascade: true
	})
	physicalExams: PhysicalExam[]

	@Column({
		name: 'physical_exam_comments',
		nullable: true
	})
	physicalExamComments: string

	@OneToMany(type => HivStage, hivStage => hivStage.artConsultationPlha, {
		cascade: true
	})
	hivStages: HivStage[]

	@Column({
		name: 'patient_status',
		nullable: true
	})
	patientStatus: string

	@OneToMany(type => Diagnosis, diagnosis => diagnosis.artConsultationPlha, {
		cascade: true
	})
	diagnosiss: Diagnosis[]

	@Column({
		name: 'diagnosis_comments',
		nullable: true
	})
	diagnosisComments: string

	@Column({
		name: 'first_cd',
		type: 'integer',
		nullable: true
	})
	firstCd: number

	@Column({
		name: 'last_cd',
		type: 'integer',
		nullable: true
	})
	lastCd: number

	@Column({
		name: 'viral_load_result',
		nullable: true
	})
	viralLoadResult: string

	@Column({
		name: 'hbsag',
		nullable: true
	})
	hbsag: string

	@Column({
		name: 'hsbab',
		nullable: true
	})
	hsbab: string

	@Column({
		name: 'hcvab',
		nullable: true
	})
	hcvab: string

	@Column({
		name: 'apri',
		type: 'integer',
		nullable: true
	})
	apri: number

	@Column({
		name: 'livrer_fibrosis',
		nullable: true
	})
	livrerFibrosis: string

	@OneToMany(type => Sputum, sputum => sputum.artConsultationPlha, {
		cascade: true
	})
	sputums: Sputum[]

	@Column({
		name: 'radiology_date',
		type: 'timestamptz',
		nullable: true
	})
	radiologyDate: Date

	@Column({
		name: 'radiology',
		nullable: true
	})
	radiology: string[]

	@Column({
		name: 'tb_persons_screened_tb',
		type: 'boolean',
		nullable: true
	})
	tbPersonsScreenedTb: boolean

	@Column({
		name: 'tb_screened_tb_yes_where',
		nullable: true
	})
	tbScreenedTbYesWhere: string

	@Column({
		name: 'tb_referred',
		type: 'boolean',
		nullable: true
	})
	tbReferred: boolean

	@Column({
		name: 'tb_refer_yes_where',
		nullable: true
	})
	tbReferYesWhere: string

	@Column({
		name: 'type_of_care',
		nullable: true
	})
	typeOfCare: string

	@Column({
		name: 'tb_type',
		nullable: true
	})
	tbType: string

	@Column({
		name: 'allergy',
		nullable: true
	})
	allergy: string[]

	@Column({
		name: 'pregnant',
		type: 'boolean',
		nullable: true
	})
	pregnant: boolean

	@OneToMany(type => Prophylaxis, prophylaxis => prophylaxis.artConsultationPlha, {
		cascade: true
	})
	prophylaxiss: Prophylaxis[]

	@Column({
		name: 'art_mdmart_starting_date',
		type: 'timestamptz',
		nullable: true
	})
	artMdmartStartingDate: Date

	@Column({
		name: 'art_remaining_pill',
		type: 'integer',
		nullable: true
	})
	artRemainingPill: number

	@OneToMany(type => Medication, medication => medication.artConsultationPlhaArtMedication, {
		cascade: true
	})
	artMedications: Medication[]

	@Column({
		name: 'art_tb_starting_date',
		type: 'timestamptz',
		nullable: true
	})
	artTbStartingDate: Date

	@OneToMany(type => Medication, medication => medication.artConsultationPlhaTbMedication, {
		cascade: true
	})
	tbMedications: Medication[]

	@Column({
		name: 'tb_category',
		nullable: true
	})
	tbCategory: string

	@Column({
		name: 'tb_treatment_category',
		nullable: true
	})
	tbTreatmentCategory: string

	@Column({
		name: 'ipt_treatment',
		type: 'boolean',
		nullable: true
	})
	iptTreatment: boolean

	@Column({
		name: 'ipt_initiation_date',
		type: 'timestamptz',
		nullable: true
	})
	iptInitiationDate: Date

	@Column({
		name: 'ipt_initial_1st_visitdate',
		type: 'timestamptz',
		nullable: true
	})
	iptInitial1stVisitdate: Date

	@Column({
		name: 'ipt_outcome',
		nullable: true
	})
	iptOutcome: string

	@Column({
		name: 'ipt_outcomedate',
		type: 'timestamptz',
		nullable: true
	})
	iptOutcomedate: Date

	@Column({
		name: 'ipt_reason_of_not_starting',
		nullable: true
	})
	iptReasonOfNotStarting: string

	@Column({
		name: 'ipt_other',
		nullable: true
	})
	iptOther: string

	@OneToMany(type => Medication, medication => medication.artConsultationPlha, {
		cascade: true
	})
	medications: Medication[]

	@Column({
		name: 'referred_to_hospital',
		type: 'boolean',
		nullable: true
	})
	referredToHospital: boolean

	@Column({
		name: 'should_return_in',
		nullable: true
	})
	shouldReturnIn: string

	@Column({
		name: 'date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	dateNextVisit: Date

	@Column({
		name: 'motive',
		nullable: true
	})
	motive: string

	@Column({
		name: 'plan_next_visit',
		nullable: true
	})
	planNextVisit: string

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

	@PrimaryColumn({
		name: 'key'
	})
	key: string

}
