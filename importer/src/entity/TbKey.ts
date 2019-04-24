// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { TbKeySample } from './TbKeySample'

@Entity()
export class TbKey {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  mdMcode: string

  @Column({
    nullable: true
  })
  a01PatientName: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  a05Age: number

  @Column({
    nullable: true
  })
  a03Sexe: string

  @Column({
    nullable: true
  })
  a07PatientTarget: string

  @Column({
    nullable: true
  })
  hivStatus: string

  @Column({
    nullable: true
  })
  art: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artStartDate: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  cptDate: Date

  @Column({
    nullable: true
  })
  tbTreatment: string

  @Column({
    nullable: true
  })
  ptbeptb: string

  @Column({
    nullable: true
  })
  eptbSite: string

  @Column({
    nullable: true
  })
  eptbSiteOther: string

  @Column({
    nullable: true
  })
  refeffedIn: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  referredInDate: Date

  @Column({
    nullable: true
  })
  type: string

  @Column({
    nullable: true
  })
  regimen: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  ipDate: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  time: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  startCp: Date

  @Column({
    nullable: true
  })
  bacteriologicalConfirmation: string

  @Column({
    nullable: true
  })
  afbInitialSputum: string

  @Column({
    nullable: true
  })
  afbInitialX: string

  @Column({
    nullable: true
  })
  afbInitialCulture: string

  @Column({
    nullable: true
  })
  afb2MthSputum: string

  @Column({
    nullable: true
  })
  afb2MthX: string

  @Column({
    nullable: true
  })
  afb2MthCulture: string

  @Column({
    nullable: true
  })
  afb3MthSputum: string

  @Column({
    nullable: true
  })
  afb3MthX: string

  @Column({
    nullable: true
  })
  afb3MthCulture: string

  @Column({
    nullable: true
  })
  afb5MthSputum: string

  @Column({
    nullable: true
  })
  afb5MthX: string

  @Column({
    nullable: true
  })
  afb5MthCulture: string

  @Column({
    nullable: true
  })
  endOfTreatmentSputum: string

  @Column({
    nullable: true
  })
  endOfTreatmentX: string

  @Column({
    nullable: true
  })
  endOfTreatmentCulture: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  afbInitialPositive: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  afb2MthNegative: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  afb3MthNegative: number

  @OneToMany(type => TbKeySample, tbKeySample => tbKeySample.tbKey, {
    cascade: true
  })
  tbKeySamples: TbKeySample[]

  @Column({
    nullable: true
  })
  otherSample: string

  @Column({
    nullable: true
  })
  othStoolResult: string

  @Column({
    nullable: true
  })
  othUrineResult: string

  @Column({
    nullable: true
  })
  othLymphNodeResult: string

  @Column({
    nullable: true
  })
  othOtherTxt: string

  @Column({
    nullable: true
  })
  othOtherResult: string

  @Column({
    nullable: true
  })
  radiology: string

  @Column({
    nullable: true
  })
  cxRayResult: string

  @Column({
    nullable: true
  })
  xRayResult: string

  @Column({
    nullable: true
  })
  usgResult: string

  @Column({
    nullable: true
  })
  outcome: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  outcomeDate: Date

  @Column({
    nullable: true
  })
  remark: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  tbSavingDate: Date

}
