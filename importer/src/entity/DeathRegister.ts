// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class DeathRegister {
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
		name: 'father_name'
  })
	fatherName: string

	@Column({
    nullable: true,
		name: 'sex'
  })
	sex: string

	@Column({
    nullable: true,
		name: 'age',
		type: 'integer'
  })
	age: number

	@Column({
    nullable: true,
		name: 'patient_target'
  })
	patientTarget: string

	@Column({
    nullable: true,
		name: 'address'
  })
	address: string

	@Column({
    nullable: true,
		name: 'plh',
		type: 'boolean'
  })
	plh: boolean

	@Column({
    nullable: true,
		name: 'on_anti_tb',
		type: 'boolean'
  })
	onAntiTb: boolean

	@Column({
    nullable: true,
		name: 'on_art',
		type: 'boolean'
  })
	onArt: boolean

	@Column({
    nullable: true,
		name: 'expired_date',
		type: 'timestamptz'
  })
	expiredDate: Date

	@Column({
    nullable: true,
		name: 'place_of_patient_expired'
  })
	placeOfPatientExpired: string

	@Column({
    nullable: true,
		name: 'cause_of_death'
  })
	causeOfDeath: string

	@Column({
    nullable: true,
		name: 'hiv_related',
		type: 'boolean'
  })
	hivRelated: boolean

	@Column({
    nullable: true,
		name: 'verify',
		type: 'integer'
  })
	verify: number

	@Column({
    nullable: true,
		name: 'date_of_saving',
		type: 'timestamptz'
  })
	dateOfSaving: Date

}
