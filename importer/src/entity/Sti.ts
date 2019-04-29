// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { StiMedication } from './StiMedication'

@Entity()
export class Sti {
	@Column({
    nullable: true,
		name: 'mdm_code'
  })
	mdmCode: string

	@Column({
    nullable: true,
		name: 'registration_date',
		type: 'timestamptz'
  })
	registrationDate: Date

	@Column({
    nullable: true,
		name: 'patient_name'
  })
	patientName: string

	@Column({
    nullable: true,
		name: 'father_name'
  })
	fatherName: string

	@Column({
    nullable: true,
		name: 'sex'
  })
	sex: string

	@Column({
    nullable: true,
		name: 'date_of_birth',
		type: 'timestamptz'
  })
	dateOfBirth: Date

	@Column({
    nullable: true,
		name: 'age',
		type: 'integer'
  })
	age: number

	@Column({
    nullable: true,
		name: 'patient_target'
  })
	patientTarget: string

	@Column({
    nullable: true,
		name: 'sti_visit_date',
		type: 'timestamptz'
  })
	stiVisitDate: Date

	@Column({
    nullable: true,
		name: 'mdm_staff'
  })
	mdmStaff: string

	@Column({
    nullable: true,
		name: 'sti_new_patient',
		type: 'boolean'
  })
	stiNewPatient: boolean

	@Column({
    nullable: true,
		name: 'sti_background_previous_sit_treated',
		type: 'boolean'
  })
	stiBackgroundPreviousSitTreated: boolean

