// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class GateAttendance {
	@Column({
		type: 'string',
		nullable: true,
		name: 'other_mdm_center'
	})
	otherMdmCenter: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'serial_number'
	})
	serialNumber: string

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
		name: 'mdm_code_other'
	})
	mdmCodeOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_name_other'
	})
	patientNameOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sex_other'
	})
	sexOther: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_target_other'
	})
	patientTargetOther: string

	@PrimaryColumn({
		type: 'timestamptz',
		name: 'visit_date'
	})
	visitDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'new_repeater'
	})
	newRepeater: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'current_target'
	})
	currentTarget: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'saving_date'
	})
	savingDate: Date

}
