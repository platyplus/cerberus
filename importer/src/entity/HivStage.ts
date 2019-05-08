// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

export enum CategoryEnum { 
	ADULT = 'adult', 
	CHILD = 'child' 
}

export enum StageEnum { 
	STAGE_1 = 'stage1', 
	STAGE_2 = 'stage2', 
	STAGE_3 = 'stage3', 
	STAGE_4 = 'stage4' 
}

@Entity()
export class HivStage {
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

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.hivStages, {
		eager: true
	})
	@JoinColumn([{ name: 'art_consultation_plha_key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'name',
		type: 'text',
		nullable: true
	})
	name: string

}
