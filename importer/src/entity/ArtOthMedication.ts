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
		type: 'string',
		nullable: true,
		name: 'art_oth_dosage'
	})
	artOthDosage: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_oth_frequency'
	})
	artOthFrequency: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_oth_number_days'
	})
	artOthNumberDays: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_oth_med_name'
	})
	artOthMedName: string

}
