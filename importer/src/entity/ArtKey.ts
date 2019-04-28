// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { ArtKeyCd4Weight } from './ArtKeyCd4Weight'
import { ArtKeyNewRegimen } from './ArtKeyNewRegimen'
import { ArtKeyHaartToxicity } from './ArtKeyHaartToxicity'
import { ArtKeyStop } from './ArtKeyStop'
import { ArtKeyAttb } from './ArtKeyAttb'
import { ArtKeyResult } from './ArtKeyResult'
import { ArtKeyApri } from './ArtKeyApri'

@Entity()
export class ArtKey {
	@Column({
    nullable: true,
		name: 'site_name'
  })
	siteName: string

	@Column({
    nullable: true,
		name: 'jail_patient'
  })
	jailPatient: string

	@PrimaryColumn({
    name: 'md_mcode'
  })
	mdMcode: string

	@Column({
    nullable: true,
		name: 'a_01_patient_name'
  })
	a01PatientName: string

	@Column({
    nullable: true,
		name: 'a_02_father_name'
  })
	a02FatherName: string

	@Column({
    nullable: true,
		name: 'a_03_sexe'
  })
	a03Sexe: string

	@Column({
    nullable: true,
		name: 'age',
		type: 'integer'
  })
	age: number

	@Column({
    nullable: true,
		name: 'a_041_date_of_birth',
		type: 'timestamptz'
  })
	a041DateOfBirth: Date

	@Column({
    nullable: true,
		name: 'a_07_patient_target'
  })
	a07PatientTarget: string

	@Column({
    nullable: true,
		name: 'who_stage'
  })
	whoStage: string

	@Column({
    nullable: true,
		name: 'referral'
  })
	referral: string

	@Column({
    nullable: true,
		name: 'referred_in_date',
		type: 'timestamptz'
  })
	referredInDate: Date

	@Column({
    nullable: true,
		name: 'referral_from'
  })
	referralFrom: string

	@Column({
    nullable: true,
		name: 'other_mdm_center'
  })
	otherMdmCenter: string

	@Column({
    nullable: true,
		name: 'duration_on_art',
		type: 'integer'
  })
	durationOnArt: number

	@Column({
    nullable: true,
		name: 'survival_at',
		type: 'integer'
  })
	survivalAt: number

	@Column({
    nullable: true,
		name: 'outcome'
  })
	outcome: string

	@Column({
    nullable: true,
		name: 'outcome_date',
		type: 'timestamptz'
  })
	outcomeDate: Date

	@Column({
    nullable: true,
		name: 'remarks'
  })
	remarks: string

	@Column({
    nullable: true,
		name: 'baseline_cd_4',
		type: 'integer'
  })
	baselineCd4: number

	@Column({
    nullable: true,
		name: 'weight',
		type: 'integer'
  })
	weight: number

	@OneToMany(type => ArtKeyCd4Weight, artKeyCd4Weight => artKeyCd4Weight.artKey, {
    cascade: true
  })
	artKeyCd4Weights: ArtKeyCd4Weight[]

	@Column({
    nullable: true,
		name: 'last_cd_4',
		type: 'integer'
  })
	lastCd4: number

	@Column({
    nullable: true,
		name: 'last_weight',
		type: 'integer'
  })
	lastWeight: number

	@Column({
    nullable: true,
		name: 'last_cd_4_date',
		type: 'timestamptz'
  })
	lastCd4Date: Date

	@Column({
    nullable: true,
		name: 'maximum_cd_4',
		type: 'integer'
  })
	maximumCd4: number

	@Column({
    nullable: true,
		name: 'maximum_cd_4_date',
		type: 'timestamptz'
  })
	maximumCd4Date: Date

	@Column({
    nullable: true,
		name: '2nd_line'
  })
	'2ndLine': string

	@Column({
    nullable: true,
		name: '2nd_line_change_date',
		type: 'timestamptz'
  })
	'2ndLineChangeDate': Date

	@Column({
    nullable: true,
		name: 'current_haart_regimen'
  })
	currentHaartRegimen: string

	@Column({
    nullable: true,
		name: 'haar_tnaive'
  })
	haarTnaive: string

	@Column({
    nullable: true,
		name: 'outside_clinic_haart_start_date',
		type: 'timestamptz'
  })
	outsideClinicHaartStartDate: Date

	@Column({
    nullable: true,
		name: 'previous_haart_regimen'
  })
	previousHaartRegimen: string

	@Column({
    nullable: true,
		name: 'previous_haart_regimen_1'
  })
	previousHaartRegimen1: string

	@Column({
    nullable: true,
		name: 'previous_haart_regimen_2'
  })
	previousHaartRegimen2: string

	@Column({
    nullable: true,
		name: 'regimen'
  })
	regimen: string

	@Column({
    nullable: true,
		name: 'md_mhaart_start_date',
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
    nullable: true,
		name: 'methadone'
  })
	methadone: string

	@Column({
    nullable: true,
		name: 'treatment_interuption'
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
    nullable: true,
		name: 'presenting_initial_o_is'
  })
	presentingInitialOIs: string

	@Column({
    nullable: true,
		name: 'other_o_is_1'
  })
	otherOIs1: string

	@Column({
    nullable: true,
		name: 'other_o_is_2'
  })
	otherOIs2: string

	@Column({
    nullable: true,
		name: 'other_o_is_3'
  })
	otherOIs3: string

	@Column({
    nullable: true,
		name: 'other_o_is_4'
  })
	otherOIs4: string

	@Column({
    nullable: true,
		name: 'other_o_is_5'
  })
	otherOIs5: string

	@OneToMany(type => ArtKeyResult, artKeyResult => artKeyResult.artKey, {
    cascade: true
  })
	artKeyResults: ArtKeyResult[]

	@Column({
    nullable: true,
		name: 'ab_anti_h_bs'
  })
	abAntiHBs: string

	@Column({
    nullable: true,
		name: 'h_be_ag'
  })
	hBeAg: string

	@Column({
    nullable: true,
		name: 'hcv'
  })
	hcv: string

	@Column({
    nullable: true,
		name: 'ag_h_bs'
  })
	agHBs: string

	@Column({
    nullable: true,
		name: 'vaccinated'
  })
	vaccinated: string

	@OneToMany(type => ArtKeyApri, artKeyApri => artKeyApri.artKey, {
    cascade: true
  })
	artKeyApris: ArtKeyApri[]

	@Column({
    nullable: true,
		name: 'liver_fibrosis'
  })
	liverFibrosis: string

	@Column({
    nullable: true,
		name: 's_date'
  })
	sDate: string

	@Column({
    nullable: true,
		name: 'o_date'
  })
	oDate: string

	@Column({
    nullable: true,
		name: 'art_saving_date',
		type: 'timestamptz'
  })
	artSavingDate: Date

}
