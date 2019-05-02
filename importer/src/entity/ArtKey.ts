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
		name: 'site_name',
		nullable: true
	})
	siteName: string

	@Column({
		name: 'jail_patient',
		nullable: true
	})
	jailPatient: string

	@PrimaryColumn({
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		name: 'patient_name',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
		nullable: true
	})
	sex: string

	@Column({
		name: 'age',
		type: 'integer',
		nullable: true
	})
	age: number

	@Column({
		name: 'date_of_birth',
		type: 'timestamptz',
		nullable: true
	})
	dateOfBirth: Date

	@Column({
		name: 'patient_target',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'who_stage',
		nullable: true
	})
	whoStage: string

	@Column({
		name: 'referral',
		nullable: true
	})
	referral: string

	@Column({
		name: 'referred_in_date',
		type: 'timestamptz',
		nullable: true
	})
	referredInDate: Date

	@Column({
		name: 'referral_from',
		nullable: true
	})
	referralFrom: string

	@Column({
		name: 'other_mdm_center',
		nullable: true
	})
	otherMdmCenter: string

	@Column({
		name: 'duration_on_art',
		type: 'integer',
		nullable: true
	})
	durationOnArt: number

	@Column({
		name: 'survival_at',
		type: 'integer',
		nullable: true
	})
	survivalAt: number

	@Column({
		name: 'outcome',
		nullable: true
	})
	outcome: string

	@Column({
		name: 'outcome_date',
		type: 'timestamptz',
		nullable: true
	})
	outcomeDate: Date

	@Column({
		name: 'remarks',
		nullable: true
	})
	remarks: string

	@Column({
		name: 'baseline_cd',
		type: 'integer',
		nullable: true
	})
	baselineCd: number

	@OneToMany(type => ArtKeyCd4Weight, artKeyCd4Weight => artKeyCd4Weight.artKey, {
		cascade: true
	})
	artKeyCd4Weights: ArtKeyCd4Weight[]

	@Column({
		name: 'last_cd',
		type: 'integer',
		nullable: true
	})
	lastCd: number

	@Column({
		name: 'last_weight',
		type: 'integer',
		nullable: true
	})
	lastWeight: number

	@Column({
		name: 'last_cd_4_date',
		type: 'timestamptz',
		nullable: true
	})
	lastCd4Date: Date

	@Column({
		name: 'maximum_cd',
		type: 'integer',
		nullable: true
	})
	maximumCd: number

	@Column({
		name: 'maximum_cd_4_date',
		type: 'timestamptz',
		nullable: true
	})
	maximumCd4Date: Date

	@Column({
		name: 'second_line',
		type: 'boolean',
		nullable: true
	})
	secondLine: boolean

	@Column({
		name: 'second_line_change_date',
		type: 'timestamptz',
		nullable: true
	})
	secondLineChangeDate: Date

	@Column({
		name: 'current_haart_regimen',
		nullable: true
	})
	currentHaartRegimen: string

	@Column({
		name: 'haart_naive',
		type: 'boolean',
		nullable: true
	})
	haartNaive: boolean

	@Column({
		name: 'outside_clinic_haart_start_date',
		type: 'timestamptz',
		nullable: true
	})
	outsideClinicHaartStartDate: Date

	@Column({
		name: 'previous_haart_regimen',
		nullable: true
	})
	previousHaartRegimen: string

	@Column({
		name: 'regimen',
		nullable: true
	})
	regimen: string

	@Column({
		name: 'mdm_haart_start_date',
		type: 'timestamptz',
		nullable: true
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
		name: 'methadone',
		nullable: true
	})
	methadone: string

	@Column({
		name: 'treatment_interuption',
		type: 'boolean',
		nullable: true
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
		name: 'presenting_initial_o_is',
		nullable: true
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
		name: 'ab_anti_hbs',
		nullable: true
	})
	abAntiHbs: string

	@Column({
		name: 'hbeag',
		nullable: true
	})
	hbeag: string

	@Column({
		name: 'hcv',
		nullable: true
	})
	hcv: string

	@Column({
		name: 'ag_hbs',
		nullable: true
	})
	agHbs: string

	@Column({
		name: 'vaccinated',
		nullable: true
	})
	vaccinated: string

	@OneToMany(type => Apri, apri => apri.artKey, {
		cascade: true
	})
	apris: Apri[]

	@Column({
		name: 'liver_fibrosis',
		nullable: true
	})
	liverFibrosis: string

	@Column({
		name: 's_date',
		nullable: true
	})
	sDate: string

	@Column({
		name: 'o_date',
		nullable: true
	})
	oDate: string

	@Column({
		name: 'saving_date',
		type: 'timestamptz',
		nullable: true
	})
	savingDate: Date

}
