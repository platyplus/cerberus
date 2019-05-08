// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

export enum CategoryEnum { 
	OI = 'OI', 
	GHC = 'GHC' 
}

@Entity()
export class Diagnosis {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'category',
		nullable: true,
		enum: CategoryEnum
	})
	category: CategoryEnum

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.diagnosiss, {
		eager: true
	})
	@JoinColumn([{ name: 'art_consultation_plha_key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'code',
		type: 'text',
		nullable: true
	})
	code: string

	@Column({
		name: 'description',
		type: 'text',
		nullable: true
	})
	description: string

}
