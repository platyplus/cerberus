// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'
import { GeneralHeathCare } from './GeneralHeathCare'
import { Sti } from './Sti'

export enum TreatmentEnum { 
	ART = 'art', 
	TB = 'tb', 
	OTHER = 'other', 
	STI = 'sti' 
}

@Entity()
export class Medication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'treatment',
		nullable: true,
		enum: TreatmentEnum
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
		name: 'name',
		nullable: true
	})
	name: string

	@ManyToOne(type => GeneralHeathCare, generalHeathCare => generalHeathCare.medications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	generalHeathCare: GeneralHeathCare

	@ManyToOne(type => Sti, sti => sti.medications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	sti: Sti

}
