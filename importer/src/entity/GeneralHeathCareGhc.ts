// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { GhcCategory } from './GhcCategory'
import { GhcMedication } from './GhcMedication'

@Entity()
export class GeneralHeathCareGhc {
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
		name: 'patient_target',
		nullable: true
	})
	patientTarget: string

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
		name: 'ghc_new_patient',
		type: 'boolean',
		nullable: true
	})
	ghcNewPatient: boolean

	@Column({
		name: 'ghc_visit_date',
		type: 'timestamptz',
		nullable: true
	})
	ghcVisitDate: Date

	@Column({
		name: 'mdm_staff',
		nullable: true
	})
	mdmStaff: string

	@Column({
		name: 'ghc_symptoms_constitutional',
		nullable: true
	})
	ghcSymptomsConstitutional: string

	@Column({
		name: 'ghc_constitutional_fatigue',
		nullable: true
	})
	ghcConstitutionalFatigue: string

	@Column({
		name: 'ghc_constitutional_fever',
		nullable: true
	})
	ghcConstitutionalFever: string

	@Column({
		name: 'ghc_constitutional_night_sweats',
		nullable: true
	})
	ghcConstitutionalNightSweats: string

	@Column({
		name: 'ghc_constitutional_appetitie_loss',
		nullable: true
	})
	ghcConstitutionalAppetitieLoss: string

	@Column({
		name: 'ghc_constitutional_weight_loss',
		nullable: true
	})
	ghcConstitutionalWeightLoss: string

	@Column({
		name: 'ghc_constitutional_pain',
		nullable: true
	})
	ghcConstitutionalPain: string

	@Column({
		name: 'ghc_constitutional_other',
		nullable: true
	})
	ghcConstitutionalOther: string

	@Column({
		name: 'ghc_symptoms_respiratory',
		nullable: true
	})
	ghcSymptomsRespiratory: string

	@Column({
		name: 'ghc_respiratory_non_prod_cough',
		nullable: true
	})
	ghcRespiratoryNonProdCough: string

	@Column({
		name: 'ghc_respiratory_productive_cough',
		nullable: true
	})
	ghcRespiratoryProductiveCough: string

	@Column({
		name: 'ghc_respiratory_hemoptysis',
		nullable: true
	})
	ghcRespiratoryHemoptysis: string

	@Column({
		name: 'ghc_respiratory_diff_breathing',
		nullable: true
	})
	ghcRespiratoryDiffBreathing: string

	@Column({
		name: 'ghc_respiratory_chest_pain',
		nullable: true
	})
	ghcRespiratoryChestPain: string

	@Column({
		name: 'ghc_respiratory_palpitation',
		nullable: true
	})
	ghcRespiratoryPalpitation: string

	@Column({
		name: 'ghc_respiratory_other',
		nullable: true
	})
	ghcRespiratoryOther: string

	@Column({
		name: 'ghc_symptoms_gastrointestinal',
		nullable: true
	})
	ghcSymptomsGastrointestinal: string

	@Column({
		name: 'ghc_gastrointestinal_abd_pain',
		nullable: true
	})
	ghcGastrointestinalAbdPain: string

	@Column({
		name: 'ghc_gastrointestinal_nausea',
		nullable: true
	})
	ghcGastrointestinalNausea: string

	@Column({
		name: 'ghc_gastrointestinal_vomiting',
		nullable: true
	})
	ghcGastrointestinalVomiting: string

	@Column({
		name: 'ghc_gastrointestinal_dysphagia',
		nullable: true
	})
	ghcGastrointestinalDysphagia: string

	@Column({
		name: 'ghc_gastrointestinal_diarrhea',
		nullable: true
	})
	ghcGastrointestinalDiarrhea: string

	@Column({
		name: 'ghc_gastrointestinal_other',
		nullable: true
	})
	ghcGastrointestinalOther: string

	@Column({
		name: 'ghc_symptoms_neurological',
		nullable: true
	})
	ghcSymptomsNeurological: string

	@Column({
		name: 'ghc_neuro_headache',
		nullable: true
	})
	ghcNeuroHeadache: string

	@Column({
		name: 'ghc_neuro_confusion',
		nullable: true
	})
	ghcNeuroConfusion: string

	@Column({
		name: 'ghc_neuro_mem_problem',
		nullable: true
	})
	ghcNeuroMemProblem: string

	@Column({
		name: 'ghc_neuro_tingling',
		nullable: true
	})
	ghcNeuroTingling: string

	@Column({
		name: 'ghc_neuro_insomnia',
		nullable: true
	})
	ghcNeuroInsomnia: string

	@Column({
		name: 'ghc_neuro_yawning',
		nullable: true
	})
	ghcNeuroYawning: string

	@Column({
		name: 'ghc_symptoms_skin_manifestation',
		nullable: true
	})
	ghcSymptomsSkinManifestation: string

	@Column({
		name: 'ghc_skin_itchiness',
		nullable: true
	})
	ghcSkinItchiness: string

	@Column({
		name: 'ghc_skin_rash',
		nullable: true
	})
	ghcSkinRash: string

	@Column({
		name: 'ghc_skin_lump',
		nullable: true
	})
	ghcSkinLump: string

	@Column({
		name: 'ghc_skin_other',
		nullable: true
	})
	ghcSkinOther: string

	@Column({
		name: 'ghc_symptoms_additional_comments',
		nullable: true
	})
	ghcSymptomsAdditionalComments: string

	@Column({
		name: 'ghc_eye',
		nullable: true
	})
	ghcEye: string

	@Column({
		name: 'ghc_eye_comment',
		nullable: true
	})
	ghcEyeComment: string

	@Column({
		name: 'ghc_ears_nose',
		nullable: true
	})
	ghcEarsNose: string

	@Column({
		name: 'ghc_ears_nose_comment',
		nullable: true
	})
	ghcEarsNoseComment: string

	@Column({
		name: 'ghc_oral',
		nullable: true
	})
	ghcOral: string

	@Column({
		name: 'ghc_oral_comment',
		nullable: true
	})
	ghcOralComment: string

	@Column({
		name: 'ghc_lymph_nodes',
		nullable: true
	})
	ghcLymphNodes: string

	@Column({
		name: 'ghc_lymph_nodes_comment',
		nullable: true
	})
	ghcLymphNodesComment: string

	@Column({
		name: 'heart',
		nullable: true
	})
	heart: string

	@Column({
		name: 'heart_comment',
		nullable: true
	})
	heartComment: string

	@Column({
		name: 'ghc_lungs',
		nullable: true
	})
	ghcLungs: string

	@Column({
		name: 'ghc_lungs_comment',
		nullable: true
	})
	ghcLungsComment: string

	@Column({
		name: 'ghc_abdomen',
		nullable: true
	})
	ghcAbdomen: string

	@Column({
		name: 'ghc_abdomen_comment',
		nullable: true
	})
	ghcAbdomenComment: string

	@Column({
		name: 'ghc_neurological',
		nullable: true
	})
	ghcNeurological: string

	@Column({
		name: 'ghc_neurological_comment',
		nullable: true
	})
	ghcNeurologicalComment: string

	@Column({
		name: 'ghc_additional_comments',
		nullable: true
	})
	ghcAdditionalComments: string

	@OneToMany(type => GhcCategory, ghcCategory => ghcCategory.generalHeathCareGhc, {
		cascade: true
	})
	ghcCategorys: GhcCategory[]

	@Column({
		name: 'hbsag',
		nullable: true
	})
	hbsag: string

	@Column({
		name: 'hbsab',
		nullable: true
	})
	hbsab: string

	@Column({
		name: 'hcvab',
		nullable: true
	})
	hcvab: string

	@Column({
		name: 'ghc_apri',
		type: 'integer',
		nullable: true
	})
	ghcApri: number

	@Column({
		name: 'ghc_liver_fibrosis',
		nullable: true
	})
	ghcLiverFibrosis: string

	@Column({
		name: 'ghc_allergy',
		nullable: true
	})
	ghcAllergy: string

	@Column({
		name: 'ghc_allergy_other',
		nullable: true
	})
	ghcAllergyOther: string

	@OneToMany(type => GhcMedication, ghcMedication => ghcMedication.generalHeathCareGhc, {
		cascade: true
	})
	ghcMedications: GhcMedication[]

	@Column({
		name: 'ghc_patient_should_return_in',
		nullable: true
	})
	ghcPatientShouldReturnIn: string

	@Column({
		name: 'ghc_should_return_in_other',
		nullable: true
	})
	ghcShouldReturnInOther: string

	@Column({
		name: 'ghc_date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	ghcDateNextVisit: Date

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
