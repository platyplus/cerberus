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
		type: 'string',
		nullable: true,
		name: 'art_dosage'
	})
	artDosage: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_frequency'
	})
	artFrequency: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_number_days'
	})
	artNumberDays: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_art_med_name'
	})
	artArtMedName: string

}
