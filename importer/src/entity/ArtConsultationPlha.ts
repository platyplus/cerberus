// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { ArtTreatment } from './ArtTreatment'
import { ArtGhcDiagnosis } from './ArtGhcDiagnosis'
import { TbSputum } from './TbSputum'
import { ArtArtMedication } from './ArtArtMedication'
import { ArtTbMedication } from './ArtTbMedication'
import { ArtOthMedication } from './ArtOthMedication'

@Entity()
export class ArtConsultationPlha {
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
  artVisitDate: string

  @Column()
  artMdMstaff: string

  @Column()
  artPlhNewPatient: string

  @Column()
  artArtNewPatient: string

  @Column()
  artArtTreatment: string

  @Column()
  artPatientPartnerTested: string

  @Column()
  artPatientPartnerTestStatus: string

  @Column()
  artPatientDisclosedStatus: string

  @Column()
  artStatusDisclosedBy: string

  @Column()
  artStatusDisclosedByOther: string

  @Column()
  artPatientTakingMedicines: string

  @Column()
  artPatientTakingFollowingMedicines: string

  @Column()
  artAntiRetroMedicineTaken1: string

  @Column()
  artAntiRetroMedicineTaken2: string

  @Column()
  artAntiRetroMedicineTaken3: string

  @Column()
  artAntiRetroMedicineTaken4: string

  @Column()
  artAntiRetroMedicineTaken5: string

  @Column()
  artAntiBioMedicineCode1: string

  @Column()
  artAntiBioMedicineCode2: string

  @Column()
  artAntiBioMedicineCode3: string

  @Column()
  artAntiBioMedicineCode4: string

  @Column()
  artAntiBioMedicineCode5: string

  @Column()
  artAntiTbMedicineCode1: string

  @Column()
  artAntiTbMedicineCode2: string

  @Column()
  artAntiTbMedicineCode3: string

  @Column()
  artAntiTbMedicineCode4: string

  @Column()
  artAntiTbMedicineCode5: string

  @Column()
  artPatientTakingOther: string

  @Column()
  artMedicationsComment: string

  @Column()
  artPatientTakenArVsBefore: string

  @OneToMany(type => ArtTreatment, artTreatment => artTreatment.artConsultationPlha)
  artTreatments: ArtTreatment[]

  @Column()
  artArvComment: string

  @Column()
  artMedicalHistoryComment: string

  @Column()
  artTBhistory: string

  @Column()
  artPreviousTBdiagnosis: string

  @Column()
  artYearOfExtrapulmonaryEpisode: string

  @Column()
  artYearOfPulmonaryEpisode: string

  @Column()
  artTBhistoryComments: string

  @Column()
  artTbRelatedSymptomsOpt: string

  @Column()
  artTbRelatedSymptoms: string

  @Column()
  artTbRelatedFever: string

  @Column()
  artTbRelatedNightSweats: string

  @Column()
  artTbRelatedAppetiteLoss: string

  @Column()
  artTbRelatedWeightLoss: string

  @Column()
  artTbRelatedCough: string

  @Column()
  artTbRelatedHaemoptysis: string

  @Column()
  artTbRelatedNotice: string

  @Column()
  artConstitutional: string

  @Column()
  artConstiFatigue: string

  @Column()
  artConstiPain: string

  @Column()
  artConstiOther: string

  @Column()
  artGastrointestinal: string

  @Column()
  artGastroAbdominalPain: string

  @Column()
  artGastroNausea: string

  @Column()
  artGastroVomiting: string

  @Column()
  artGastroDysphagia: string

  @Column()
  artGastroDiarrhea: string

  @Column()
  artGastroOther: string

  @Column()
  artRespiratoryCVs: string

  @Column()
  artRespiDifficultlyBreathing: string

  @Column()
  artRespiChestPain: string

  @Column()
  artRespiPalpitation: string

  @Column()
  artRespiOther: string

  @Column()
  artNeurological: string

  @Column()
  artNeuroHeadache: string

  @Column()
  artNeuroConfusion: string

  @Column()
  artNeuroMemoryProblems: string

  @Column()
  artNeuroTingling: string

  @Column()
  artNeuroInsomnia: string

  @Column()
  artNeuroYawning: string

  @Column()
  artSkinManifestation: string

  @Column()
  artSkinItchiness: string

  @Column()
  artSkinRash: string

  @Column()
  artSkinLump: string

  @Column()
  artSkinOther: string

