// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, Column } from 'typeorm'
import { ArtKeyCd4Weight } from './ArtKeyCd4Weight'
import { ArtKeyNewRegimen } from './ArtKeyNewRegimen'
import { ArtKeyHaartToxicity } from './ArtKeyHaartToxicity'
import { ArtKeyStop } from './ArtKeyStop'
import { ArtKeyAttb } from './ArtKeyAttb'
import { ArtKeyResult } from './ArtKeyResult'
import { ArtKeyApri } from './ArtKeyApri'

@Entity()
export class ArtKey {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  siteName: string

  @Column()
  jailPatient: string

  @Column()
  mdMcode: string

  @Column()
  a01PatientName: string

  @Column()
  a02FatherName: string

  @Column()
  a03Sexe: string

  @Column()
  age: string

  @Column()
  a041DateOfBirth: string

  @Column()
  a07PatientTarget: string

  @Column()
  whoStage: string

  @Column()
  referral: string

  @Column()
  referredInDate: string

  @Column()
  referralFrom: string

  @Column()
  otherMdmCenter: string

  @Column()
  durationOnArt: string

  @Column()
  survivalAt: string

  @Column()
  outcome: string

  @Column()
  outcomeDate: string

  @Column()
  remarks: string

  @Column()
  baselineCd4: string

  @Column()
  weight: string

  @OneToMany(type => ArtKeyCd4Weight, artKeyCd4Weight => artKeyCd4Weight.artKey)
  artKeyCd4Weights: ArtKeyCd4Weight[]

  @Column()
  lastCd4: string

  @Column()
  lastWeight: string

  @Column()
  lastCd4Date: string

  @Column()
  maximumCd4: string

  @Column()
  maximumCd4Date: string

  @Column()
  2ndLine: string

  @Column()
  2ndLineChangeDate: string

  @Column()
  currentHaartRegimen: string

  @Column()
  haarTnaive: string

  @Column()
  outsideClinicHaartStartDate: string

  @Column()
  previousHaartRegimen: string

  @Column()
  previousHaartRegimen1: string

  @Column()
  previousHaartRegimen2: string

  @Column()
  regimen: string

  @Column()
  mdMhaartStartDate: string

  @OneToMany(type => ArtKeyNewRegimen, artKeyNewRegimen => artKeyNewRegimen.artKey)
  artKeyNewRegimens: ArtKeyNewRegimen[]

  @OneToMany(type => ArtKeyHaartToxicity, artKeyHaartToxicity => artKeyHaartToxicity.artKey)
  artKeyHaartToxicitys: ArtKeyHaartToxicity[]

  @Column()
  methadone: string

  @Column()
  treatmentInteruption: string

  @OneToMany(type => ArtKeyStop, artKeyStop => artKeyStop.artKey)
  artKeyStops: ArtKeyStop[]

  @OneToMany(type => ArtKeyAttb, artKeyAttb => artKeyAttb.artKey)
  artKeyAttbs: ArtKeyAttb[]

  @Column()
  presentingInitialOIs: string

  @Column()
  otherOIs1: string

  @Column()
  otherOIs2: string

  @Column()
  otherOIs3: string

  @Column()
  otherOIs4: string

  @Column()
  otherOIs5: string

  @OneToMany(type => ArtKeyResult, artKeyResult => artKeyResult.artKey)
  artKeyResults: ArtKeyResult[]

  @Column()
  abAntiHBs: string

  @Column()
  hBeAg: string

  @Column()
  hcv: string

  @Column()
  agHBs: string

  @Column()
  vaccinated: string

  @OneToMany(type => ArtKeyApri, artKeyApri => artKeyApri.artKey)
  artKeyApris: ArtKeyApri[]

  @Column()
  liverFibrosis: string

  @Column()
  sDate: string

  @Column()
  oDate: string

  @Column()
  artSavingDate: string

}
