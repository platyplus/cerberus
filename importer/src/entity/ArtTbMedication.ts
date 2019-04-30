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
		name: 'art_tb_dosage',
		nullable: true
	})
	artTbDosage: string

	@Column({
		name: 'art_tb_frequency',
		nullable: true
	})
	artTbFrequency: string

	@Column({
		name: 'art_tb_number_days',
		type: 'integer',
		nullable: true
	})
	artTbNumberDays: number

	@Column({
		name: 'art_tb_medicine_name',
		nullable: true
	})
	artTbMedicineName: string

}
