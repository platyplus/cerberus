// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'
import { GeneralHeathCare } from './GeneralHeathCare'
import { Sti } from './Sti'

export enum CategoryEnum { 
	SKIN_MANIFESTATION = 'skin manifestation', 
	EYE = 'eye', 
	NOSE = 'nose', 
	ORAL = 'oral', 
	LYMPH_NODES = 'lymph nodes', 
	HEART = 'heart', 
	LUNGS = 'lungs', 
	ABDOMEN = 'abdomen', 
	NEUROLOGICAL = 'neurological', 
	STI = 'sti' 
}

@Entity()
export class PhysicalExam {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'category',
		nullable: true,
		enum: CategoryEnum
	})
	category: CategoryEnum

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.physicalExams, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'name',
		nullable: true
	})
	name: string

	@Column({
		name: 'comment',
		nullable: true
	})
	comment: string

	@ManyToOne(type => GeneralHeathCare, generalHeathCare => generalHeathCare.physicalExams, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	generalHeathCare: GeneralHeathCare

	@ManyToOne(type => Sti, sti => sti.physicalExams, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	sti: Sti

}
