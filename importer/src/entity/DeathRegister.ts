// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class DeathRegister {
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
		name: 'father_name',
		type: 'text',
		nullable: true
	})
	fatherName: string

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
		name: 'address',
		type: 'text',
		nullable: true
	})
	address: string

	@Column({
		name: 'plh',
		type: 'boolean',
		nullable: true
	})
	plh: boolean

	@Column({
		name: 'on_anti_tb',
		type: 'boolean',
		nullable: true
	})
	onAntiTb: boolean

	@Column({
		name: 'on_art',
		type: 'boolean',
		nullable: true
	})
	onArt: boolean

	@Column({
		name: 'expired_date',
		type: 'timestamptz',
		nullable: true
	})
	expiredDate: Date

	@Column({
		name: 'place_of_patient_expired',
		type: 'text',
		nullable: true
	})
	placeOfPatientExpired: string

	@Column({
		name: 'cause_of_death',
		type: 'text',
		nullable: true
	})
	causeOfDeath: string

	@Column({
		name: 'hiv_related',
		type: 'boolean',
		nullable: true
	})
	hivRelated: boolean

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@Column({
		name: 'date_of_saving',
		type: 'timestamptz',
		nullable: true
	})
	dateOfSaving: Date

}
