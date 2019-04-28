// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { GhcCategory } from './GhcCategory'
import { GhcMedication } from './GhcMedication'

@Entity()
export class GeneralHeathCareGhc {
	@Column({
    nullable: true,
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
		name: 'a_07_patient_target'
  })
	a07PatientTarget: string

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
		name: 'ghc_new_patient'
  })
	ghcNewPatient: string

	@Column({
    nullable: true,
		name: 'ghc_visit_date',
		type: 'timestamptz'
  })
	ghcVisitDate: Date

	@Column({
    nullable: true,
		name: 'ghc_md_mstaff'
  })
	ghcMdMstaff: string

	@Column({
    nullable: true,
		name: 'ghc_symptoms_constitutional'
  })
	ghcSymptomsConstitutional: string

	@Column({
    nullable: true,
		name: 'ghc_constitutional_fatigue'
  })
	ghcConstitutionalFatigue: string

	@Column({
    nullable: true,
		name: 'ghc_constitutional_fever'
  })
	ghcConstitutionalFever: string

	@Column({
    nullable: true,
		name: 'ghc_constitutional_night_sweats'
  })
	ghcConstitutionalNightSweats: string

	@Column({
    nullable: true,
		name: 'ghc_constitutional_appetitie_loss'
  })
	ghcConstitutionalAppetitieLoss: string

	@Column({
    nullable: true,
		name: 'ghc_constitutional_weight_loss'
  })
	ghcConstitutionalWeightLoss: string

	@Column({
    nullable: true,
		name: 'ghc_constitutional_pain'
  })
	ghcConstitutionalPain: string

	@Column({
    nullable: true,
		name: 'ghc_constitutional_other'
  })
	ghcConstitutionalOther: string

	@Column({
    nullable: true,
		name: 'ghc_symptoms_respiratory'
  })
	ghcSymptomsRespiratory: string

	@Column({
    nullable: true,
		name: 'ghc_respiratory_non_prod_cough'
  })
	ghcRespiratoryNonProdCough: string

	@Column({
    nullable: true,
		name: 'ghc_respiratory_productive_cough'
  })
	ghcRespiratoryProductiveCough: string

	@Column({
    nullable: true,
		name: 'ghc_respiratory_hemoptysis'
  })
	ghcRespiratoryHemoptysis: string

	@Column({
    nullable: true,
		name: 'ghc_respiratory_diff_breathing'
  })
	ghcRespiratoryDiffBreathing: string

	@Column({
    nullable: true,
		name: 'ghc_respiratory_chest_pain'
  })
	ghcRespiratoryChestPain: string

	@Column({
    nullable: true,
		name: 'ghc_respiratory_palpitation'
  })
	ghcRespiratoryPalpitation: string

	@Column({
    nullable: true,
		name: 'ghc_respiratory_other'
  })
	ghcRespiratoryOther: string

	@Column({
    nullable: true,
		name: 'ghc_symptoms_gastrointestinal'
  })
	ghcSymptomsGastrointestinal: string

	@Column({
    nullable: true,
		name: 'ghc_gastrointestinal_abd_pain'
  })
	ghcGastrointestinalAbdPain: string

	@Column({
    nullable: true,
		name: 'ghc_gastrointestinal_nausea'
  })
	ghcGastrointestinalNausea: string

	@Column({
    nullable: true,
		name: 'ghc_gastrointestinal_vomiting'
  })
	ghcGastrointestinalVomiting: string

	@Column({
    nullable: true,
		name: 'ghc_gastrointestinal_dysphagia'
  })
	ghcGastrointestinalDysphagia: string

	@Column({
    nullable: true,
		name: 'ghc_gastrointestinal_diarrhea'
  })
	ghcGastrointestinalDiarrhea: string

	@Column({
    nullable: true,
		name: 'ghc_gastrointestinal_other'
  })
	ghcGastrointestinalOther: string

	@Column({
    nullable: true,
		name: 'ghc_symptoms_neurological'
  })
	ghcSymptomsNeurological: string

	@Column({
    nullable: true,
		name: 'ghc_neuro_headache'
  })
	ghcNeuroHeadache: string

	@Column({
    nullable: true,
		name: 'ghc_neuro_confusion'
  })
	ghcNeuroConfusion: string

	@Column({
    nullable: true,
		name: 'ghc_neuro_mem_problem'
  })
	ghcNeuroMemProblem: string

	@Column({
    nullable: true,
		name: 'ghc_neuro_tingling'
  })
	ghcNeuroTingling: string

	@Column({
    nullable: true,
		name: 'ghc_neuro_insomnia'
  })
	ghcNeuroInsomnia: string

	@Column({
    nullable: true,
		name: 'ghc_neuro_yawning'
  })
	ghcNeuroYawning: string

	@Column({
    nullable: true,
		name: 'ghc_symptoms_skin_manifestation'
  })
	ghcSymptomsSkinManifestation: string

	@Column({
    nullable: true,
		name: 'ghc_skin_itchiness'
  })
	ghcSkinItchiness: string

	@Column({
    nullable: true,
		name: 'ghc_skin_rash'
  })
	ghcSkinRash: string

	@Column({
    nullable: true,
		name: 'ghc_skin_lump'
  })
	ghcSkinLump: string

	@Column({
    nullable: true,
		name: 'ghc_skin_other'
  })
	ghcSkinOther: string

	@Column({
    nullable: true,
		name: 'ghc_symptoms_additional_comments'
  })
	ghcSymptomsAdditionalComments: string

	@Column({
    nullable: true,
		name: 'ghc_eye'
  })
	ghcEye: string

	@Column({
    nullable: true,
		name: 'ghc_eye_comment'
  })
	ghcEyeComment: string

	@Column({
    nullable: true,
		name: 'ghc_ears_nose'
  })
	ghcEarsNose: string

	@Column({
    nullable: true,
		name: 'ghc_ears_nose_comment'
  })
	ghcEarsNoseComment: string

	@Column({
    nullable: true,
		name: 'ghc_oral'
  })
	ghcOral: string

	@Column({
    nullable: true,
		name: 'ghc_oral_comment'
  })
	ghcOralComment: string

	@Column({
    nullable: true,
		name: 'ghc_lymph_nodes'
  })
	ghcLymphNodes: string

	@Column({
    nullable: true,
		name: 'ghc_lymph_nodes_comment'
  })
	ghcLymphNodesComment: string

	@Column({
    nullable: true,
		name: 'ghc_heart'
  })
	ghcHeart: string

	@Column({
    nullable: true,
		name: 'ghc_heart_comment'
  })
	ghcHeartComment: string

	@Column({
    nullable: true,
		name: 'ghc_lungs'
  })
	ghcLungs: string

	@Column({
    nullable: true,
		name: 'ghc_lungs_comment'
  })
	ghcLungsComment: string

	@Column({
    nullable: true,
		name: 'ghc_abdomen'
  })
	ghcAbdomen: string

	@Column({
    nullable: true,
		name: 'ghc_abdomen_comment'
  })
	ghcAbdomenComment: string

	@Column({
    nullable: true,
		name: 'ghc_neurological'
  })
	ghcNeurological: string

	@Column({
    nullable: true,
		name: 'ghc_neurological_comment'
  })
	ghcNeurologicalComment: string

	@Column({
    nullable: true,
		name: 'ghc_additional_comments'
  })
	ghcAdditionalComments: string

	@OneToMany(type => GhcCategory, ghcCategory => ghcCategory.generalHeathCareGhc, {
    cascade: true
  })
	ghcCategorys: GhcCategory[]

	@Column({
    nullable: true,
		name: 'ghc_h_bs_ag'
  })
	ghcHBsAg: string

	@Column({
    nullable: true,
		name: 'ghc_h_bs_ab'
  })
	ghcHBsAb: string

	@Column({
    nullable: true,
		name: 'ghc_hcv_ab'
  })
	ghcHcvAb: string

	@Column({
    nullable: true,
		name: 'ghc_apri',
		type: 'integer'
  })
	ghcApri: number

	@Column({
    nullable: true,
		name: 'ghc_liver_fibrosis'
  })
	ghcLiverFibrosis: string

	@Column({
    nullable: true,
		name: 'ghc_allergy'
  })
	ghcAllergy: string

	@Column({
    nullable: true,
		name: 'ghc_allergy_other'
  })
	ghcAllergyOther: string

	@OneToMany(type => GhcMedication, ghcMedication => ghcMedication.generalHeathCareGhc, {
    cascade: true
  })
	ghcMedications: GhcMedication[]

	@Column({
    nullable: true,
		name: 'ghc_patient_should_return_in'
  })
	ghcPatientShouldReturnIn: string

	@Column({
    nullable: true,
		name: 'ghc_should_return_in_other'
  })
	ghcShouldReturnInOther: string

	@Column({
    nullable: true,
		name: 'ghc_date_next_visit',
		type: 'timestamptz'
  })
	ghcDateNextVisit: Date

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

	@PrimaryColumn({
    name: 'key'
  })
	key: string

}
