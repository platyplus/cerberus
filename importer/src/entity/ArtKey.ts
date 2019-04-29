// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { ArtKeyCd4Weight } from './ArtKeyCd4Weight'
import { ArtKeyNewRegimen } from './ArtKeyNewRegimen'
import { ArtKeyHaartToxicity } from './ArtKeyHaartToxicity'
import { ArtKeyStop } from './ArtKeyStop'
import { ArtKeyAttb } from './ArtKeyAttb'
import { OtherOIs } from './OtherOIs'
import { ArtKeyResult } from './ArtKeyResult'
import { Apri } from './Apri'

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
    name: 'mdm_code'
  })
	mdmCode: string

	@Column({
    nullable: true,
		name: 'patient_name'
  })
	patientName: string

	@Column({
    nullable: true,
		name: 'father_name'
  })
	fatherName: string

	@Column({
    nullable: true,
		name: 'sex'
  })
	sex: string

	@Column({
    nullable: true,
		name: 'age',
		type: 'integer'
  })
	age: number

	@Column({
    nullable: true,
		name: 'date_of_birth',
		type: 'timestamptz'
  })
	dateOfBirth: Date

	@Column({
    nullable: true,
		name: 'patient_target'
  })
	patientTarget: string

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
		name: 'baseline_cd',
		type: 'integer'
  })
	baselineCd: number

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
		name: 'last_cd',
		type: 'integer'
  })
	lastCd: number

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
		name: 'maximum_cd',
		type: 'integer'
  })
	maximumCd: number

	@Column({
    nullable: true,
		name: 'maximum_cd_4_date',
		type: 'timestamptz'
  })
	maximumCd4Date: Date

	@Column({
    nullable: true,
		name: 'second_line',
		type: 'boolean'
  })
	secondLine: boolean

	@Column({
    nullable: true,
		name: 'second_line_change_date',
		type: 'timestamptz'
  })
	secondLineChangeDate: Date

	@Column({
    nullable: true,
		name: 'current_haart_regimen'
  })
	currentHaartRegimen: string

	@Column({
    nullable: true,
		name: 'haart_naive',
		type: 'boolean'
  })
	haartNaive: boolean

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
		name: 'regimen'
  })
	regimen: string

	@Column({
    nullable: true,
		name: 'mdm_haart_start_date',
		type: 'timestamptz'
  })
	mdmHaartStartDate: Date

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
		name: 'treatment_interuption',
		type: 'boolean'
  })
	treatmentInteruption: boolean

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

	@OneToMany(type => OtherOIs, otherOIs => otherOIs.artKey, {
    cascade: true
  })
	otherOIss: OtherOIs[]

	@OneToMany(type => ArtKeyResult, artKeyResult => artKeyResult.artKey, {
    cascade: true
  })
	artKeyResults: ArtKeyResult[]

	@Column({
    nullable: true,
		name: 'ab_anti_hbs'
  })
	abAntiHbs: string

	@Column({
    nullable: true,
		name: 'hbeag'
  })
	hbeag: string

	@Column({
    nullable: true,
		name: 'hcv'
  })
	hcv: string

	@Column({
    nullable: true,
		name: 'ag_hbs'
  })
	agHbs: string

	@Column({
    nullable: true,
		name: 'vaccinated'
  })
	vaccinated: string

	@OneToMany(type => Apri, apri => apri.artKey, {
    cascade: true
  })
	apris: Apri[]

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
