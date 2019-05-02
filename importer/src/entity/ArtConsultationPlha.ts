// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { ArtAntiRetroMedicineTaken } from './ArtAntiRetroMedicineTaken'
import { ArtAntiBioMedicineCode } from './ArtAntiBioMedicineCode'
import { ArtAntiTbMedicineCode } from './ArtAntiTbMedicineCode'
import { ArtTreatment } from './ArtTreatment'
import { ArtStage } from './ArtStage'
import { ArtGhcDiagnosis } from './ArtGhcDiagnosis'
import { TbSputum } from './TbSputum'
import { ArtArtMedication } from './ArtArtMedication'
import { ArtTbMedication } from './ArtTbMedication'
import { ArtOthMedication } from './ArtOthMedication'

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
		name: 'art_visit_date',
		type: 'timestamptz',
		nullable: true
	})
	artVisitDate: Date

	@Column({
		name: 'art_md_mstaff',
		nullable: true
	})
	artMdMstaff: string

	@Column({
		name: 'art_plh_new_patient',
		type: 'boolean',
		nullable: true
	})
	artPlhNewPatient: boolean

	@Column({
		name: 'art_art_new_patient',
		type: 'boolean',
		nullable: true
	})
	artArtNewPatient: boolean

	@Column({
		name: 'art_art_treatment',
		type: 'boolean',
		nullable: true
	})
	artArtTreatment: boolean

	@Column({
		name: 'art_patient_partner_tested',
		nullable: true
	})
	artPatientPartnerTested: string

	@Column({
		name: 'art_patient_partner_test_status',
		nullable: true
	})
	artPatientPartnerTestStatus: string

	@Column({
		name: 'art_patient_disclosed_status',
		nullable: true
	})
	artPatientDisclosedStatus: string

	@Column({
		name: 'art_status_disclosed_by',
		nullable: true
	})
	artStatusDisclosedBy: string

	@Column({
		name: 'art_status_disclosed_by_other',
		nullable: true
	})
	artStatusDisclosedByOther: string

	@Column({
		name: 'art_patient_taking_medicines',
		nullable: true
	})
	artPatientTakingMedicines: string

	@Column({
		name: 'art_patient_taking_following_medicines',
		nullable: true
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
		name: 'art_patient_taking_other',
		nullable: true
	})
	artPatientTakingOther: string

	@Column({
		name: 'art_medications_comment',
		nullable: true
	})
	artMedicationsComment: string

	@Column({
		name: 'art_patient_taken_ar_vs_before',
		nullable: true
	})
	artPatientTakenArVsBefore: string

	@OneToMany(type => ArtTreatment, artTreatment => artTreatment.artConsultationPlha, {
		cascade: true
	})
	artTreatments: ArtTreatment[]

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

	@Column({
		name: 'art_constitutional',
		nullable: true
	})
	artConstitutional: string

	@Column({
		name: 'art_consti_fatigue',
		nullable: true
	})
	artConstiFatigue: string

	@Column({
		name: 'art_consti_pain',
		nullable: true
	})
	artConstiPain: string

	@Column({
		name: 'art_consti_other',
		nullable: true
	})
	artConstiOther: string

	@Column({
		name: 'art_gastrointestinal',
		nullable: true
	})
	artGastrointestinal: string

	@Column({
		name: 'art_gastro_abdominal_pain',
		nullable: true
	})
	artGastroAbdominalPain: string

	@Column({
		name: 'art_gastro_nausea',
		nullable: true
	})
	artGastroNausea: string

	@Column({
		name: 'art_gastro_vomiting',
		nullable: true
	})
	artGastroVomiting: string

	@Column({
		name: 'art_gastro_dysphagia',
		nullable: true
	})
	artGastroDysphagia: string

	@Column({
		name: 'art_gastro_diarrhea',
		nullable: true
	})
	artGastroDiarrhea: string

	@Column({
		name: 'art_gastro_other',
		nullable: true
	})
	artGastroOther: string

	@Column({
		name: 'art_respiratory_c_vs',
		nullable: true
	})
	artRespiratoryCVs: string

	@Column({
		name: 'art_respi_difficultly_breathing',
		nullable: true
	})
	artRespiDifficultlyBreathing: string

	@Column({
		name: 'art_respi_chest_pain',
		nullable: true
	})
	artRespiChestPain: string

	@Column({
		name: 'art_respi_palpitation',
		nullable: true
	})
	artRespiPalpitation: string

	@Column({
		name: 'art_respi_other',
		nullable: true
	})
	artRespiOther: string

	@Column({
		name: 'art_neurological',
		nullable: true
	})
	artNeurological: string

	@Column({
		name: 'art_neuro_headache',
		nullable: true
	})
	artNeuroHeadache: string

	@Column({
		name: 'art_neuro_confusion',
		nullable: true
	})
	artNeuroConfusion: string

	@Column({
		name: 'art_neuro_memory_problems',
		nullable: true
	})
	artNeuroMemoryProblems: string

	@Column({
		name: 'art_neuro_tingling',
		nullable: true
	})
	artNeuroTingling: string

	@Column({
		name: 'art_neuro_insomnia',
		nullable: true
	})
	artNeuroInsomnia: string

	@Column({
		name: 'art_neuro_yawning',
		nullable: true
	})
	artNeuroYawning: string

	@Column({
		name: 'art_skin_manifestation',
		nullable: true
	})
	artSkinManifestation: string

	@Column({
		name: 'art_skin_itchiness',
		nullable: true
	})
	artSkinItchiness: string

	@Column({
		name: 'art_skin_rash',
		nullable: true
	})
	artSkinRash: string

	@Column({
		name: 'art_skin_lump',
		nullable: true
	})
	artSkinLump: string

	@Column({
		name: 'art_skin_other',
		nullable: true
	})
	artSkinOther: string

	@Column({
		name: 'art_symptoms_comments',
		nullable: true
	})
	artSymptomsComments: string

	@Column({
		name: 'art_eye',
		nullable: true
	})
	artEye: string

	@Column({
		name: 'art_eye_comment',
		nullable: true
	})
	artEyeComment: string

	@Column({
		name: 'art_ears_nose',
		nullable: true
	})
	artEarsNose: string

	@Column({
		name: 'art_ears_nose_comment',
		nullable: true
	})
	artEarsNoseComment: string

	@Column({
		name: 'art_oral',
		nullable: true
	})
	artOral: string

	@Column({
		name: 'art_oral_comment',
		nullable: true
	})
	artOralComment: string

	@Column({
		name: 'art_lymph_nodes',
		nullable: true
	})
	artLymphNodes: string

	@Column({
		name: 'art_lymph_nodes_comment',
		nullable: true
	})
	artLymphNodesComment: string

	@Column({
		name: 'art_heart',
		nullable: true
	})
	artHeart: string

	@Column({
		name: 'art_heart_comment',
		nullable: true
	})
	artHeartComment: string

	@Column({
		name: 'art_lungs',
		nullable: true
	})
	artLungs: string

	@Column({
		name: 'art_lungs_comment',
		nullable: true
	})
	artLungsComment: string

	@Column({
		name: 'abdomen',
		nullable: true
	})
	abdomen: string

	@Column({
		name: 'abdoment_comment',
		nullable: true
	})
	abdomentComment: string

	@Column({
		name: 'art_p_exam_neurological',
		nullable: true
	})
	artPExamNeurological: string

	@Column({
		name: 'art_neurological_comment',
		nullable: true
	})
	artNeurologicalComment: string

	@Column({
		name: 'art_skin',
		nullable: true
	})
	artSkin: string

	@Column({
		name: 'art_skin_comment',
		nullable: true
	})
	artSkinComment: string

	@Column({
		name: 'art_physical_exam_comments',
		nullable: true
	})
	artPhysicalExamComments: string

	@Column({
		name: 'art_child_or_adult',
		nullable: true
	})
	artChildOrAdult: string

	@OneToMany(type => ArtStage, artStage => artStage.artConsultationPlha, {
		cascade: true
	})
	artStages: ArtStage[]

	@Column({
		name: 'art_patient_status',
		nullable: true
	})
	artPatientStatus: string

	@Column({
		name: 'art_oi_diagnosis',
		nullable: true
	})
	artOiDiagnosis: string

	@Column({
		name: 'art_oi_diagnosis_eptb',
		nullable: true
	})
	artOiDiagnosisEptb: string

	@Column({
		name: 'art_oi_diagnosis_other',
		nullable: true
	})
	artOiDiagnosisOther: string

	@OneToMany(type => ArtGhcDiagnosis, artGhcDiagnosis => artGhcDiagnosis.artConsultationPlha, {
		cascade: true
	})
	artGhcDiagnosiss: ArtGhcDiagnosis[]

	@Column({
		name: 'art_diagnosis_comments',
		nullable: true
	})
	artDiagnosisComments: string

	@Column({
		name: 'art_first_cd',
		type: 'integer',
		nullable: true
	})
	artFirstCd: number

	@Column({
		name: 'art_last_cd',
		type: 'integer',
		nullable: true
	})
	artLastCd: number

	@Column({
		name: 'art_viral_load_result',
		nullable: true
	})
	artViralLoadResult: string

	@Column({
		name: 'art_h_bs_ag',
		nullable: true
	})
	artHBsAg: string

	@Column({
		name: 'art_h_bs_ab',
		nullable: true
	})
	artHBsAb: string

	@Column({
		name: 'art_hcv_ab',
		nullable: true
	})
	artHcvAb: string

	@Column({
		name: 'art_apri',
		type: 'integer',
		nullable: true
	})
	artApri: number

	@Column({
		name: 'art_liver_fibrosis',
		nullable: true
	})
	artLiverFibrosis: string

	@OneToMany(type => TbSputum, tbSputum => tbSputum.artConsultationPlha, {
		cascade: true
	})
	tbSputums: TbSputum[]

	@Column({
		name: 'tb_radiology_date',
		type: 'timestamptz',
		nullable: true
	})
	tbRadiologyDate: Date

	@Column({
		name: 'tb_radio_radiology',
		nullable: true
	})
	tbRadioRadiology: string

	@Column({
		name: 'tb_radio_cx_ray',
		nullable: true
	})
	tbRadioCxRay: string

	@Column({
		name: 'tb_radio_x_ray',
		nullable: true
	})
	tbRadioXRay: string

	@Column({
		name: 'tb_radio_usg',
		nullable: true
	})
	tbRadioUsg: string

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
		name: 'tb_type_of_case',
		nullable: true
	})
	tbTypeOfCase: string

	@Column({
		name: 'tb_type',
		nullable: true
	})
	tbType: string

	@Column({
		name: 'art_allergy',
		nullable: true
	})
	artAllergy: string

	@Column({
		name: 'allergy',
		nullable: true
	})
	allergy: string

	@Column({
		name: 'art_pregnant',
		type: 'boolean',
		nullable: true
	})
	artPregnant: boolean

	@Column({
		name: 'art_prophylaxis',
		nullable: true
	})
	artProphylaxis: string

	@Column({
		name: 'art_prophyaxis_primary',
		nullable: true
	})
	artProphyaxisPrimary: string

	@Column({
		name: 'art_prophylaxis_secondary',
		nullable: true
	})
	artProphylaxisSecondary: string

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

	@OneToMany(type => ArtArtMedication, artArtMedication => artArtMedication.artConsultationPlha, {
		cascade: true
	})
	artArtMedications: ArtArtMedication[]

	@Column({
		name: 'art_tb_starting_date',
		type: 'timestamptz',
		nullable: true
	})
	artTbStartingDate: Date

	@OneToMany(type => ArtTbMedication, artTbMedication => artTbMedication.artConsultationPlha, {
		cascade: true
	})
	artTbMedications: ArtTbMedication[]

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

	@OneToMany(type => ArtOthMedication, artOthMedication => artOthMedication.artConsultationPlha, {
		cascade: true
	})
	artOthMedications: ArtOthMedication[]

	@Column({
		name: 'art_referred_to',
		type: 'boolean',
		nullable: true
	})
	artReferredTo: boolean

	@Column({
		name: 'art_patient_should_return_in',
		nullable: true
	})
	artPatientShouldReturnIn: string

	@Column({
		name: 'art_return_other',
		nullable: true
	})
	artReturnOther: string

	@Column({
		name: 'art_date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	artDateNextVisit: Date

	@Column({
		name: 'art_motive',
		nullable: true
	})
	artMotive: string

	@Column({
		name: 'art_motive_other',
		nullable: true
	})
	artMotiveOther: string

	@Column({
		name: 'art_plan_next_visit',
		nullable: true
	})
	artPlanNextVisit: string

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
