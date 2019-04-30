// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class GateAttendance {
	@Column({
		name: 'other_mdm_center',
		nullable: true
	})
	otherMdmCenter: string

	@Column({
		name: 'serial_number',
		nullable: true
	})
	serialNumber: string

	@PrimaryColumn({
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		name: 'patient_name',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'sex',
		nullable: true
	})
	sex: string

	@Column({
		name: 'patient_target',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'mdm_code_other',
		nullable: true
	})
	mdmCodeOther: string

	@Column({
		name: 'patient_name_other',
		nullable: true
	})
	patientNameOther: string

	@Column({
		name: 'sex_other',
		nullable: true
	})
	sexOther: string

	@Column({
		name: 'patient_target_other',
		nullable: true
	})
	patientTargetOther: string

	@PrimaryColumn({
		name: 'visit_date',
		type: 'timestamptz'
	})
	visitDate: Date

	@Column({
		name: 'new_repeater',
		nullable: true
	})
	newRepeater: string

	@Column({
		name: 'current_target',
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
