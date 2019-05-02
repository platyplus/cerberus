// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => GeneralHeathCareGhc, generalHeathCareGhc => generalHeathCareGhc.ghcMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	generalHeathCareGhc: GeneralHeathCareGhc

	@Column({
		name: 'dosage',
		nullable: true
	})
	dosage: string

	@Column({
		name: 'frequency',
		nullable: true
	})
	frequency: string

	@Column({
		name: 'number_days',
		type: 'integer',
		nullable: true
	})
	numberDays: number

	@Column({
		name: 'name',
		nullable: true
	})
	name: string

}
