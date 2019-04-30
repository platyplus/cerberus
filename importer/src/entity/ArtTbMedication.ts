// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTbMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTbMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_dosage'
	})
	artTbDosage: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_frequency'
	})
	artTbFrequency: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'art_tb_number_days'
	})
	artTbNumberDays: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_tb_medicine_name'
	})
	artTbMedicineName: string

}
