// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtOthMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artOthMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'art_oth_dosage',
		nullable: true
	})
	artOthDosage: string

	@Column({
		name: 'art_oth_frequency',
		nullable: true
	})
	artOthFrequency: string

	@Column({
		name: 'art_oth_number_days',
		type: 'integer',
		nullable: true
	})
	artOthNumberDays: number

	@Column({
		name: 'art_oth_med_name',
		nullable: true
	})
	artOthMedName: string

}
