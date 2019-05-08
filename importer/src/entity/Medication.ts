// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'
import { GeneralHeathCare } from './GeneralHeathCare'
import { Sti } from './Sti'

export enum TreatmentEnum { 
	OTHER = 'other', 
	STI = 'sti' 
}

@Entity()
export class Medication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlhaArtMedication: ArtConsultationPlha

	@Column({
		name: 'name',
		nullable: true
	})
	name: string

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

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.tbMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlhaTbMedication: ArtConsultationPlha

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.otherMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlhaOtherMedication: ArtConsultationPlha

	@Column({
		name: 'treatment',
		nullable: true,
		enum: TreatmentEnum
	})
	treatment: TreatmentEnum

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
