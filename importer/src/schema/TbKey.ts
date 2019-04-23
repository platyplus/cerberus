import { Entity, Column } from 'typeorm'
import { TbKeySample } from './TbKeySample'

@Entity()
export class TbKey {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  mdMcode: string

  @Column()
  a01PatientName: string

  @Column()
  a05Age: string

  @Column()
  a03Sexe: string

  @Column()
  a07PatientTarget: string

  @Column()
  hivStatus: string

  @Column()
  art: string

  @Column()
  artStartDate: string

  @Column()
  cptDate: string

  @Column()
  tbTreatment: string

  @Column()
  ptbeptb: string

  @Column()
  eptbSite: string

  @Column()
  eptbSiteOther: string

  @Column()
  refeffedIn: string

  @Column()
  referredInDate: string

  @Column()
  type: string

  @Column()
  regimen: string

  @Column()
  ipDate: string

  @Column()
  time: string

  @Column()
  startCp: string

  @Column()
  bacteriologicalConfirmation: string

  @Column()
  afbInitialSputum: string

  @Column()
  afbInitialX: string

  @Column()
  afbInitialCulture: string

  @Column()
  afb2MthSputum: string

  @Column()
  afb2MthX: string

  @Column()
  afb2MthCulture: string

  @Column()
  afb3MthSputum: string

  @Column()
  afb3MthX: string

  @Column()
  afb3MthCulture: string

  @Column()
  afb5MthSputum: string

  @Column()
  afb5MthX: string

  @Column()
  afb5MthCulture: string

  @Column()
  endOfTreatmentSputum: string

  @Column()
  endOfTreatmentX: string

  @Column()
  endOfTreatmentCulture: string

  @Column()
  afbInitialPositive: string

  @Column()
  afb2MthNegative: string

  @Column()
  afb3MthNegative: string

  @OneToMany(type => TbKeySample, tbKeySample => tbKeySample.tbKey)
  tbKeySamples: TbKeySample[]

  @Column()
  otherSample: string

  @Column()
  othStoolResult: string

  @Column()
  othUrineResult: string

  @Column()
  othLymphNodeResult: string

  @Column()
  othOtherTxt: string

  @Column()
  othOtherResult: string

  @Column()
  radiology: string

  @Column()
  cxRayResult: string

  @Column()
  xRayResult: string

  @Column()
  usgResult: string

  @Column()
  outcome: string

  @Column()
  outcomeDate: string

  @Column()
  remark: string

  @Column()
  tbSavingDate: string

}
