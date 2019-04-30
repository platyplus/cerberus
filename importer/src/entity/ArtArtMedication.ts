// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtArtMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artArtMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'art_dosage',
		nullable: true
	})
	artDosage: string

	@Column({
		name: 'art_frequency',
		nullable: true
	})
	artFrequency: string

	@Column({
		name: 'art_number_days',
		type: 'integer',
		nullable: true
	})
	artNumberDays: number

	@Column({
		name: 'art_art_med_name',
		nullable: true
	})
	artArtMedName: string

}
