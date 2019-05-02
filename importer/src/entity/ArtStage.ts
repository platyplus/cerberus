// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

export enum CategoryEnum { 
	ADULT = 'adult', 
	CHILD = 'child' 
}

@Entity()
export class ArtStage {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'category',
		nullable: true,
		enum: ['adult', 'child']
	})
	category: CategoryEnum

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artStages, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'stage',
		nullable: true
	})
	stage: string

}