	@Column({
    nullable: true,
		name: 'sti_symptoms'
  })
	stiSymptoms: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_score_throat'
  })
	stiSymptomsScoreThroat: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_vaginal_d_opt'
  })
	stiSymptomsVaginalDOpt: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_v_discharge'
  })
	stiSymptomsVDischarge: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_low_abdo_opt'
  })
	stiSymptomsLowAbdoOpt: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_low_abdo_pain'
  })
	stiSymptomsLowAbdoPain: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_dysuria'
  })
	stiSymptomsDysuria: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_ulcer_opt'
  })
	stiSymptomsUlcerOpt: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_ulcer'
  })
	stiSymptomsUlcer: string

	@Column({
    nullable: true,
		name: 'sti_symptomst_anal_discharge'
  })
	stiSymptomstAnalDischarge: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_itchiness_description'
  })
	stiSymptomsItchinessDescription: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_swelling_over_genital_opt'
  })
	stiSymptomsSwellingOverGenitalOpt: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_swelling'
  })
	stiSymptomsSwelling: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_warts'
  })
	stiSymptomsWarts: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_scrotal'
  })
	stiSymptomsScrotal: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_urethral_discharge'
  })
	stiSymptomsUrethralDischarge: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_other'
  })
	stiSymptomsOther: string

	@Column({
    nullable: true,
		name: 'sti_symptoms_comment'
  })
	stiSymptomsComment: string

	@Column({
    nullable: true,
		name: 'sti_physical_exam'
  })
	stiPhysicalExam: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_oral_ulcer_opt'
  })
	stiPExamOralUlcerOpt: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_pyaryngitis'
  })
	stiPExamPyaryngitis: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_skin_rash'
  })
	stiPExamSkinRash: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_tenderness_over_lower_abdomen'
  })
	stiPExamTendernessOverLowerAbdomen: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_vulva'
  })
	stiPExamVulva: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_vaginal_d'
  })
	stiPExamVaginalD: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_cervical_d'
  })
	stiPExamCervicalD: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_adnexal_tenderness'
  })
	stiPExamAdnexalTenderness: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_cervical_motion_tenderness'
  })
	stiPExamCervicalMotionTenderness: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_inguinal_bubo'
  })
	stiPExamInguinalBubo: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_genital_ulcer'
  })
	stiPExamGenitalUlcer: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_warts'
  })
	stiPExamWarts: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_urethral_discharge'
  })
	stiPExamUrethralDischarge: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_anal_discharge'
  })
	stiPExamAnalDischarge: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_scrotal'
  })
	stiPExamScrotal: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_other'
  })
	stiPExamOther: string

	@Column({
    nullable: true,
		name: 'sti_p_exam_comment'
  })
	stiPExamComment: string

	@Column({
    nullable: true,
		name: 'sti_test_pregnancy_test',
		type: 'boolean'
  })
	stiTestPregnancyTest: boolean

	@Column({
    nullable: true,
		name: 'sti_p_exam_test'
  })
	stiPExamTest: string

	@Column({
    nullable: true,
		name: 'sti_test_sniff_test'
  })
	stiTestSniffTest: string

	@Column({
    nullable: true,
		name: 'test_ph'
  })
	testPh: string

	@Column({
    nullable: true,
		name: 'sti_test_urethral_smear',
		type: 'boolean'
  })
	stiTestUrethralSmear: boolean

	@Column({
    nullable: true,
		name: 'sti_test_vaginal_smear',
		type: 'boolean'
  })
	stiTestVaginalSmear: boolean

	@Column({
    nullable: true,
		name: 'sti_test_anal_smear',
		type: 'boolean'
  })
	stiTestAnalSmear: boolean

	@Column({
    nullable: true,
		name: 'sti_test_ulcer_smear',
		type: 'boolean'
  })
	stiTestUlcerSmear: boolean

	@Column({
    nullable: true,
		name: 'sti_test_throat_swab',
		type: 'boolean'
  })
	stiTestThroatSwab: boolean

	@Column({
    nullable: true,
		name: 'sti_test_chlamydia'
  })
	stiTestChlamydia: string

	@Column({
    nullable: true,
		name: 'rpr'
  })
	rpr: string

	@Column({
    nullable: true,
		name: 'rpr_dil'
  })
	rprDil: string

	@Column({
    nullable: true,
		name: 'sti_test_other_investigation'
  })
	stiTestOtherInvestigation: string

	@Column({
    nullable: true,
		name: 'sti_presumptive_diagnosis'
  })
	stiPresumptiveDiagnosis: string

	@Column({
    nullable: true,
		name: 'partner_diagnosis_other'
  })
	partnerDiagnosisOther: string

	@Column({
    nullable: true,
		name: 'lab_type'
  })
	labType: string

	@Column({
    nullable: true,
		name: 'sti_treatment_treatment_plan'
  })
	stiTreatmentTreatmentPlan: string

	@Column({
    nullable: true,
		name: 'sti_treatment_allergy'
  })
	stiTreatmentAllergy: string

	@Column({
    nullable: true,
		name: 'sti_treatment_allergy_other'
  })
	stiTreatmentAllergyOther: string

	@Column({
    nullable: true,
		name: 'sti_treatment_pregnant',
		type: 'boolean'
  })
	stiTreatmentPregnant: boolean

	@Column({
    nullable: true,
		name: 'sti_treatment_surgical_intervention',
		type: 'boolean'
  })
	stiTreatmentSurgicalIntervention: boolean

	@OneToMany(type => StiMedication, stiMedication => stiMedication.sti, {
    cascade: true
  })
	stiMedications: StiMedication[]

	@Column({
    nullable: true,
		name: 'sti_n_03_other_treatment'
  })
	stiN03OtherTreatment: string

	@Column({
    nullable: true,
		name: 'sti_referred',
		type: 'boolean'
  })
	stiReferred: boolean

	@Column({
    nullable: true,
		name: 'sti_sti_condom',
		type: 'boolean'
  })
	stiStiCondom: boolean

	@Column({
    nullable: true,
		name: 'sti_partner_treatment'
  })
	stiPartnerTreatment: string

	@Column({
    nullable: true,
		name: 'sti_remark'
  })
	stiRemark: string

	@Column({
    nullable: true,
		name: 'sti_date_next_visit',
		type: 'timestamptz'
  })
	stiDateNextVisit: Date

	@Column({
    nullable: true,
		name: 'sti_plan_for_next_visit'
  })
	stiPlanForNextVisit: string

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
