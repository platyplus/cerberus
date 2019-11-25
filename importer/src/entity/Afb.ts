// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { PatientGeneralData } from './PatientGeneralData';

@Entity()
export class Afb {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'mdm_lab',
		type: 'text',
		nullable: true
	})
	mdmLab: string

	@ManyToOne(type => PatientGeneralData)
	@JoinColumn([{ name: 'afb_patient_key', referencedColumnName: 'mdmCode'}])
	mdmCode: PatientGeneralData

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
		name: 'patient_target',
		type: 'text',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'tb_followup_patient',
		type: 'text',
		nullable: true
	})
	tbFollowupPatient: string

	@Column({
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'sample',
		type: 'text',
		nullable: true
	})
	sample: string

	@Column({
		name: 'afb_result_sputum',
		type: 'text',
		nullable: true
	})
	afbResultSputum: string

	@Column({
		name: 'afb_result_if_scanty',
		type: 'text',
		nullable: true
	})
	afbResultIfScanty: string

	@Column({
		name: 'afb_quality_sputum',
		type: 'text',
		nullable: true
	})
	afbQualitySputum: string

	@Column({
		name: 'afb_result_skin',
		type: 'text',
		nullable: true
	})
	afbResultSkin: string

	@Column({
		name: 'afb_result_urnie',
		type: 'text',
		nullable: true
	})
	afbResultUrnie: string

	@Column({
		name: 'afb_result_lymph_node',
		type: 'text',
		nullable: true
	})
	afbResultLymphNode: string

	@Column({
		name: 'afb_result_csf',
		type: 'text',
		nullable: true
	})
	afbResultCsf: string

	@Column({
		name: 'afb_result_nasal_swab',
		type: 'text',
		nullable: true
	})
	afbResultNasalSwab: string

	@Column({
		name: 'afb_result_ear_swab',
		type: 'text',
		nullable: true
	})
	afbResultEarSwab: string

	@Column({
		name: 'afb_result_pus',
		type: 'text',
		nullable: true
	})
	afbResultPus: string

	@Column({
		name: 'afb_result_ulcer_smear',
		type: 'text',
		nullable: true
	})
	afbResultUlcerSmear: string

	@Column({
		name: 'afb_result_stool',
		type: 'text',
		nullable: true
	})
	afbResultStool: string

	@Column({
		name: 'done_by',
		type: 'text',
		nullable: true
	})
	doneBy: string

	@Column({
		name: 'done_date',
		type: 'timestamptz',
		nullable: true
	})
	doneDate: Date

	@Column({
		name: 'comment',
		type: 'text',
		nullable: true
	})
	comment: string

	@Column({
		name: 'afb_sputum_sample_number',
		type: 'integer',
		nullable: true
	})
	afbSputumSampleNumber: number

	@Column({
		name: 'afb_sputum_sample_positive',
		type: 'integer',
		nullable: true
	})
	afbSputumSamplePositive: number

	@Column({
		name: 'afb_sputum_sample_number_new',
		type: 'integer',
		nullable: true
	})
	afbSputumSampleNumberNew: number

	@Column({
		name: 'afb_sputum_sample_positive_new',
		type: 'integer',
		nullable: true
	})
	afbSputumSamplePositiveNew: number

	@Column({
		name: 'afb_sample_number',
		type: 'integer',
		nullable: true
	})
	afbSampleNumber: number

	@Column({
		name: 'afb_sample_positive_number',
		type: 'integer',
		nullable: true
	})
	afbSamplePositiveNumber: number

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@Column({
		name: 'saving_date',
		type: 'timestamptz',
		nullable: true
	})
	savingDate: Date

}
