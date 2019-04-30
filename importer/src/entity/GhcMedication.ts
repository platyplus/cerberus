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
		name: 'ghc_dosage',
		nullable: true
	})
	ghcDosage: string

	@Column({
		name: 'ghc_frequency',
		nullable: true
	})
	ghcFrequency: string

	@Column({
		name: 'ghc_number_days',
		type: 'integer',
		nullable: true
	})
	ghcNumberDays: number

	@Column({
		name: 'ghc_medicine_name',
		nullable: true
	})
	ghcMedicineName: string

}
