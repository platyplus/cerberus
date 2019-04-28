// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtChildStage {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_child_stage'
  })
	artChildStage: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artChildStages, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

}
