// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class GateAttendance {
	@Column({
		name: 'other_mdm_center',
		type: 'text',
		nullable: true
	})
	otherMdmCenter: string

	@Column({
		name: 'serial_number',
		type: 'text',
		nullable: true
	})
	serialNumber: string

	@PrimaryColumn({
		name: 'mdm_code',
		type: 'text',
		default: 'unknown'
	})
	mdmCode: string

	@Column({
		name: 'patient_name',
		type: 'text',
		nullable: true
	})
	patientName: string

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

	@PrimaryColumn({
		name: 'visit_date',
		type: 'timestamptz'
	})
	visitDate: Date

	@Column({
		name: 'new_repeater',
		type: 'text',
		nullable: true
	})
	newRepeater: string

	@Column({
		name: 'current_target',
		type: 'text',
		nullable: true
	})
	currentTarget: string

	@Column({
		name: 'saving_date',
		type: 'timestamptz',
		nullable: true
	})
	savingDate: Date

}
