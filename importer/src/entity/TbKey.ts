// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { AfbToMth } from './AfbToMth'
import { TbKeySample } from './TbKeySample'

@Entity()
export class TbKey {
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
		name: 'age',
		type: 'integer',
		nullable: true
	})
	age: number

	@Column({
		name: 'sex',
		type: 'text',
		nullable: true
	})
	sex: string

	@Column({
		name: 'patient_target',
		type: 'text',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'hiv_status',
		type: 'text',
		nullable: true
	})
	hivStatus: string

	@Column({
		name: 'art',
		type: 'boolean',
		nullable: true
	})
	art: boolean

	@Column({
		name: 'art_start_date',
		type: 'timestamptz',
		nullable: true
	})
	artStartDate: Date

	@Column({
		name: 'cpt_date',
		type: 'timestamptz',
		nullable: true
	})
	cptDate: Date

	@Column({
		name: 'tb_treatment',
		type: 'text',
		nullable: true
	})
	tbTreatment: string

	@Column({
		name: 'ptb_eptb',
		type: 'text',
		nullable: true
	})
	ptbEptb: string

	@Column({
		name: 'eptb_site',
		type: 'text',
		nullable: true
	})
	eptbSite: string

	@Column({
		name: 'eptb_site_other',
		type: 'text',
		nullable: true
	})
	eptbSiteOther: string

	@Column({
		name: 'refeffed_in',
		type: 'text',
		nullable: true
	})
	refeffedIn: string

	@Column({
		name: 'referred_in_date',
		type: 'timestamptz',
		nullable: true
	})
	referredInDate: Date

	@Column({
		name: 'type',
		type: 'text',
		nullable: true
	})
	type: string

	@Column({
		name: 'regimen',
		type: 'text',
		nullable: true
	})
	regimen: string

	@Column({
		name: 'ip_start_date',
		type: 'timestamptz',
		nullable: true
	})
	ipStartDate: Date

	@Column({
		name: 'time',
		type: 'integer',
		nullable: true
	})
	time: number

	@Column({
		name: 'start_cp',
		type: 'timestamptz',
		nullable: true
	})
	startCp: Date

	@Column({
		name: 'bacteriological_confirmation',
		type: 'text',
		nullable: true
	})
	bacteriologicalConfirmation: string

	@OneToMany(type => AfbToMth, afbToMth => afbToMth.tbKey, {
		cascade: true
	})
	afbToMths: AfbToMth[]

	@Column({
		name: 'end_of_treatment_sputum',
		type: 'text',
		nullable: true
	})
	endOfTreatmentSputum: string

	@Column({
		name: 'end_of_treatment_x',
		type: 'text',
		nullable: true
	})
	endOfTreatmentX: string

	@Column({
		name: 'end_of_treatment_culture',
		type: 'text',
		nullable: true
	})
	endOfTreatmentCulture: string

	@OneToMany(type => TbKeySample, tbKeySample => tbKeySample.tbKey, {
		cascade: true
	})
	tbKeySamples: TbKeySample[]

	@Column({
		name: 'other_sample',
		type: 'text',
		nullable: true
	})
	otherSample: string

	@Column({
		name: 'oth_stool_result',
		type: 'text',
		nullable: true
	})
	othStoolResult: string

	@Column({
		name: 'oth_urine_result',
		type: 'text',
		nullable: true
	})
	othUrineResult: string

	@Column({
		name: 'lymph_node_result',
		type: 'text',
		nullable: true
	})
	lymphNodeResult: string

	@Column({
		name: 'oth_other_txt',
		type: 'text',
		nullable: true
	})
	othOtherTxt: string

	@Column({
		name: 'oth_other_result',
		type: 'text',
		nullable: true
	})
	othOtherResult: string

	@Column({
		name: 'radiology',
		type: 'text',
		nullable: true
	})
	radiology: string

	@Column({
		name: 'x_ray_result',
		type: 'text',
		nullable: true
	})
	xRayResult: string

	@Column({
		name: 'usg_result',
		type: 'text',
		nullable: true
	})
	usgResult: string

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
		name: 'remark',
		type: 'text',
		nullable: true
	})
	remark: string

	@Column({
		name: 'tb_saving_date',
		type: 'timestamptz',
		nullable: true
	})
	tbSavingDate: Date

}
