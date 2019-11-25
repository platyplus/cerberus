// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Cd4 {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'mdm_lab',
		type: 'text',
		nullable: true
	})
	mdmLab: string

	@Column({
		name: 'mdm_lab_for_test',
		type: 'text',
		nullable: true
	})
	mdmLabForTest: string

	@Column({
		name: 'cd_4_origin',
		type: 'text',
		nullable: true
	})
	cd4Origin: string

	@Column({
		name: 'cd_4_origin_mdm',
		type: 'text',
		nullable: true
	})
	cd4OriginMdm: string

	@Column({
		name: 'cd_4_origin_other',
		type: 'text',
		nullable: true
	})
	cd4OriginOther: string

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
		name: 'other_ingo_no',
		type: 'text',
		nullable: true
	})
	otherIngoNo: string

	@Column({
		name: 'ingo_sex',
		type: 'text',
		nullable: true
	})
	ingoSex: string

	@Column({
		name: 'ingo_age',
		type: 'integer',
		nullable: true
	})
	ingoAge: number

	@Column({
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'date_analysed',
		type: 'timestamptz',
		nullable: true
	})
	dateAnalysed: Date

	@Column({
		name: 'technician',
		type: 'text',
		nullable: true
	})
	technician: string

	@Column({
		name: 'cd_4_final_cd_4_result',
		type: 'integer',
		nullable: true
	})
	cd4FinalCd4Result: number

	@Column({
		name: 'cd_4_final_cd',
		type: 'integer',
		nullable: true
	})
	cd4FinalCd: number

	@Column({
		name: 'comment',
		type: 'text',
		nullable: true
	})
	comment: string

	@Column({
		name: 'result',
		type: 'text',
		nullable: true
	})
	result: string

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
