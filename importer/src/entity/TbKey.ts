// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { AfbToMth } from './AfbToMth'
import { TbKeySample } from './TbKeySample'

@Entity()
export class TbKey {
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
		type: 'integer',
		nullable: true,
		name: 'age'
	})
	age: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'sex'
	})
	sex: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'hiv_status'
	})
	hivStatus: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'art'
	})
	art: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_start_date'
	})
	artStartDate: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'cpt_date'
	})
	cptDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb_treatment'
	})
	tbTreatment: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ptb_eptb'
	})
	ptbEptb: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'eptb_site'
	})
	eptbSite: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'eptb_site_other'
	})
	eptbSiteOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'refeffed_in'
	})
	refeffedIn: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'referred_in_date'
	})
	referredInDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'type'
	})
	type: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'regimen'
	})
	regimen: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'ip_start_date'
	})
	ipStartDate: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'time'
	})
	time: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'start_cp'
	})
	startCp: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'bacteriological_confirmation'
	})
	bacteriologicalConfirmation: string

	@OneToMany(type => AfbToMth, afbToMth => afbToMth.tbKey, {
		cascade: true
	})
	afbToMths: AfbToMth[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'end_of_treatment_sputum'
	})
	endOfTreatmentSputum: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'end_of_treatment_x'
	})
	endOfTreatmentX: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'end_of_treatment_culture'
	})
	endOfTreatmentCulture: string

	@OneToMany(type => TbKeySample, tbKeySample => tbKeySample.tbKey, {
		cascade: true
	})
	tbKeySamples: TbKeySample[]

	@Column({
		type: 'string',
		nullable: true,
		name: 'other_sample'
	})
	otherSample: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'oth_stool_result'
	})
	othStoolResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'oth_urine_result'
	})
	othUrineResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'lymph_node_result'
	})
	lymphNodeResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'oth_other_txt'
	})
	othOtherTxt: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'oth_other_result'
	})
	othOtherResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'radiology'
	})
	radiology: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'x_ray_result'
	})
	xRayResult: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'usg_result'
	})
	usgResult: string

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
		name: 'remark'
	})
	remark: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'tb_saving_date'
	})
	tbSavingDate: Date

}
