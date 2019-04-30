// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { StiMedication } from './StiMedication'

@Entity()
export class Sti {
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
		name: 'sti_visit_date'
	})
	stiVisitDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'mdm_staff'
	})
	mdmStaff: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_new_patient'
	})
	stiNewPatient: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_background_previous_sit_treated'
	})
	stiBackgroundPreviousSitTreated: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms'
	})
	stiSymptoms: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_score_throat'
	})
	stiSymptomsScoreThroat: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_vaginal_d_opt'
	})
	stiSymptomsVaginalDOpt: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_v_discharge'
	})
	stiSymptomsVDischarge: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_low_abdo_opt'
	})
	stiSymptomsLowAbdoOpt: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_low_abdo_pain'
	})
	stiSymptomsLowAbdoPain: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_dysuria'
	})
	stiSymptomsDysuria: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_ulcer_opt'
	})
	stiSymptomsUlcerOpt: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_ulcer'
	})
	stiSymptomsUlcer: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptomst_anal_discharge'
	})
	stiSymptomstAnalDischarge: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_itchiness_description'
	})
	stiSymptomsItchinessDescription: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_swelling_over_genital_opt'
	})
	stiSymptomsSwellingOverGenitalOpt: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_swelling'
	})
	stiSymptomsSwelling: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_warts'
	})
	stiSymptomsWarts: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_scrotal'
	})
	stiSymptomsScrotal: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_urethral_discharge'
	})
	stiSymptomsUrethralDischarge: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_other'
	})
	stiSymptomsOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_symptoms_comment'
	})
	stiSymptomsComment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_physical_exam'
	})
	stiPhysicalExam: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_oral_ulcer_opt'
	})
	stiPExamOralUlcerOpt: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_pyaryngitis'
	})
	stiPExamPyaryngitis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_skin_rash'
	})
	stiPExamSkinRash: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_tenderness_over_lower_abdomen'
	})
	stiPExamTendernessOverLowerAbdomen: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_vulva'
	})
	stiPExamVulva: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_vaginal_d'
	})
	stiPExamVaginalD: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_cervical_d'
	})
	stiPExamCervicalD: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_adnexal_tenderness'
	})
	stiPExamAdnexalTenderness: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_cervical_motion_tenderness'
	})
	stiPExamCervicalMotionTenderness: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_inguinal_bubo'
	})
	stiPExamInguinalBubo: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_genital_ulcer'
	})
	stiPExamGenitalUlcer: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_warts'
	})
	stiPExamWarts: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_urethral_discharge'
	})
	stiPExamUrethralDischarge: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_anal_discharge'
	})
	stiPExamAnalDischarge: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_scrotal'
	})
	stiPExamScrotal: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_other'
	})
	stiPExamOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_comment'
	})
	stiPExamComment: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_test_pregnancy_test'
	})
	stiTestPregnancyTest: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_p_exam_test'
	})
	stiPExamTest: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_test_sniff_test'
	})
	stiTestSniffTest: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'test_ph'
	})
	testPh: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_test_urethral_smear'
	})
	stiTestUrethralSmear: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_test_vaginal_smear'
	})
	stiTestVaginalSmear: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_test_anal_smear'
	})
	stiTestAnalSmear: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_test_ulcer_smear'
	})
	stiTestUlcerSmear: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_test_throat_swab'
	})
	stiTestThroatSwab: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_test_chlamydia'
	})
	stiTestChlamydia: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'rpr'
	})
	rpr: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'rpr_dil'
	})
	rprDil: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_test_other_investigation'
	})
	stiTestOtherInvestigation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_presumptive_diagnosis'
	})
	stiPresumptiveDiagnosis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'partner_diagnosis_other'
	})
	partnerDiagnosisOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'lab_type'
	})
	labType: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_treatment_treatment_plan'
	})
	stiTreatmentTreatmentPlan: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_treatment_allergy'
	})
	stiTreatmentAllergy: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_treatment_allergy_other'
	})
	stiTreatmentAllergyOther: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_treatment_pregnant'
	})
	stiTreatmentPregnant: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_treatment_surgical_intervention'
	})
	stiTreatmentSurgicalIntervention: boolean

	@OneToMany(type => StiMedication, stiMedication => stiMedication.sti, {
		cascade: true
	})
	stiMedications: StiMedication[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_n_03_other_treatment'
	})
	stiN03OtherTreatment: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_referred'
	})
	stiReferred: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'sti_sti_condom'
	})
	stiStiCondom: boolean

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_partner_treatment'
	})
	stiPartnerTreatment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_remark'
	})
	stiRemark: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'sti_date_next_visit'
	})
	stiDateNextVisit: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_plan_for_next_visit'
	})
	stiPlanForNextVisit: string

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
