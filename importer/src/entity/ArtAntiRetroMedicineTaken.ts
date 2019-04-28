// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtAntiRetroMedicineTaken {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_anti_retro_medicine_taken'
  })
	artAntiRetroMedicineTaken: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artAntiRetroMedicineTakens, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

}