  @Column()
  artSymptomsComments: string

  @Column()
  artEye: string

  @Column()
  artEyeComment: string

  @Column()
  artEarsNose: string

  @Column()
  artEarsNoseComment: string

  @Column()
  artOral: string

  @Column()
  artOralComment: string

  @Column()
  artLymphNodes: string

  @Column()
  artLymphNodesComment: string

  @Column()
  artHeart: string

  @Column()
  artHeartComment: string

  @Column()
  artLungs: string

  @Column()
  artLungsComment: string

  @Column()
  artAbdomen: string

  @Column()
  artAbdomenComment: string

  @Column()
  artPExamNeurological: string

  @Column()
  artNeurologicalComment: string

  @Column()
  artSkin: string

  @Column()
  artSkinComment: string

  @Column()
  artPhysicalExamComments: string

  @Column()
  artChildOrAdult: string

  @Column()
  artAdultStage: string

  @Column()
  artAdultStage1: string

  @Column()
  artAdultStage2: string

  @Column()
  artAdultStage3: string

  @Column()
  artAdultStage4: string

  @Column()
  artChildStage: string

  @Column()
  artChildStage1: string

  @Column()
  artChildStage2: string

  @Column()
  artChildStage3: string

  @Column()
  artChildStage4: string

  @Column()
  artPatientStatus: string

  @Column()
  artOiDiagnosis: string

  @Column()
  artOiDiagnosisEptb: string

  @Column()
  artOiDiagnosisOther: string

  @OneToMany(type => ArtGhcDiagnosis, artGhcDiagnosis => artGhcDiagnosis.artConsultationPlha)
  artGhcDiagnosiss: ArtGhcDiagnosis[]

  @Column()
  artDiagnosisComments: string

  @Column()
  artFirstCd4: string

  @Column()
  artLastCd4: string

  @Column()
  artViralLoadResult: string

  @Column()
  artHBsAg: string

  @Column()
  artHBsAb: string

  @Column()
  artHcvAb: string

  @Column()
  artApri: string

  @Column()
  artLiverFibrosis: string

  @OneToMany(type => TbSputum, tbSputum => tbSputum.artConsultationPlha)
  tbSputums: TbSputum[]

  @Column()
  tbRadiologyDate: string

  @Column()
  tbRadioRadiology: string

  @Column()
  tbRadioCxRay: string

  @Column()
  tbRadioXRay: string

  @Column()
  tbRadioUsg: string

  @Column()
  tbPersonsScreenedTb: string

  @Column()
  tbScreenedTbYesWhere: string

  @Column()
  tbReferred: string

  @Column()
  tbReferYesWhere: string

  @Column()
  tbTypeOfCase: string

  @Column()
  tbType: string

  @Column()
  artAllergy: string

  @Column()
  artAllergyOther: string

  @Column()
  artPregnant: string

  @Column()
  artProphylaxis: string

  @Column()
  artProphyaxisPrimary: string

  @Column()
  artProphylaxisSecondary: string

  @Column()
  artMdmartStartingDate: string

  @Column()
  artRemainingPill: string

  @OneToMany(type => ArtArtMedication, artArtMedication => artArtMedication.artConsultationPlha)
  artArtMedications: ArtArtMedication[]

  @Column()
  artTbStartingDate: string

  @OneToMany(type => ArtTbMedication, artTbMedication => artTbMedication.artConsultationPlha)
  artTbMedications: ArtTbMedication[]

  @Column()
  tbCategory: string

  @Column()
  tbTreatmentCategory: string

  @Column()
  iptTreatment: string

  @Column()
  iptInitiationDate: string

  @Column()
  iptInitial1stVisitdate: string

  @Column()
  iptOutcome: string

  @Column()
  iptOutcomedate: string

  @Column()
  iptReasonOfNotStarting: string

  @Column()
  iptOther: string

  @OneToMany(type => ArtOthMedication, artOthMedication => artOthMedication.artConsultationPlha)
  artOthMedications: ArtOthMedication[]

  @Column()
  artReferredTo: string

  @Column()
  artPatientShouldReturnIn: string

  @Column()
  artReturnOther: string

  @Column()
  artDateNextVisit: string

  @Column()
  artMotive: string

  @Column()
  artMotiveOther: string

  @Column()
  artPlanNextVisit: string

  @Column()
  verify: string

  @Column()
  lastRegistrationDate: string

  @Column()
  key: string

}
