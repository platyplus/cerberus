// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtAdultStage {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_adult_stage'
  })
	artAdultStage: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artAdultStages, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

}
