// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

export enum TreatmentEnum { 
	ART = 'art', 
	TB = 'tb', 
	OTHER = 'other' 
}

@Entity()
export class Medication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'treatment',
		nullable: true,
		enum: ['art', 'tb', 'other']
	})
	treatment: TreatmentEnum

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.medications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

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
		name: 'medication_name',
		nullable: true
	})
	medicationName: string

}
