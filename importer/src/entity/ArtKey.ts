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
		type: 'string',
		nullable: true,
		name: 'site_name'
	})
	siteName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'jail_patient'
	})
	jailPatient: string

	@PrimaryColumn({
		type: 'string',
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_name'
	})
	patientName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'father_name'
	})
	fatherName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sex'
	})
	sex: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'age'
	})
	age: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date_of_birth'
	})
	dateOfBirth: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'who_stage'
	})
	whoStage: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'referral'
	})
	referral: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'referred_in_date'
	})
	referredInDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'referral_from'
	})
	referralFrom: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'other_mdm_center'
	})
	otherMdmCenter: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'duration_on_art'
	})
	durationOnArt: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'survival_at'
	})
	survivalAt: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'outcome'
	})
	outcome: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'outcome_date'
	})
	outcomeDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'remarks'
	})
	remarks: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'baseline_cd'
	})
	baselineCd: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'weight'
	})
	weight: number

	@OneToMany(type => ArtKeyCd4Weight, artKeyCd4Weight => artKeyCd4Weight.artKey, {
		cascade: true
	})
	artKeyCd4Weights: ArtKeyCd4Weight[]

	@Column({
		type: 'integer',
		nullable: true,
		name: 'last_cd'
	})
	lastCd: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'last_weight'
	})
	lastWeight: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'last_cd_4_date'
	})
	lastCd4Date: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'maximum_cd'
	})
	maximumCd: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'maximum_cd_4_date'
	})
	maximumCd4Date: Date

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'second_line'
	})
	secondLine: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'second_line_change_date'
	})
	secondLineChangeDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'current_haart_regimen'
	})
	currentHaartRegimen: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'haart_naive'
	})
	haartNaive: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'outside_clinic_haart_start_date'
	})
	outsideClinicHaartStartDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'previous_haart_regimen'
	})
	previousHaartRegimen: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'regimen'
	})
	regimen: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'mdm_haart_start_date'
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
		type: 'string',
		nullable: true,
		name: 'methadone'
	})
	methadone: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'treatment_interuption'
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
		type: 'string',
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
		type: 'string',
		nullable: true,
		name: 'ab_anti_hbs'
	})
	abAntiHbs: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'hbeag'
	})
	hbeag: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'hcv'
	})
	hcv: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ag_hbs'
	})
	agHbs: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'vaccinated'
	})
	vaccinated: string

	@OneToMany(type => Apri, apri => apri.artKey, {
		cascade: true
	})
	apris: Apri[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'liver_fibrosis'
	})
	liverFibrosis: string

	@Column({
		type: 'string',
		nullable: true,
		name: 's_date'
	})
	sDate: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'o_date'
	})
	oDate: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_saving_date'
	})
	artSavingDate: Date

}
