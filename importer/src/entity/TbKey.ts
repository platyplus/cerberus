// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { AfbToMth } from './AfbToMth'
import { TbKeySample } from './TbKeySample'

@Entity()
export class TbKey {
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
		name: 'age',
		type: 'integer'
  })
	age: number

	@Column({
    nullable: true,
		name: 'sex'
  })
	sex: string

	@Column({
    nullable: true,
		name: 'patient_target'
  })
	patientTarget: string

	@Column({
    nullable: true,
		name: 'hiv_status'
  })
	hivStatus: string

	@Column({
    nullable: true,
		name: 'art',
		type: 'boolean'
  })
	art: boolean

	@Column({
    nullable: true,
		name: 'art_start_date',
		type: 'timestamptz'
  })
	artStartDate: Date

	@Column({
    nullable: true,
		name: 'cpt_date',
		type: 'timestamptz'
  })
	cptDate: Date

	@Column({
    nullable: true,
		name: 'tb_treatment'
  })
	tbTreatment: string

	@Column({
    nullable: true,
		name: 'ptb_eptb'
  })
	ptbEptb: string

	@Column({
    nullable: true,
		name: 'eptb_site'
  })
	eptbSite: string

	@Column({
    nullable: true,
		name: 'eptb_site_other'
  })
	eptbSiteOther: string

	@Column({
    nullable: true,
		name: 'refeffed_in'
  })
	refeffedIn: string

	@Column({
    nullable: true,
		name: 'referred_in_date',
		type: 'timestamptz'
  })
	referredInDate: Date

	@Column({
    nullable: true,
		name: 'type'
  })
	type: string

	@Column({
    nullable: true,
		name: 'regimen'
  })
	regimen: string

	@Column({
    nullable: true,
		name: 'ip_start_date',
		type: 'timestamptz'
  })
	ipStartDate: Date

	@Column({
    nullable: true,
		name: 'time',
		type: 'integer'
  })
	time: number

	@Column({
    nullable: true,
		name: 'start_cp',
		type: 'timestamptz'
  })
	startCp: Date

	@Column({
    nullable: true,
		name: 'bacteriological_confirmation'
  })
	bacteriologicalConfirmation: string

	@OneToMany(type => AfbToMth, afbToMth => afbToMth.tbKey, {
    cascade: true
  })
	afbToMths: AfbToMth[]

	@Column({
    nullable: true,
		name: 'end_of_treatment_sputum'
  })
	endOfTreatmentSputum: string

	@Column({
    nullable: true,
		name: 'end_of_treatment_x'
  })
	endOfTreatmentX: string

	@Column({
    nullable: true,
		name: 'end_of_treatment_culture'
  })
	endOfTreatmentCulture: string

	@OneToMany(type => TbKeySample, tbKeySample => tbKeySample.tbKey, {
    cascade: true
  })
	tbKeySamples: TbKeySample[]

	@Column({
    nullable: true,
		name: 'other_sample'
  })
	otherSample: string

	@Column({
    nullable: true,
		name: 'oth_stool_result'
  })
	othStoolResult: string

	@Column({
    nullable: true,
		name: 'oth_urine_result'
  })
	othUrineResult: string

	@Column({
    nullable: true,
		name: 'lymph_node_result'
  })
	lymphNodeResult: string

	@Column({
    nullable: true,
		name: 'oth_other_txt'
  })
	othOtherTxt: string

	@Column({
    nullable: true,
		name: 'oth_other_result'
  })
	othOtherResult: string

	@Column({
    nullable: true,
		name: 'radiology'
  })
	radiology: string

	@Column({
    nullable: true,
		name: 'x_ray_result'
  })
	xRayResult: string

	@Column({
    nullable: true,
		name: 'usg_result'
  })
	usgResult: string

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
		name: 'remark'
  })
	remark: string

	@Column({
    nullable: true,
		name: 'tb_saving_date',
		type: 'timestamptz'
  })
	tbSavingDate: Date

}
