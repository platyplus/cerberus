// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTbMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_tb_medicine_name'
  })
	artTbMedicineName: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTbMedications, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
    nullable: true,
		name: 'art_tb_dosage'
  })
	artTbDosage: string

	@Column({
    nullable: true,
		name: 'art_tb_frequency'
  })
	artTbFrequency: string

	@Column({
    nullable: true,
		name: 'art_tb_number_days',
		type: 'integer'
  })
	artTbNumberDays: number

}
