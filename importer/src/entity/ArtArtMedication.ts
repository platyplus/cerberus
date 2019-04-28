// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtArtMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_art_med_name'
  })
	artArtMedName: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artArtMedications, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
    nullable: true,
		name: 'art_dosage'
  })
	artDosage: string

	@Column({
    nullable: true,
		name: 'art_frequency'
  })
	artFrequency: string

	@Column({
    nullable: true,
		name: 'art_number_days',
		type: 'integer'
  })
	artNumberDays: number

}
