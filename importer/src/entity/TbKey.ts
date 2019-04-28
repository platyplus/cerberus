// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { TbKeySample } from './TbKeySample'

@Entity()
export class TbKey {
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
		name: 'a_05_age',
		type: 'integer'
  })
	a05Age: number

	@Column({
    nullable: true,
		name: 'a_03_sexe'
  })
	a03Sexe: string

	@Column({
    nullable: true,
		name: 'a_07_patient_target'
  })
	a07PatientTarget: string

	@Column({
    nullable: true,
		name: 'hiv_status'
  })
	hivStatus: string

	@Column({
    nullable: true,
		name: 'art'
  })
	art: string

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
		name: 'ptbeptb'
  })
	ptbeptb: string

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
		name: 'ip_date',
		type: 'timestamptz'
  })
	ipDate: Date

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

	@Column({
    nullable: true,
		name: 'afb_initial_sputum'
  })
	afbInitialSputum: string

	@Column({
    nullable: true,
		name: 'afb_initial_x'
  })
	afbInitialX: string

	@Column({
    nullable: true,
		name: 'afb_initial_culture'
  })
	afbInitialCulture: string

	@Column({
    nullable: true,
		name: 'afb_2_mth_sputum'
  })
	afb2MthSputum: string

	@Column({
    nullable: true,
		name: 'afb_2_mth_x'
  })
	afb2MthX: string

	@Column({
    nullable: true,
		name: 'afb_2_mth_culture'
  })
	afb2MthCulture: string

	@Column({
    nullable: true,
		name: 'afb_3_mth_sputum'
  })
	afb3MthSputum: string

	@Column({
    nullable: true,
		name: 'afb_3_mth_x'
  })
	afb3MthX: string

	@Column({
    nullable: true,
		name: 'afb_3_mth_culture'
  })
	afb3MthCulture: string

	@Column({
    nullable: true,
		name: 'afb_5_mth_sputum'
  })
	afb5MthSputum: string

	@Column({
    nullable: true,
		name: 'afb_5_mth_x'
  })
	afb5MthX: string

	@Column({
    nullable: true,
		name: 'afb_5_mth_culture'
  })
	afb5MthCulture: string

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

	@Column({
    nullable: true,
		name: 'afb_initial_positive',
		type: 'integer'
  })
	afbInitialPositive: number

	@Column({
    nullable: true,
		name: 'afb_2_mth_negative',
		type: 'integer'
  })
	afb2MthNegative: number

	@Column({
    nullable: true,
		name: 'afb_3_mth_negative',
		type: 'integer'
  })
	afb3MthNegative: number

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
		name: 'oth_lymph_node_result'
  })
	othLymphNodeResult: string

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
		name: 'cx_ray_result'
  })
	cxRayResult: string

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
