import { Entity, Column } from 'typeorm'
import { StiMedication } from './StiMedication'

@Entity()
export class Sti {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  mdMcode: string

  @Column()
  a00RegistrationDate: string

  @Column()
  a01PatientName: string

  @Column()
  a02FatherName: string

  @Column()
  a03Sexe: string

  @Column()
  a041DateOfBirth: string

  @Column()
  a05Age: string

  @Column()
  a07PatientTarget: string

  @Column()
  stiVisitDate: string

  @Column()
  stiMdMstaff: string

  @Column()
  stiNewPatient: string

  @Column()
  stiBackgroundPreviousSitTreated: string

  @Column()
  stiSymptoms: string

  @Column()
  stiSymptomsScoreThroat: string

  @Column()
  stiSymptomsVaginalDOpt: string

  @Column()
  stiSymptomsVDischarge: string

  @Column()
  stiSymptomsLowAbdoOpt: string

  @Column()
  stiSymptomsLowAbdoPain: string

  @Column()
  stiSymptomsDysuria: string

  @Column()
  stiSymptomsUlcerOpt: string

  @Column()
  stiSymptomsUlcer: string

  @Column()
  stiSymptomstAnalDischarge: string

  @Column()
  stiSymptomsItchinessDescription: string

  @Column()
  stiSymptomsSwellingOverGenitalOpt: string

  @Column()
  stiSymptomsSwelling: string

  @Column()
  stiSymptomsWarts: string

  @Column()
  stiSymptomsScrotal: string

  @Column()
  stiSymptomsUrethralDischarge: string

  @Column()
  stiSymptomsOther: string

  @Column()
  stiSymptomsComment: string

  @Column()
  stiPhysicalExam: string

  @Column()
  stiPExamOralUlcerOpt: string

  @Column()
  stiPExamPyaryngitis: string

  @Column()
  stiPExamSkinRash: string

  @Column()
  stiPExamTendernessOverLowerAbdomen: string

  @Column()
  stiPExamVulva: string

  @Column()
  stiPExamVaginalD: string

  @Column()
  stiPExamCervicalD: string

  @Column()
  stiPExamAdnexalTenderness: string

  @Column()
  stiPExamCervicalMotionTenderness: string

  @Column()
  stiPExamInguinalBubo: string

  @Column()
  stiPExamGenitalUlcer: string

  @Column()
  stiPExamWarts: string

  @Column()
  stiPExamUrethralDischarge: string

  @Column()
  stiPExamAnalDischarge: string

  @Column()
  stiPExamScrotal: string

  @Column()
  stiPExamOther: string

  @Column()
  stiPExamComment: string

  @Column()
  stiTestPregnancyTest: string

  @Column()
  stiPExamTest: string

  @Column()
  stiTestSniffTest: string

  @Column()
  stiTestPh: string

  @Column()
  stiTestUrethralSmear: string

  @Column()
  stiTestVaginalSmear: string

  @Column()
  stiTestAnalSmear: string

  @Column()
  stiTestUlcerSmear: string

  @Column()
  stiTestThroatSwab: string

  @Column()
  stiTestChlamydia: string

  @Column()
  stiTestRpr: string

  @Column()
  stiTestRprDil: string

  @Column()
  stiTestOtherInvestigation: string

  @Column()
  stiPresumptiveDiagnosis: string

  @Column()
  stiPDiagnosisOther: string

  @Column()
  stiM01Lab: string

  @Column()
  stiTreatmentTreatmentPlan: string

  @Column()
  stiTreatmentAllergy: string

  @Column()
  stiTreatmentAllergyOther: string

  @Column()
  stiTreatmentPregnant: string

  @Column()
  stiTreatmentSurgicalIntervention: string

  @OneToMany(type => StiMedication, stiMedication => stiMedication.sti)
  stiMedications: StiMedication[]

  @Column()
  stiN03OtherTreatment: string

  @Column()
  stiReferred: string

  @Column()
  stiStiCondom: string

  @Column()
  stiPartnerTreatment: string

  @Column()
  stiRemark: string

  @Column()
  stiDateNextVisit: string

  @Column()
  stiPlanForNextVisit: string

  @Column()
  verify: string

  @Column()
  lastRegistrationDate: string

  @Column()
  key: string

}
