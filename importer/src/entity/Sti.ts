// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { StiMedication } from './StiMedication'

@Entity()
export class Sti {
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
		name: 'sti_visit_date',
		type: 'timestamptz',
		nullable: true
	})
	stiVisitDate: Date

	@Column({
		name: 'mdm_staff',
		nullable: true
	})
	mdmStaff: string

	@Column({
		name: 'sti_new_patient',
		type: 'boolean',
		nullable: true
	})
	stiNewPatient: boolean

	@Column({
		name: 'sti_background_previous_sit_treated',
		type: 'boolean',
		nullable: true
	})
	stiBackgroundPreviousSitTreated: boolean

	@Column({
		name: 'sti_symptoms',
		nullable: true
	})
	stiSymptoms: string

	@Column({
		name: 'sti_symptoms_score_throat',
		nullable: true
	})
	stiSymptomsScoreThroat: string

	@Column({
		name: 'sti_symptoms_vaginal_d_opt',
		nullable: true
	})
	stiSymptomsVaginalDOpt: string

	@Column({
		name: 'sti_symptoms_v_discharge',
		nullable: true
	})
	stiSymptomsVDischarge: string

	@Column({
		name: 'sti_symptoms_low_abdo_opt',
		nullable: true
	})
	stiSymptomsLowAbdoOpt: string

	@Column({
		name: 'sti_symptoms_low_abdo_pain',
		nullable: true
	})
	stiSymptomsLowAbdoPain: string

	@Column({
		name: 'sti_symptoms_dysuria',
		nullable: true
	})
	stiSymptomsDysuria: string

	@Column({
		name: 'sti_symptoms_ulcer_opt',
		nullable: true
	})
	stiSymptomsUlcerOpt: string

	@Column({
		name: 'sti_symptoms_ulcer',
		nullable: true
	})
	stiSymptomsUlcer: string

	@Column({
		name: 'sti_symptomst_anal_discharge',
		nullable: true
	})
	stiSymptomstAnalDischarge: string

	@Column({
		name: 'sti_symptoms_itchiness_description',
		nullable: true
	})
	stiSymptomsItchinessDescription: string

	@Column({
		name: 'sti_symptoms_swelling_over_genital_opt',
		nullable: true
	})
	stiSymptomsSwellingOverGenitalOpt: string

	@Column({
		name: 'sti_symptoms_swelling',
		nullable: true
	})
	stiSymptomsSwelling: string

	@Column({
		name: 'sti_symptoms_warts',
		nullable: true
	})
	stiSymptomsWarts: string

	@Column({
		name: 'sti_symptoms_scrotal',
		nullable: true
	})
	stiSymptomsScrotal: string

	@Column({
		name: 'sti_symptoms_urethral_discharge',
		nullable: true
	})
	stiSymptomsUrethralDischarge: string

	@Column({
		name: 'sti_symptoms_other',
		nullable: true
	})
	stiSymptomsOther: string

	@Column({
		name: 'sti_symptoms_comment',
		nullable: true
	})
	stiSymptomsComment: string

	@Column({
		name: 'sti_physical_exam',
		nullable: true
	})
	stiPhysicalExam: string

	@Column({
		name: 'sti_p_exam_oral_ulcer_opt',
		nullable: true
	})
	stiPExamOralUlcerOpt: string

	@Column({
		name: 'sti_p_exam_pyaryngitis',
		nullable: true
	})
	stiPExamPyaryngitis: string

	@Column({
		name: 'sti_p_exam_skin_rash',
		nullable: true
	})
	stiPExamSkinRash: string

	@Column({
		name: 'sti_p_exam_tenderness_over_lower_abdomen',
		nullable: true
	})
	stiPExamTendernessOverLowerAbdomen: string

	@Column({
		name: 'sti_p_exam_vulva',
		nullable: true
	})
	stiPExamVulva: string

	@Column({
		name: 'sti_p_exam_vaginal_d',
		nullable: true
	})
	stiPExamVaginalD: string

	@Column({
		name: 'sti_p_exam_cervical_d',
		nullable: true
	})
	stiPExamCervicalD: string

	@Column({
		name: 'sti_p_exam_adnexal_tenderness',
		nullable: true
	})
	stiPExamAdnexalTenderness: string

	@Column({
		name: 'sti_p_exam_cervical_motion_tenderness',
		nullable: true
	})
	stiPExamCervicalMotionTenderness: string

	@Column({
		name: 'sti_p_exam_inguinal_bubo',
		nullable: true
	})
	stiPExamInguinalBubo: string

	@Column({
		name: 'sti_p_exam_genital_ulcer',
		nullable: true
	})
	stiPExamGenitalUlcer: string

	@Column({
		name: 'sti_p_exam_warts',
		nullable: true
	})
	stiPExamWarts: string

	@Column({
		name: 'sti_p_exam_urethral_discharge',
		nullable: true
	})
	stiPExamUrethralDischarge: string

	@Column({
		name: 'sti_p_exam_anal_discharge',
		nullable: true
	})
	stiPExamAnalDischarge: string

	@Column({
		name: 'sti_p_exam_scrotal',
		nullable: true
	})
	stiPExamScrotal: string

	@Column({
		name: 'sti_p_exam_other',
		nullable: true
	})
	stiPExamOther: string

	@Column({
		name: 'sti_p_exam_comment',
		nullable: true
	})
	stiPExamComment: string

	@Column({
		name: 'sti_test_pregnancy_test',
		type: 'boolean',
		nullable: true
	})
	stiTestPregnancyTest: boolean

	@Column({
		name: 'sti_p_exam_test',
		nullable: true
	})
	stiPExamTest: string

	@Column({
		name: 'sti_test_sniff_test',
		nullable: true
	})
	stiTestSniffTest: string

	@Column({
		name: 'test_ph',
		nullable: true
	})
	testPh: string

	@Column({
		name: 'sti_test_urethral_smear',
		type: 'boolean',
		nullable: true
	})
	stiTestUrethralSmear: boolean

	@Column({
		name: 'sti_test_vaginal_smear',
		type: 'boolean',
		nullable: true
	})
	stiTestVaginalSmear: boolean

	@Column({
		name: 'sti_test_anal_smear',
		type: 'boolean',
		nullable: true
	})
	stiTestAnalSmear: boolean

	@Column({
		name: 'sti_test_ulcer_smear',
		type: 'boolean',
		nullable: true
	})
	stiTestUlcerSmear: boolean

	@Column({
		name: 'sti_test_throat_swab',
		type: 'boolean',
		nullable: true
	})
	stiTestThroatSwab: boolean

	@Column({
		name: 'sti_test_chlamydia',
		nullable: true
	})
	stiTestChlamydia: string

	@Column({
		name: 'rpr',
		nullable: true
	})
	rpr: string

	@Column({
		name: 'rpr_dil',
		nullable: true
	})
	rprDil: string

	@Column({
		name: 'sti_test_other_investigation',
		nullable: true
	})
	stiTestOtherInvestigation: string

	@Column({
		name: 'sti_presumptive_diagnosis',
		nullable: true
	})
	stiPresumptiveDiagnosis: string

	@Column({
		name: 'partner_diagnosis_other',
		nullable: true
	})
	partnerDiagnosisOther: string

	@Column({
		name: 'lab_type',
		nullable: true
	})
	labType: string

	@Column({
		name: 'sti_treatment_treatment_plan',
		nullable: true
	})
	stiTreatmentTreatmentPlan: string

	@Column({
		name: 'sti_treatment_allergy',
		nullable: true
	})
	stiTreatmentAllergy: string

	@Column({
		name: 'sti_treatment_allergy_other',
		nullable: true
	})
	stiTreatmentAllergyOther: string

	@Column({
		name: 'sti_treatment_pregnant',
		type: 'boolean',
		nullable: true
	})
	stiTreatmentPregnant: boolean

	@Column({
		name: 'sti_treatment_surgical_intervention',
		type: 'boolean',
		nullable: true
	})
	stiTreatmentSurgicalIntervention: boolean

	@OneToMany(type => StiMedication, stiMedication => stiMedication.sti, {
		cascade: true
	})
	stiMedications: StiMedication[]

	@Column({
		name: 'sti_n_03_other_treatment',
		nullable: true
	})
	stiN03OtherTreatment: string

	@Column({
		name: 'sti_referred',
		type: 'boolean',
		nullable: true
	})
	stiReferred: boolean

	@Column({
		name: 'sti_sti_condom',
		type: 'boolean',
		nullable: true
	})
	stiStiCondom: boolean

	@Column({
		name: 'sti_partner_treatment',
		nullable: true
	})
	stiPartnerTreatment: string

	@Column({
		name: 'sti_remark',
		nullable: true
	})
	stiRemark: string

	@Column({
		name: 'sti_date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	stiDateNextVisit: Date

	@Column({
		name: 'sti_plan_for_next_visit',
		nullable: true
	})
	stiPlanForNextVisit: string

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
