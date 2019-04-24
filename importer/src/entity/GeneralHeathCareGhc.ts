// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { GhcCategory } from './GhcCategory'
import { GhcMedication } from './GhcMedication'

@Entity()
export class GeneralHeathCareGhc {
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
    nullable: true
  })
  a07PatientTarget: string

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
  ghcNewPatient: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  ghcVisitDate: Date

  @Column({
    nullable: true
  })
  ghcMdMstaff: string

  @Column({
    nullable: true
  })
  ghcSymptomsConstitutional: string

  @Column({
    nullable: true
  })
  ghcConstitutionalFatigue: string

  @Column({
    nullable: true
  })
  ghcConstitutionalFever: string

  @Column({
    nullable: true
  })
  ghcConstitutionalNightSweats: string

  @Column({
    nullable: true
  })
  ghcConstitutionalAppetitieLoss: string

  @Column({
    nullable: true
  })
  ghcConstitutionalWeightLoss: string

  @Column({
    nullable: true
  })
  ghcConstitutionalPain: string

  @Column({
    nullable: true
  })
  ghcConstitutionalOther: string

  @Column({
    nullable: true
  })
  ghcSymptomsRespiratory: string

  @Column({
    nullable: true
  })
  ghcRespiratoryNonProdCough: string

  @Column({
    nullable: true
  })
  ghcRespiratoryProductiveCough: string

  @Column({
    nullable: true
  })
  ghcRespiratoryHemoptysis: string

  @Column({
    nullable: true
  })
  ghcRespiratoryDiffBreathing: string

  @Column({
    nullable: true
  })
  ghcRespiratoryChestPain: string

  @Column({
    nullable: true
  })
  ghcRespiratoryPalpitation: string

  @Column({
    nullable: true
  })
  ghcRespiratoryOther: string

  @Column({
    nullable: true
  })
  ghcSymptomsGastrointestinal: string

  @Column({
    nullable: true
  })
  ghcGastrointestinalAbdPain: string

  @Column({
    nullable: true
  })
  ghcGastrointestinalNausea: string

  @Column({
    nullable: true
  })
  ghcGastrointestinalVomiting: string

  @Column({
    nullable: true
  })
  ghcGastrointestinalDysphagia: string

  @Column({
    nullable: true
  })
  ghcGastrointestinalDiarrhea: string

  @Column({
    nullable: true
  })
  ghcGastrointestinalOther: string

  @Column({
    nullable: true
  })
  ghcSymptomsNeurological: string

  @Column({
    nullable: true
  })
  ghcNeuroHeadache: string

  @Column({
    nullable: true
  })
  ghcNeuroConfusion: string

  @Column({
    nullable: true
  })
  ghcNeuroMemProblem: string

  @Column({
    nullable: true
  })
  ghcNeuroTingling: string

  @Column({
    nullable: true
  })
  ghcNeuroInsomnia: string

  @Column({
    nullable: true
  })
  ghcNeuroYawning: string

  @Column({
    nullable: true
  })
  ghcSymptomsSkinManifestation: string

  @Column({
    nullable: true
  })
  ghcSkinItchiness: string

  @Column({
    nullable: true
  })
  ghcSkinRash: string

  @Column({
    nullable: true
  })
  ghcSkinLump: string

  @Column({
    nullable: true
  })
  ghcSkinOther: string

  @Column({
    nullable: true
  })
  ghcSymptomsAdditionalComments: string

  @Column({
    nullable: true
  })
  ghcEye: string

  @Column({
    nullable: true
  })
  ghcEyeComment: string

  @Column({
    nullable: true
  })
  ghcEarsNose: string

  @Column({
    nullable: true
  })
  ghcEarsNoseComment: string

  @Column({
    nullable: true
  })
  ghcOral: string

  @Column({
    nullable: true
  })
  ghcOralComment: string

  @Column({
    nullable: true
  })
  ghcLymphNodes: string

  @Column({
    nullable: true
  })
  ghcLymphNodesComment: string

  @Column({
    nullable: true
  })
  ghcHeart: string

  @Column({
    nullable: true
  })
  ghcHeartComment: string

  @Column({
    nullable: true
  })
  ghcLungs: string

  @Column({
    nullable: true
  })
  ghcLungsComment: string

  @Column({
    nullable: true
  })
  ghcAbdomen: string

  @Column({
    nullable: true
  })
  ghcAbdomenComment: string

  @Column({
    nullable: true
  })
  ghcNeurological: string

  @Column({
    nullable: true
  })
  ghcNeurologicalComment: string

  @Column({
    nullable: true
  })
  ghcAdditionalComments: string

  @OneToMany(type => GhcCategory, ghcCategory => ghcCategory.generalHeathCareGhc, {
    cascade: true
  })
  ghcCategorys: GhcCategory[]

  @Column({
    nullable: true
  })
  ghcHBsAg: string

  @Column({
    nullable: true
  })
  ghcHBsAb: string

  @Column({
    nullable: true
  })
  ghcHcvAb: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  ghcApri: number

  @Column({
    nullable: true
  })
  ghcLiverFibrosis: string

  @Column({
    nullable: true
  })
  ghcAllergy: string

  @Column({
    nullable: true
  })
  ghcAllergyOther: string

  @OneToMany(type => GhcMedication, ghcMedication => ghcMedication.generalHeathCareGhc, {
    cascade: true
  })
  ghcMedications: GhcMedication[]

  @Column({
    nullable: true
  })
  ghcPatientShouldReturnIn: string

  @Column({
    nullable: true
  })
  ghcShouldReturnInOther: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  ghcDateNextVisit: Date

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
