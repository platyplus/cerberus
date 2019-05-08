// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

export enum CategoryEnum { 
	ADULT = 'adult', 
	CHILD = 'child' 
}

export enum StageEnum { 
	STAGE_1 = 'stage 1', 
	STAGE_2 = 'stage 2', 
	STAGE_3 = 'stage 3', 
	STAGE_4 = 'stage 4' 
}

@Entity()
export class ArtStage {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'category',
		nullable: true,
		enum: CategoryEnum
	})
	category: CategoryEnum

	@Column({
		name: 'stage',
		nullable: true,
		enum: StageEnum
	})
	stage: StageEnum

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artStages, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

}
