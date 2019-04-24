// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { StiMedication } from './StiMedication'

@Entity()
export class Sti {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  mdMcode: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a00RegistrationDate: Date

  @Column({
    nullable: true
  })
  a01PatientName: string

  @Column({
    nullable: true
  })
  a02FatherName: string

  @Column({
    nullable: true
  })
  a03Sexe: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a041DateOfBirth: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  a05Age: number

  @Column({
    nullable: true
  })
  a07PatientTarget: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  stiVisitDate: Date

  @Column({
    nullable: true
  })
  stiMdMstaff: string

  @Column({
    nullable: true
  })
  stiNewPatient: string

  @Column({
    nullable: true
  })
  stiBackgroundPreviousSitTreated: string

  @Column({
    nullable: true
  })
  stiSymptoms: string

  @Column({
    nullable: true
  })
  stiSymptomsScoreThroat: string

  @Column({
    nullable: true
  })
  stiSymptomsVaginalDOpt: string

  @Column({
    nullable: true
  })
  stiSymptomsVDischarge: string

  @Column({
    nullable: true
  })
  stiSymptomsLowAbdoOpt: string

  @Column({
    nullable: true
  })
  stiSymptomsLowAbdoPain: string

  @Column({
    nullable: true
  })
  stiSymptomsDysuria: string

  @Column({
    nullable: true
  })
  stiSymptomsUlcerOpt: string

  @Column({
    nullable: true
  })
  stiSymptomsUlcer: string

  @Column({
    nullable: true
  })
  stiSymptomstAnalDischarge: string

  @Column({
    nullable: true
  })
  stiSymptomsItchinessDescription: string

  @Column({
    nullable: true
  })
  stiSymptomsSwellingOverGenitalOpt: string

  @Column({
    nullable: true
  })
  stiSymptomsSwelling: string

  @Column({
    nullable: true
  })
  stiSymptomsWarts: string

  @Column({
    nullable: true
  })
  stiSymptomsScrotal: string

  @Column({
    nullable: true
  })
  stiSymptomsUrethralDischarge: string

  @Column({
    nullable: true
  })
  stiSymptomsOther: string

  @Column({
    nullable: true
  })
  stiSymptomsComment: string

  @Column({
    nullable: true
  })
  stiPhysicalExam: string

  @Column({
    nullable: true
  })
  stiPExamOralUlcerOpt: string

  @Column({
    nullable: true
  })
  stiPExamPyaryngitis: string

  @Column({
    nullable: true
  })
  stiPExamSkinRash: string

  @Column({
    nullable: true
  })
  stiPExamTendernessOverLowerAbdomen: string

  @Column({
    nullable: true
  })
  stiPExamVulva: string

  @Column({
    nullable: true
  })
  stiPExamVaginalD: string

  @Column({
    nullable: true
  })
  stiPExamCervicalD: string

  @Column({
    nullable: true
  })
  stiPExamAdnexalTenderness: string

  @Column({
    nullable: true
  })
  stiPExamCervicalMotionTenderness: string

  @Column({
    nullable: true
  })
  stiPExamInguinalBubo: string

  @Column({
    nullable: true
  })
  stiPExamGenitalUlcer: string

  @Column({
    nullable: true
  })
  stiPExamWarts: string

  @Column({
    nullable: true
  })
  stiPExamUrethralDischarge: string

  @Column({
    nullable: true
  })
  stiPExamAnalDischarge: string

  @Column({
    nullable: true
  })
  stiPExamScrotal: string

  @Column({
    nullable: true
  })
  stiPExamOther: string

  @Column({
    nullable: true
  })
  stiPExamComment: string

  @Column({
    nullable: true
  })
  stiTestPregnancyTest: string

  @Column({
    nullable: true
  })
  stiPExamTest: string

  @Column({
    nullable: true
  })
  stiTestSniffTest: string

  @Column({
    nullable: true
  })
  stiTestPh: string

  @Column({
    nullable: true
  })
  stiTestUrethralSmear: string

  @Column({
    nullable: true
  })
  stiTestVaginalSmear: string

  @Column({
    nullable: true
  })
  stiTestAnalSmear: string

  @Column({
    nullable: true
  })
  stiTestUlcerSmear: string

  @Column({
    nullable: true
  })
  stiTestThroatSwab: string

  @Column({
    nullable: true
  })
  stiTestChlamydia: string

  @Column({
    nullable: true
  })
  stiTestRpr: string

  @Column({
    nullable: true
  })
  stiTestRprDil: string

  @Column({
    nullable: true
  })
  stiTestOtherInvestigation: string

  @Column({
    nullable: true
  })
  stiPresumptiveDiagnosis: string

  @Column({
    nullable: true
  })
  stiPDiagnosisOther: string

  @Column({
    nullable: true
  })
  stiM01Lab: string

  @Column({
    nullable: true
  })
  stiTreatmentTreatmentPlan: string

  @Column({
    nullable: true
  })
  stiTreatmentAllergy: string

  @Column({
    nullable: true
  })
  stiTreatmentAllergyOther: string

  @Column({
    nullable: true
  })
  stiTreatmentPregnant: string

  @Column({
    nullable: true
  })
  stiTreatmentSurgicalIntervention: string

  @OneToMany(type => StiMedication, stiMedication => stiMedication.sti, {
    cascade: true
  })
  stiMedications: StiMedication[]

  @Column({
    nullable: true
  })
  stiN03OtherTreatment: string

  @Column({
    nullable: true
  })
  stiReferred: string

  @Column({
    nullable: true
  })
  stiStiCondom: string

  @Column({
    nullable: true
  })
  stiPartnerTreatment: string

  @Column({
    nullable: true
  })
  stiRemark: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  stiDateNextVisit: Date

  @Column({
    nullable: true
  })
  stiPlanForNextVisit: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  verify: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  lastRegistrationDate: Date

  @Column({
    nullable: true
  })
  key: string

}
