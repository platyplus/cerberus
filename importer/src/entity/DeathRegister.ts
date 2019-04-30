// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class DeathRegister {
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
		name: 'father_name'
	})
	fatherName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sex'
	})
	sex: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'age'
	})
	age: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'address'
	})
	address: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'plh'
	})
	plh: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'on_anti_tb'
	})
	onAntiTb: boolean

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'on_art'
	})
	onArt: boolean

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'expired_date'
	})
	expiredDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'place_of_patient_expired'
	})
	placeOfPatientExpired: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'cause_of_death'
	})
	causeOfDeath: string

	@Column({
		type: 'boolean',
		nullable: true,
		name: 'hiv_related'
	})
	hivRelated: boolean

	@Column({
		type: 'integer',
		nullable: true,
		name: 'verify'
	})
	verify: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date_of_saving'
	})
	dateOfSaving: Date

}
