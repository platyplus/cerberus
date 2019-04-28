// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'ghc_medicine_name'
  })
	ghcMedicineName: string

	@ManyToOne(type => GeneralHeathCareGhc, generalHeathCareGhc => generalHeathCareGhc.ghcMedications, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	generalHeathCareGhc: GeneralHeathCareGhc

	@Column({
    nullable: true,
		name: 'ghc_dosage'
  })
	ghcDosage: string

	@Column({
    nullable: true,
		name: 'ghc_frequency'
  })
	ghcFrequency: string

	@Column({
    nullable: true,
		name: 'ghc_number_days',
		type: 'integer'
  })
	ghcNumberDays: number

}
