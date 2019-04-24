// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
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
  
  @Column({
    nullable: true
  })
  siteName: string

  @Column({
    nullable: true
  })
  jailPatient: string

  @Column({
    nullable: true
  })
  mdMcode: string

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
		type: 'integer'
  })
  age: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a041DateOfBirth: Date

  @Column({
    nullable: true
  })
  a07PatientTarget: string

  @Column({
    nullable: true
  })
  whoStage: string

  @Column({
    nullable: true
  })
  referral: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  referredInDate: Date

  @Column({
    nullable: true
  })
  referralFrom: string

  @Column({
    nullable: true
  })
  otherMdmCenter: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  durationOnArt: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  survivalAt: number

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
  remarks: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  baselineCd4: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  weight: number

  @OneToMany(type => ArtKeyCd4Weight, artKeyCd4Weight => artKeyCd4Weight.artKey, {
    cascade: true
  })
  artKeyCd4Weights: ArtKeyCd4Weight[]

  @Column({
    nullable: true,
		type: 'integer'
  })
  lastCd4: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  lastWeight: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  lastCd4Date: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  maximumCd4: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  maximumCd4Date: Date

  @Column({
    nullable: true
  })
  '2ndLine': string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  '2ndLineChangeDate': Date

  @Column({
    nullable: true
  })
  currentHaartRegimen: string

  @Column({
    nullable: true
  })
  haarTnaive: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  outsideClinicHaartStartDate: Date

  @Column({
    nullable: true
  })
  previousHaartRegimen: string

  @Column({
    nullable: true
  })
  previousHaartRegimen1: string

  @Column({
    nullable: true
  })
  previousHaartRegimen2: string

  @Column({
    nullable: true
  })
  regimen: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  mdMhaartStartDate: Date

  @OneToMany(type => ArtKeyNewRegimen, artKeyNewRegimen => artKeyNewRegimen.artKey, {
    cascade: true
  })
  artKeyNewRegimens: ArtKeyNewRegimen[]

  @OneToMany(type => ArtKeyHaartToxicity, artKeyHaartToxicity => artKeyHaartToxicity.artKey, {
    cascade: true
  })
  artKeyHaartToxicitys: ArtKeyHaartToxicity[]

  @Column({
    nullable: true
  })
  methadone: string

  @Column({
    nullable: true
  })
  treatmentInteruption: string

  @OneToMany(type => ArtKeyStop, artKeyStop => artKeyStop.artKey, {
    cascade: true
  })
  artKeyStops: ArtKeyStop[]

  @OneToMany(type => ArtKeyAttb, artKeyAttb => artKeyAttb.artKey, {
    cascade: true
  })
  artKeyAttbs: ArtKeyAttb[]

  @Column({
    nullable: true
  })
  presentingInitialOIs: string

  @Column({
    nullable: true
  })
  otherOIs1: string

  @Column({
    nullable: true
  })
  otherOIs2: string

  @Column({
    nullable: true
  })
  otherOIs3: string

  @Column({
    nullable: true
  })
  otherOIs4: string

  @Column({
    nullable: true
  })
  otherOIs5: string

  @OneToMany(type => ArtKeyResult, artKeyResult => artKeyResult.artKey, {
    cascade: true
  })
  artKeyResults: ArtKeyResult[]

  @Column({
    nullable: true
  })
  abAntiHBs: string

  @Column({
    nullable: true
  })
  hBeAg: string

  @Column({
    nullable: true
  })
  hcv: string

  @Column({
    nullable: true
  })
  agHBs: string

  @Column({
    nullable: true
  })
  vaccinated: string

  @OneToMany(type => ArtKeyApri, artKeyApri => artKeyApri.artKey, {
    cascade: true
  })
  artKeyApris: ArtKeyApri[]

  @Column({
    nullable: true
  })
  liverFibrosis: string

  @Column({
    nullable: true
  })
  sDate: string

  @Column({
    nullable: true
  })
  oDate: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artSavingDate: Date

}
