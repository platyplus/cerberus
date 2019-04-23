// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { GhcCategory } from './GhcCategory'
import { GhcMedication } from './GhcMedication'

@Entity()
export class GeneralHeathCareGhc {
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
  a07PatientTarget: string

  @Column()
  a041DateOfBirth: string

  @Column()
  a05Age: string

  @Column()
  ghcNewPatient: string

  @Column()
  ghcVisitDate: string

  @Column()
  ghcMdMstaff: string

  @Column()
  ghcSymptomsConstitutional: string

  @Column()
  ghcConstitutionalFatigue: string

  @Column()
  ghcConstitutionalFever: string

  @Column()
  ghcConstitutionalNightSweats: string

  @Column()
  ghcConstitutionalAppetitieLoss: string

  @Column()
  ghcConstitutionalWeightLoss: string

  @Column()
  ghcConstitutionalPain: string

  @Column()
  ghcConstitutionalOther: string

  @Column()
  ghcSymptomsRespiratory: string

  @Column()
  ghcRespiratoryNonProdCough: string

  @Column()
  ghcRespiratoryProductiveCough: string

  @Column()
  ghcRespiratoryHemoptysis: string

  @Column()
  ghcRespiratoryDiffBreathing: string

  @Column()
  ghcRespiratoryChestPain: string

  @Column()
  ghcRespiratoryPalpitation: string

  @Column()
  ghcRespiratoryOther: string

  @Column()
  ghcSymptomsGastrointestinal: string

  @Column()
  ghcGastrointestinalAbdPain: string

  @Column()
  ghcGastrointestinalNausea: string

  @Column()
  ghcGastrointestinalVomiting: string

  @Column()
  ghcGastrointestinalDysphagia: string

  @Column()
  ghcGastrointestinalDiarrhea: string

  @Column()
  ghcGastrointestinalOther: string

  @Column()
  ghcSymptomsNeurological: string

  @Column()
  ghcNeuroHeadache: string

  @Column()
  ghcNeuroConfusion: string

  @Column()
  ghcNeuroMemProblem: string

  @Column()
  ghcNeuroTingling: string

  @Column()
  ghcNeuroInsomnia: string

  @Column()
  ghcNeuroYawning: string

  @Column()
  ghcSymptomsSkinManifestation: string

  @Column()
  ghcSkinItchiness: string

  @Column()
  ghcSkinRash: string

  @Column()
  ghcSkinLump: string

  @Column()
  ghcSkinOther: string

  @Column()
  ghcSymptomsAdditionalComments: string

  @Column()
  ghcEye: string

  @Column()
  ghcEyeComment: string

  @Column()
  ghcEarsNose: string

  @Column()
  ghcEarsNoseComment: string

  @Column()
  ghcOral: string

  @Column()
  ghcOralComment: string

  @Column()
  ghcLymphNodes: string

  @Column()
  ghcLymphNodesComment: string

  @Column()
  ghcHeart: string

  @Column()
  ghcHeartComment: string

  @Column()
  ghcLungs: string

  @Column()
  ghcLungsComment: string

  @Column()
  ghcAbdomen: string

  @Column()
  ghcAbdomenComment: string

  @Column()
  ghcNeurological: string

  @Column()
  ghcNeurologicalComment: string

  @Column()
  ghcAdditionalComments: string

  @OneToMany(type => GhcCategory, ghcCategory => ghcCategory.generalHeathCareGhc)
  ghcCategorys: GhcCategory[]

  @Column()
  ghcHBsAg: string

  @Column()
  ghcHBsAb: string

  @Column()
  ghcHcvAb: string

  @Column()
  ghcApri: string

  @Column()
  ghcLiverFibrosis: string

  @Column()
  ghcAllergy: string

  @Column()
  ghcAllergyOther: string

  @OneToMany(type => GhcMedication, ghcMedication => ghcMedication.generalHeathCareGhc)
  ghcMedications: GhcMedication[]

  @Column()
  ghcPatientShouldReturnIn: string

  @Column()
  ghcShouldReturnInOther: string

  @Column()
  ghcDateNextVisit: string

  @Column()
  verify: string

  @Column()
  lastRegistrationDate: string

  @Column()
  key: string

}
