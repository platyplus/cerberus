// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class GateAttendance {
	@Column({
    nullable: true,
		name: 'other_mdm_center'
  })
	otherMdmCenter: string

	@Column({
    nullable: true,
		name: 'serial_number'
  })
	serialNumber: string

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
		name: 'mdm_code_other'
  })
	mdmCodeOther: string

	@Column({
    nullable: true,
		name: 'patient_name_other'
  })
	patientNameOther: string

	@Column({
    nullable: true,
		name: 'sex_other'
  })
	sexOther: string

	@Column({
    nullable: true,
		name: 'patient_target_other'
  })
	patientTargetOther: string

	@PrimaryColumn({
    name: 'visit_date',
		type: 'timestamptz'
  })
	visitDate: Date

	@Column({
    nullable: true,
		name: 'new_repeater'
  })
	newRepeater: string

	@Column({
    nullable: true,
		name: 'current_target'
  })
	currentTarget: string

	@Column({
    nullable: true,
		name: 'saving_date',
		type: 'timestamptz'
  })
	savingDate: Date

}
