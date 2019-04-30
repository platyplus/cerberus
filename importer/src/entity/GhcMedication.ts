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
		type: 'string',
		nullable: true,
		name: 'ghc_dosage'
	})
	ghcDosage: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_frequency'
	})
	ghcFrequency: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'ghc_number_days'
	})
	ghcNumberDays: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'ghc_medicine_name'
	})
	ghcMedicineName: string

}
