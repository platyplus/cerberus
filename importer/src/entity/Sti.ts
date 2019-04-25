// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { StiMedication } from './StiMedication'

@Entity()
export class Sti {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
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
		name: 'a_07_patient_target'
  })
  a07PatientTarget: string

  @Column({
    nullable: true,
		name: 'sti_visit_date',
		type: 'timestamptz'
  })
  stiVisitDate: Date

  @Column({
    nullable: true,
		name: 'sti_md_mstaff'
  })
  stiMdMstaff: string

  @Column({
    nullable: true,
		name: 'sti_new_patient'
  })
  stiNewPatient: string

  @Column({
    nullable: true,
		name: 'sti_background_previous_sit_treated'
  })
  stiBackgroundPreviousSitTreated: string

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
		name: 'sti_test_pregnancy_test'
  })
  stiTestPregnancyTest: string

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
		name: 'sti_test_ph'
  })
  stiTestPh: string

  @Column({
    nullable: true,
		name: 'sti_test_urethral_smear'
  })
  stiTestUrethralSmear: string

  @Column({
    nullable: true,
		name: 'sti_test_vaginal_smear'
  })
  stiTestVaginalSmear: string

  @Column({
    nullable: true,
		name: 'sti_test_anal_smear'
  })
  stiTestAnalSmear: string

  @Column({
    nullable: true,
		name: 'sti_test_ulcer_smear'
  })
  stiTestUlcerSmear: string

  @Column({
    nullable: true,
		name: 'sti_test_throat_swab'
  })
  stiTestThroatSwab: string

  @Column({
    nullable: true,
		name: 'sti_test_chlamydia'
  })
  stiTestChlamydia: string

  @Column({
    nullable: true,
		name: 'sti_test_rpr'
  })
  stiTestRpr: string

  @Column({
    nullable: true,
		name: 'sti_test_rpr_dil'
  })
  stiTestRprDil: string

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
		name: 'sti_p_diagnosis_other'
  })
  stiPDiagnosisOther: string

  @Column({
    nullable: true,
		name: 'sti_m_01_lab'
  })
  stiM01Lab: string

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
		name: 'sti_treatment_pregnant'
  })
  stiTreatmentPregnant: string

  @Column({
    nullable: true,
		name: 'sti_treatment_surgical_intervention'
  })
  stiTreatmentSurgicalIntervention: string

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
		name: 'sti_referred'
  })
  stiReferred: string

  @Column({
    nullable: true,
		name: 'sti_sti_condom'
  })
  stiStiCondom: string

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

  @Column({
    nullable: true,
		name: 'key'
  })
  key: string

}
