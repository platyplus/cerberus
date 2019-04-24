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
  artVisitDate: Date

  @Column({
    nullable: true
  })
  artMdMstaff: string

  @Column({
    nullable: true
  })
  artPlhNewPatient: string

  @Column({
    nullable: true
  })
  artArtNewPatient: string

  @Column({
    nullable: true
  })
  artArtTreatment: string

  @Column({
    nullable: true
  })
  artPatientPartnerTested: string

  @Column({
    nullable: true
  })
  artPatientPartnerTestStatus: string

  @Column({
    nullable: true
  })
  artPatientDisclosedStatus: string

  @Column({
    nullable: true
  })
  artStatusDisclosedBy: string

  @Column({
    nullable: true
  })
  artStatusDisclosedByOther: string

  @Column({
    nullable: true
  })
  artPatientTakingMedicines: string

  @Column({
    nullable: true
  })
  artPatientTakingFollowingMedicines: string

  @Column({
    nullable: true
  })
  artAntiRetroMedicineTaken1: string

  @Column({
    nullable: true
  })
  artAntiRetroMedicineTaken2: string

  @Column({
    nullable: true
  })
  artAntiRetroMedicineTaken3: string

  @Column({
    nullable: true
  })
  artAntiRetroMedicineTaken4: string

  @Column({
    nullable: true
  })
  artAntiRetroMedicineTaken5: string

  @Column({
    nullable: true
  })
  artAntiBioMedicineCode1: string

  @Column({
    nullable: true
  })
  artAntiBioMedicineCode2: string

  @Column({
    nullable: true
  })
  artAntiBioMedicineCode3: string

  @Column({
    nullable: true
  })
  artAntiBioMedicineCode4: string

  @Column({
    nullable: true
  })
  artAntiBioMedicineCode5: string

  @Column({
    nullable: true
  })
  artAntiTbMedicineCode1: string

  @Column({
    nullable: true
  })
  artAntiTbMedicineCode2: string

  @Column({
    nullable: true
  })
  artAntiTbMedicineCode3: string

  @Column({
    nullable: true
  })
  artAntiTbMedicineCode4: string

  @Column({
    nullable: true
  })
  artAntiTbMedicineCode5: string

  @Column({
    nullable: true
  })
  artPatientTakingOther: string

  @Column({
    nullable: true
  })
  artMedicationsComment: string

  @Column({
    nullable: true
  })
  artPatientTakenArVsBefore: string

  @OneToMany(type => ArtTreatment, artTreatment => artTreatment.artConsultationPlha, {
    cascade: true
  })
  artTreatments: ArtTreatment[]

  @Column({
    nullable: true
  })
  artArvComment: string

  @Column({
    nullable: true
  })
  artMedicalHistoryComment: string

  @Column({
    nullable: true
  })
  artTBhistory: string

  @Column({
    nullable: true
  })
  artPreviousTBdiagnosis: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  artYearOfExtrapulmonaryEpisode: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  artYearOfPulmonaryEpisode: number

  @Column({
    nullable: true
  })
  artTBhistoryComments: string

  @Column({
    nullable: true
  })
  artTbRelatedSymptomsOpt: string

  @Column({
    nullable: true
  })
  artTbRelatedSymptoms: string

  @Column({
    nullable: true
  })
  artTbRelatedFever: string

  @Column({
    nullable: true
  })
  artTbRelatedNightSweats: string

  @Column({
    nullable: true
  })
  artTbRelatedAppetiteLoss: string

  @Column({
    nullable: true
  })
  artTbRelatedWeightLoss: string

  @Column({
    nullable: true
  })
  artTbRelatedCough: string

  @Column({
    nullable: true
  })
  artTbRelatedHaemoptysis: string

  @Column({
    nullable: true
  })
  artTbRelatedNotice: string

  @Column({
    nullable: true
  })
  artConstitutional: string

  @Column({
    nullable: true
  })
  artConstiFatigue: string

  @Column({
    nullable: true
  })
  artConstiPain: string

  @Column({
    nullable: true
  })
  artConstiOther: string

  @Column({
    nullable: true
  })
  artGastrointestinal: string

  @Column({
    nullable: true
  })
  artGastroAbdominalPain: string

  @Column({
    nullable: true
  })
  artGastroNausea: string

  @Column({
    nullable: true
  })
  artGastroVomiting: string

  @Column({
    nullable: true
  })
  artGastroDysphagia: string

  @Column({
    nullable: true
  })
  artGastroDiarrhea: string

  @Column({
    nullable: true
  })
  artGastroOther: string

  @Column({
    nullable: true
  })
  artRespiratoryCVs: string

  @Column({
    nullable: true
  })
  artRespiDifficultlyBreathing: string

  @Column({
    nullable: true
  })
  artRespiChestPain: string

  @Column({
    nullable: true
  })
  artRespiPalpitation: string

  @Column({
    nullable: true
  })
  artRespiOther: string

  @Column({
    nullable: true
  })
  artNeurological: string

  @Column({
    nullable: true
  })
  artNeuroHeadache: string

  @Column({
    nullable: true
  })
  artNeuroConfusion: string

  @Column({
    nullable: true
  })
  artNeuroMemoryProblems: string

  @Column({
    nullable: true
  })
  artNeuroTingling: string

  @Column({
    nullable: true
  })
  artNeuroInsomnia: string

  @Column({
    nullable: true
  })
  artNeuroYawning: string

  @Column({
    nullable: true
  })
  artSkinManifestation: string

  @Column({
    nullable: true
  })
  artSkinItchiness: string

  @Column({
    nullable: true
  })
  artSkinRash: string

  @Column({
    nullable: true
  })
  artSkinLump: string

  @Column({
    nullable: true
  })
  artSkinOther: string

  @Column({
    nullable: true
  })
  artSymptomsComments: string

  @Column({
    nullable: true
  })
  artEye: string

  @Column({
    nullable: true
  })
  artEyeComment: string

  @Column({
    nullable: true
  })
  artEarsNose: string

  @Column({
    nullable: true
  })
  artEarsNoseComment: string

  @Column({
    nullable: true
  })
  artOral: string

  @Column({
    nullable: true
  })
  artOralComment: string

  @Column({
    nullable: true
  })
  artLymphNodes: string

  @Column({
    nullable: true
  })
  artLymphNodesComment: string

  @Column({
    nullable: true
  })
  artHeart: string

  @Column({
    nullable: true
  })
  artHeartComment: string

  @Column({
    nullable: true
  })
  artLungs: string

  @Column({
    nullable: true
  })
  artLungsComment: string

  @Column({
    nullable: true
  })
  artAbdomen: string

  @Column({
    nullable: true
  })
  artAbdomenComment: string

  @Column({
    nullable: true
  })
  artPExamNeurological: string

  @Column({
    nullable: true
  })
  artNeurologicalComment: string

  @Column({
    nullable: true
  })
  artSkin: string

  @Column({
    nullable: true
  })
  artSkinComment: string

  @Column({
    nullable: true
  })
  artPhysicalExamComments: string

  @Column({
    nullable: true
  })
  artChildOrAdult: string

  @Column({
    nullable: true
  })
  artAdultStage: string

  @Column({
    nullable: true
  })
  artAdultStage1: string

  @Column({
    nullable: true
  })
  artAdultStage2: string

  @Column({
    nullable: true
  })
  artAdultStage3: string

  @Column({
    nullable: true
  })
  artAdultStage4: string

  @Column({
    nullable: true
  })
  artChildStage: string

  @Column({
    nullable: true
  })
  artChildStage1: string

  @Column({
    nullable: true
  })
  artChildStage2: string

  @Column({
    nullable: true
  })
  artChildStage3: string

  @Column({
    nullable: true
  })
  artChildStage4: string

  @Column({
    nullable: true
  })
  artPatientStatus: string

  @Column({
    nullable: true
  })
  artOiDiagnosis: string

  @Column({
    nullable: true
  })
  artOiDiagnosisEptb: string

  @Column({
    nullable: true
  })
  artOiDiagnosisOther: string

  @OneToMany(type => ArtGhcDiagnosis, artGhcDiagnosis => artGhcDiagnosis.artConsultationPlha, {
    cascade: true
  })
  artGhcDiagnosiss: ArtGhcDiagnosis[]

  @Column({
    nullable: true
  })
  artDiagnosisComments: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  artFirstCd4: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  artLastCd4: number

  @Column({
    nullable: true
  })
  artViralLoadResult: string

  @Column({
    nullable: true
  })
  artHBsAg: string

  @Column({
    nullable: true
  })
  artHBsAb: string

  @Column({
    nullable: true
  })
  artHcvAb: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  artApri: number

  @Column({
    nullable: true
  })
  artLiverFibrosis: string

  @OneToMany(type => TbSputum, tbSputum => tbSputum.artConsultationPlha, {
    cascade: true
  })
  tbSputums: TbSputum[]

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  tbRadiologyDate: Date

  @Column({
    nullable: true
  })
  tbRadioRadiology: string

  @Column({
    nullable: true
  })
  tbRadioCxRay: string

  @Column({
    nullable: true
  })
  tbRadioXRay: string

  @Column({
    nullable: true
  })
  tbRadioUsg: string

  @Column({
    nullable: true
  })
  tbPersonsScreenedTb: string

  @Column({
    nullable: true
  })
  tbScreenedTbYesWhere: string

  @Column({
    nullable: true
  })
  tbReferred: string

  @Column({
    nullable: true
  })
  tbReferYesWhere: string

  @Column({
    nullable: true
  })
  tbTypeOfCase: string

  @Column({
    nullable: true
  })
  tbType: string

  @Column({
    nullable: true
  })
  artAllergy: string

  @Column({
    nullable: true
  })
  artAllergyOther: string

  @Column({
    nullable: true
  })
  artPregnant: string

  @Column({
    nullable: true
  })
  artProphylaxis: string

  @Column({
    nullable: true
  })
  artProphyaxisPrimary: string

  @Column({
    nullable: true
  })
  artProphylaxisSecondary: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artMdmartStartingDate: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  artRemainingPill: number

  @OneToMany(type => ArtArtMedication, artArtMedication => artArtMedication.artConsultationPlha, {
    cascade: true
  })
  artArtMedications: ArtArtMedication[]

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artTbStartingDate: Date

  @OneToMany(type => ArtTbMedication, artTbMedication => artTbMedication.artConsultationPlha, {
    cascade: true
  })
  artTbMedications: ArtTbMedication[]

  @Column({
    nullable: true
  })
  tbCategory: string

  @Column({
    nullable: true
  })
  tbTreatmentCategory: string

  @Column({
    nullable: true
  })
  iptTreatment: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  iptInitiationDate: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  iptInitial1stVisitdate: Date

  @Column({
    nullable: true
  })
  iptOutcome: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  iptOutcomedate: Date

  @Column({
    nullable: true
  })
  iptReasonOfNotStarting: string

  @Column({
    nullable: true
  })
  iptOther: string

  @OneToMany(type => ArtOthMedication, artOthMedication => artOthMedication.artConsultationPlha, {
    cascade: true
  })
  artOthMedications: ArtOthMedication[]

  @Column({
    nullable: true
  })
  artReferredTo: string

  @Column({
    nullable: true
  })
  artPatientShouldReturnIn: string

  @Column({
    nullable: true
  })
  artReturnOther: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artDateNextVisit: Date

  @Column({
    nullable: true
  })
  artMotive: string

  @Column({
    nullable: true
  })
  artMotiveOther: string

  @Column({
    nullable: true
  })
  artPlanNextVisit: string

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
