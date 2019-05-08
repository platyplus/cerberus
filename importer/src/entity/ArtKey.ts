// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { Cd4Measurement } from './Cd4Measurement'
import { HaartToxicity } from './HaartToxicity'
import { TreatmentInterruption } from './TreatmentInterruption'
import { ArtKeyAttb } from './ArtKeyAttb'
import { OtherOi } from './OtherOi'
import { ArtKeyResult } from './ArtKeyResult'
import { Apri } from './Apri'

@Entity()
export class ArtKey {
	@Column({
		name: 'site_name',
		type: 'text',
		nullable: true
	})
	siteName: string

	@Column({
		name: 'jail_patient',
		type: 'text',
		nullable: true
	})
	jailPatient: string

	@PrimaryColumn({
		name: 'mdm_code',
		type: 'text'
	})
	mdmCode: string

	@Column({
		name: 'patient_name',
		type: 'text',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		type: 'text',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
		type: 'text',
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
		type: 'text',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'who_stage',
		type: 'text',
		nullable: true
	})
	whoStage: string

	@Column({
		name: 'referral',
		type: 'text',
		nullable: true
	})
	referral: string

	@Column({
		name: 'referral_date',
		type: 'timestamptz',
		nullable: true
	})
	referralDate: Date

	@Column({
		name: 'referral_from',
		type: 'text',
		nullable: true
	})
	referralFrom: string

	@Column({
		name: 'other_mdm_center',
		type: 'text',
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
		type: 'text',
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
		type: 'text',
		nullable: true
	})
	remarks: string

	@Column({
		name: 'baseline_cd',
		type: 'integer',
		nullable: true
	})
	baselineCd: number

	@OneToMany(type => Cd4Measurement, cd4Measurement => cd4Measurement.artKey, {
		cascade: true
	})
	cd4Measurements: Cd4Measurement[]

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
		type: 'text',
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
		type: 'text',
		nullable: true
	})
	previousHaartRegimen: string

	@Column({
		name: 'regimen',
		type: 'text',
		nullable: true
	})
	regimen: string

	@Column({
		name: 'mdm_haart_start_date',
		type: 'timestamptz',
		nullable: true
	})
	mdmHaartStartDate: Date

	@OneToMany(type => HaartToxicity, haartToxicity => haartToxicity.artKey, {
		cascade: true
	})
	haartToxicitys: HaartToxicity[]

	@Column({
		name: 'methadone',
		type: 'text',
		nullable: true
	})
	methadone: string

	@Column({
		name: 'treatment_interuption',
		type: 'boolean',
		nullable: true
	})
	treatmentInteruption: boolean

	@OneToMany(type => TreatmentInterruption, treatmentInterruption => treatmentInterruption.artKey, {
		cascade: true
	})
	treatmentInterruptions: TreatmentInterruption[]

	@OneToMany(type => ArtKeyAttb, artKeyAttb => artKeyAttb.artKey, {
		cascade: true
	})
	artKeyAttbs: ArtKeyAttb[]

	@Column({
		name: 'presenting_initial_o_is',
		type: 'text',
		nullable: true
	})
	presentingInitialOIs: string

	@OneToMany(type => OtherOi, otherOi => otherOi.artKey, {
		cascade: true
	})
	otherOis: OtherOi[]

	@OneToMany(type => ArtKeyResult, artKeyResult => artKeyResult.artKey, {
		cascade: true
	})
	artKeyResults: ArtKeyResult[]

	@Column({
		name: 'ab_anti_hbs',
		type: 'text',
		nullable: true
	})
	abAntiHbs: string

	@Column({
		name: 'hbeag',
		type: 'text',
		nullable: true
	})
	hbeag: string

	@Column({
		name: 'hcv',
		type: 'text',
		nullable: true
	})
	hcv: string

	@Column({
		name: 'ag_hbs',
		type: 'text',
		nullable: true
	})
	agHbs: string

	@Column({
		name: 'vaccinated',
		type: 'text',
		nullable: true
	})
	vaccinated: string

	@OneToMany(type => Apri, apri => apri.artKey, {
		cascade: true
	})
	apris: Apri[]

	@Column({
		name: 'liver_fibrosis',
		type: 'text',
		nullable: true
	})
	liverFibrosis: string

	@Column({
		name: 's_date',
		type: 'text',
		nullable: true
	})
	sDate: string

	@Column({
		name: 'o_date',
		type: 'text',
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
