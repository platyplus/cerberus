// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { ArtAntiRetroMedicineTaken } from './ArtAntiRetroMedicineTaken'
import { ArtAntiBioMedicineCode } from './ArtAntiBioMedicineCode'
import { ArtAntiTbMedicineCode } from './ArtAntiTbMedicineCode'
import { ArtTreatment } from './ArtTreatment'
import { ArtChildStage } from './ArtChildStage'
import { ArtGhcDiagnosis } from './ArtGhcDiagnosis'
import { TbSputum } from './TbSputum'
import { ArtArtMedication } from './ArtArtMedication'
import { ArtTbMedication } from './ArtTbMedication'
import { ArtOthMedication } from './ArtOthMedication'

@Entity()
export class ArtConsultationPlha {
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

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_visit_date'
	})
	artVisitDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_md_mstaff'
	})
	artMdMstaff: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'art_plh_new_patient'
	})
	artPlhNewPatient: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'art_art_new_patient'
	})
	artArtNewPatient: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'art_art_treatment'
	})
	artArtTreatment: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_partner_tested'
	})
	artPatientPartnerTested: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_partner_test_status'
	})
	artPatientPartnerTestStatus: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_disclosed_status'
	})
	artPatientDisclosedStatus: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_status_disclosed_by'
	})
	artStatusDisclosedBy: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_status_disclosed_by_other'
	})
	artStatusDisclosedByOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_taking_medicines'
	})
	artPatientTakingMedicines: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_taking_following_medicines'
	})
	artPatientTakingFollowingMedicines: string

	@OneToMany(type => ArtAntiRetroMedicineTaken, artAntiRetroMedicineTaken => artAntiRetroMedicineTaken.artConsultationPlha, {
		cascade: true
	})
	artAntiRetroMedicineTakens: ArtAntiRetroMedicineTaken[]

	@OneToMany(type => ArtAntiBioMedicineCode, artAntiBioMedicineCode => artAntiBioMedicineCode.artConsultationPlha, {
		cascade: true
	})
	artAntiBioMedicineCodes: ArtAntiBioMedicineCode[]

	@OneToMany(type => ArtAntiTbMedicineCode, artAntiTbMedicineCode => artAntiTbMedicineCode.artConsultationPlha, {
		cascade: true
	})
	artAntiTbMedicineCodes: ArtAntiTbMedicineCode[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_taking_other'
	})
	artPatientTakingOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_medications_comment'
	})
	artMedicationsComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_taken_ar_vs_before'
	})
	artPatientTakenArVsBefore: string

	@OneToMany(type => ArtTreatment, artTreatment => artTreatment.artConsultationPlha, {
		cascade: true
	})
	artTreatments: ArtTreatment[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_arv_comment'
	})
	artArvComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_medical_history_comment'
	})
	artMedicalHistoryComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_t_bhistory'
	})
	artTBhistory: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_previous_t_bdiagnosis'
	})
	artPreviousTBdiagnosis: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_year_of_extrapulmonary_episode'
	})
	artYearOfExtrapulmonaryEpisode: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_year_of_pulmonary_episode'
	})
	artYearOfPulmonaryEpisode: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_t_bhistory_comments'
	})
	artTBhistoryComments: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_symptoms_opt'
	})
	artTbRelatedSymptomsOpt: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_symptoms'
	})
	artTbRelatedSymptoms: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_fever'
	})
	artTbRelatedFever: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_night_sweats'
	})
	artTbRelatedNightSweats: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_appetite_loss'
	})
	artTbRelatedAppetiteLoss: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_weight_loss'
	})
	artTbRelatedWeightLoss: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_cough'
	})
	artTbRelatedCough: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_haemoptysis'
	})
	artTbRelatedHaemoptysis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_related_notice'
	})
	artTbRelatedNotice: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_constitutional'
	})
	artConstitutional: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_consti_fatigue'
	})
	artConstiFatigue: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_consti_pain'
	})
	artConstiPain: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_consti_other'
	})
	artConstiOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_gastrointestinal'
	})
	artGastrointestinal: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_gastro_abdominal_pain'
	})
	artGastroAbdominalPain: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_gastro_nausea'
	})
	artGastroNausea: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_gastro_vomiting'
	})
	artGastroVomiting: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_gastro_dysphagia'
	})
	artGastroDysphagia: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_gastro_diarrhea'
	})
	artGastroDiarrhea: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_gastro_other'
	})
	artGastroOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_respiratory_c_vs'
	})
	artRespiratoryCVs: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_respi_difficultly_breathing'
	})
	artRespiDifficultlyBreathing: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_respi_chest_pain'
	})
	artRespiChestPain: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_respi_palpitation'
	})
	artRespiPalpitation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_respi_other'
	})
	artRespiOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neurological'
	})
	artNeurological: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neuro_headache'
	})
	artNeuroHeadache: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neuro_confusion'
	})
	artNeuroConfusion: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neuro_memory_problems'
	})
	artNeuroMemoryProblems: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neuro_tingling'
	})
	artNeuroTingling: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neuro_insomnia'
	})
	artNeuroInsomnia: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neuro_yawning'
	})
	artNeuroYawning: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_skin_manifestation'
	})
	artSkinManifestation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_skin_itchiness'
	})
	artSkinItchiness: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_skin_rash'
	})
	artSkinRash: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_skin_lump'
	})
	artSkinLump: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_skin_other'
	})
	artSkinOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_symptoms_comments'
	})
	artSymptomsComments: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_eye'
	})
	artEye: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_eye_comment'
	})
	artEyeComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_ears_nose'
	})
	artEarsNose: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_ears_nose_comment'
	})
	artEarsNoseComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_oral'
	})
	artOral: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_oral_comment'
	})
	artOralComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_lymph_nodes'
	})
	artLymphNodes: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_lymph_nodes_comment'
	})
	artLymphNodesComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_heart'
	})
	artHeart: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_heart_comment'
	})
	artHeartComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_lungs'
	})
	artLungs: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_lungs_comment'
	})
	artLungsComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'abdomen'
	})
	abdomen: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'abdoment_comment'
	})
	abdomentComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_p_exam_neurological'
	})
	artPExamNeurological: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_neurological_comment'
	})
	artNeurologicalComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_skin'
	})
	artSkin: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_skin_comment'
	})
	artSkinComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_physical_exam_comments'
	})
	artPhysicalExamComments: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_child_or_adult'
	})
	artChildOrAdult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'stage'
	})
	stage: string

	@OneToMany(type => ArtChildStage, artChildStage => artChildStage.artConsultationPlha, {
		cascade: true
	})
	artChildStages: ArtChildStage[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_status'
	})
	artPatientStatus: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_oi_diagnosis'
	})
	artOiDiagnosis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_oi_diagnosis_eptb'
	})
	artOiDiagnosisEptb: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_oi_diagnosis_other'
	})
	artOiDiagnosisOther: string

	@OneToMany(type => ArtGhcDiagnosis, artGhcDiagnosis => artGhcDiagnosis.artConsultationPlha, {
		cascade: true
	})
	artGhcDiagnosiss: ArtGhcDiagnosis[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_diagnosis_comments'
	})
	artDiagnosisComments: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_first_cd'
	})
	artFirstCd: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_last_cd'
	})
	artLastCd: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_viral_load_result'
	})
	artViralLoadResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_h_bs_ag'
	})
	artHBsAg: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_h_bs_ab'
	})
	artHBsAb: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_hcv_ab'
	})
	artHcvAb: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_apri'
	})
	artApri: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_liver_fibrosis'
	})
	artLiverFibrosis: string

	@OneToMany(type => TbSputum, tbSputum => tbSputum.artConsultationPlha, {
		cascade: true
	})
	tbSputums: TbSputum[]

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'tb_radiology_date'
	})
	tbRadiologyDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_radio_radiology'
	})
	tbRadioRadiology: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_radio_cx_ray'
	})
	tbRadioCxRay: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_radio_x_ray'
	})
	tbRadioXRay: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_radio_usg'
	})
	tbRadioUsg: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'tb_persons_screened_tb'
	})
	tbPersonsScreenedTb: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_screened_tb_yes_where'
	})
	tbScreenedTbYesWhere: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'tb_referred'
	})
	tbReferred: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_refer_yes_where'
	})
	tbReferYesWhere: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_type_of_case'
	})
	tbTypeOfCase: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_type'
	})
	tbType: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_allergy'
	})
	artAllergy: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'allergy'
	})
	allergy: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'art_pregnant'
	})
	artPregnant: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_prophylaxis'
	})
	artProphylaxis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_prophyaxis_primary'
	})
	artProphyaxisPrimary: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_prophylaxis_secondary'
	})
	artProphylaxisSecondary: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_mdmart_starting_date'
	})
	artMdmartStartingDate: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_remaining_pill'
	})
	artRemainingPill: number

	@OneToMany(type => ArtArtMedication, artArtMedication => artArtMedication.artConsultationPlha, {
		cascade: true
	})
	artArtMedications: ArtArtMedication[]

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_tb_starting_date'
	})
	artTbStartingDate: Date

	@OneToMany(type => ArtTbMedication, artTbMedication => artTbMedication.artConsultationPlha, {
		cascade: true
	})
	artTbMedications: ArtTbMedication[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_category'
	})
	tbCategory: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_treatment_category'
	})
	tbTreatmentCategory: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'ipt_treatment'
	})
	iptTreatment: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'ipt_initiation_date'
	})
	iptInitiationDate: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'ipt_initial_1st_visitdate'
	})
	iptInitial1stVisitdate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'ipt_outcome'
	})
	iptOutcome: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'ipt_outcomedate'
	})
	iptOutcomedate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'ipt_reason_of_not_starting'
	})
	iptReasonOfNotStarting: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ipt_other'
	})
	iptOther: string

	@OneToMany(type => ArtOthMedication, artOthMedication => artOthMedication.artConsultationPlha, {
		cascade: true
	})
	artOthMedications: ArtOthMedication[]

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'art_referred_to'
	})
	artReferredTo: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_patient_should_return_in'
	})
	artPatientShouldReturnIn: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_return_other'
	})
	artReturnOther: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_date_next_visit'
	})
	artDateNextVisit: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_motive'
	})
	artMotive: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_motive_other'
	})
	artMotiveOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_plan_next_visit'
	})
	artPlanNextVisit: string

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
