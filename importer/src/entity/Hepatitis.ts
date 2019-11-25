// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Hepatitis {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'mdm_lab',
		type: 'text',
		nullable: true
	})
	mdmLab: string

	@Column({
		name: 'mdm_code',
		type: 'text',
		nullable: true
	})
	mdmCode: string

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
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'hepatitis',
		type: 'text',
		nullable: true
	})
	hepatitis: string

	@Column({
		name: 'hep_h_bs_ag_result',
		type: 'text',
		nullable: true
	})
	hepHBsAgResult: string

	@Column({
		name: 'hep_anti_h_bs_result',
		type: 'text',
		nullable: true
	})
	hepAntiHBsResult: string

	@Column({
		name: 'hep_h_be_ag_result',
		type: 'text',
		nullable: true
	})
	hepHBeAgResult: string

	@Column({
		name: 'hep_hcv_ab_result',
		type: 'text',
		nullable: true
	})
	hepHcvAbResult: string

	@Column({
		name: 'hep_comment',
		type: 'text',
		nullable: true
	})
	hepComment: string

	@Column({
		name: 'done_by',
		type: 'text',
		nullable: true
	})
	doneBy: string

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
