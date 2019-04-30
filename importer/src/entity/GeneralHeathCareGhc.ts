// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { GhcCategory } from './GhcCategory'
import { GhcMedication } from './GhcMedication'

@Entity()
export class GeneralHeathCareGhc {
	@Column({
		type: 'string',
		nullable: true,
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
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

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
		type: 'boolean',
		nullable: true,
		name: 'ghc_new_patient'
	})
	ghcNewPatient: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'ghc_visit_date'
	})
	ghcVisitDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'mdm_staff'
	})
	mdmStaff: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_symptoms_constitutional'
	})
	ghcSymptomsConstitutional: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_constitutional_fatigue'
	})
	ghcConstitutionalFatigue: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_constitutional_fever'
	})
	ghcConstitutionalFever: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_constitutional_night_sweats'
	})
	ghcConstitutionalNightSweats: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_constitutional_appetitie_loss'
	})
	ghcConstitutionalAppetitieLoss: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_constitutional_weight_loss'
	})
	ghcConstitutionalWeightLoss: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_constitutional_pain'
	})
	ghcConstitutionalPain: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_constitutional_other'
	})
	ghcConstitutionalOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_symptoms_respiratory'
	})
	ghcSymptomsRespiratory: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_respiratory_non_prod_cough'
	})
	ghcRespiratoryNonProdCough: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_respiratory_productive_cough'
	})
	ghcRespiratoryProductiveCough: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_respiratory_hemoptysis'
	})
	ghcRespiratoryHemoptysis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_respiratory_diff_breathing'
	})
	ghcRespiratoryDiffBreathing: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_respiratory_chest_pain'
	})
	ghcRespiratoryChestPain: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_respiratory_palpitation'
	})
	ghcRespiratoryPalpitation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_respiratory_other'
	})
	ghcRespiratoryOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_symptoms_gastrointestinal'
	})
	ghcSymptomsGastrointestinal: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_gastrointestinal_abd_pain'
	})
	ghcGastrointestinalAbdPain: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_gastrointestinal_nausea'
	})
	ghcGastrointestinalNausea: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_gastrointestinal_vomiting'
	})
	ghcGastrointestinalVomiting: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_gastrointestinal_dysphagia'
	})
	ghcGastrointestinalDysphagia: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_gastrointestinal_diarrhea'
	})
	ghcGastrointestinalDiarrhea: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_gastrointestinal_other'
	})
	ghcGastrointestinalOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_symptoms_neurological'
	})
	ghcSymptomsNeurological: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neuro_headache'
	})
	ghcNeuroHeadache: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neuro_confusion'
	})
	ghcNeuroConfusion: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neuro_mem_problem'
	})
	ghcNeuroMemProblem: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neuro_tingling'
	})
	ghcNeuroTingling: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neuro_insomnia'
	})
	ghcNeuroInsomnia: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neuro_yawning'
	})
	ghcNeuroYawning: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_symptoms_skin_manifestation'
	})
	ghcSymptomsSkinManifestation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_skin_itchiness'
	})
	ghcSkinItchiness: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_skin_rash'
	})
	ghcSkinRash: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_skin_lump'
	})
	ghcSkinLump: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_skin_other'
	})
	ghcSkinOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_symptoms_additional_comments'
	})
	ghcSymptomsAdditionalComments: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_eye'
	})
	ghcEye: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_eye_comment'
	})
	ghcEyeComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_ears_nose'
	})
	ghcEarsNose: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_ears_nose_comment'
	})
	ghcEarsNoseComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_oral'
	})
	ghcOral: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_oral_comment'
	})
	ghcOralComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_lymph_nodes'
	})
	ghcLymphNodes: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_lymph_nodes_comment'
	})
	ghcLymphNodesComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'heart'
	})
	heart: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'heart_comment'
	})
	heartComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_lungs'
	})
	ghcLungs: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_lungs_comment'
	})
	ghcLungsComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_abdomen'
	})
	ghcAbdomen: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_abdomen_comment'
	})
	ghcAbdomenComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neurological'
	})
	ghcNeurological: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_neurological_comment'
	})
	ghcNeurologicalComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_additional_comments'
	})
	ghcAdditionalComments: string

	@OneToMany(type => GhcCategory, ghcCategory => ghcCategory.generalHeathCareGhc, {
		cascade: true
	})
	ghcCategorys: GhcCategory[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'hbsag'
	})
	hbsag: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'hbsab'
	})
	hbsab: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'hcvab'
	})
	hcvab: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'ghc_apri'
	})
	ghcApri: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_liver_fibrosis'
	})
	ghcLiverFibrosis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_allergy'
	})
	ghcAllergy: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_allergy_other'
	})
	ghcAllergyOther: string

	@OneToMany(type => GhcMedication, ghcMedication => ghcMedication.generalHeathCareGhc, {
		cascade: true
	})
	ghcMedications: GhcMedication[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_patient_should_return_in'
	})
	ghcPatientShouldReturnIn: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_should_return_in_other'
	})
	ghcShouldReturnInOther: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'ghc_date_next_visit'
	})
	ghcDateNextVisit: Date

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

	@PrimaryColumn({
		type: 'string',
		name: 'key'
	})
	key: string

}
