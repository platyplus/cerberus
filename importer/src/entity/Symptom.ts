// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'
import { GeneralHeathCare } from './GeneralHeathCare'
import { Sti } from './Sti'

export enum CategoryEnum { 
	CONSTITUTIONAL = 'constitutional', 
	GASTROINTESTINAL = 'gastrointestinal', 
	RESPIRATORY = 'respiratory', 
	NEUROLOGICAL = 'neurological', 
	SKIN_MANIFESTATION = 'skin manifestation', 
	STI = 'sti' 
}

export enum NameEnum { 
	TODO = 'todo', 
	FATIGUE = 'fatigue', 
	PAIN = 'pain', 
	OTHER = 'other', 
	ABDOMINAL_PAIN = 'abdominal pain', 
	NAUSEA = 'nausea', 
	VOMITING = 'vomiting', 
	DYSPHAGIA = 'dysphagia', 
	DIARRHEA = 'diarrhea', 
	DIFFICULTY_BREATHING = 'difficulty breathing', 
	CHEST_PAIN = 'chest pain', 
	PALPITATION = 'palpitation', 
	HEADACHE = 'headache', 
	CONFUSION = 'confusion', 
	MEMORY_PROBLEM = 'memory problem', 
	TINGLING_AND_NUMBNESS_OF_LIMBS = 'Tingling and Numbness of limbs', 
	INSOMNIA = 'insomnia', 
	YAWNING = 'yawning', 
	FEVER = 'fever', 
	NIGHT_SWEATS = 'night sweats', 
	APPETITE_LOSS = 'appetite loss', 
	WEIGHT_LOSS = 'weight loss', 
	NON_PRODUCTIVE_COUCH = 'non-productive couch', 
	PRODUCTIVE_COUCH = 'productive couch', 
	HEMOPTYSIS = 'hemoptysis', 
	ITCHINESS = 'itchiness', 
	RASH = 'rash', 
	LUMP = 'lump' 
}

export enum TypeEnum { 
	SCORE_THROAT = 'score throat', 
	VAGINAL_DISCHARGE = 'vaginal discharge' 
}

@Entity()
export class Symptom {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'category',
		nullable: true,
		enum: CategoryEnum
	})
	category: CategoryEnum

	@Column({
		name: 'name',
		nullable: true,
		enum: NameEnum
	})
	name: NameEnum

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.symptoms, {
		eager: true
	})
	@JoinColumn([{ name: 'art_consultation_plha_key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'description',
		type: 'text',
		nullable: true
	})
	description: string

	@ManyToOne(type => GeneralHeathCare, generalHeathCare => generalHeathCare.symptoms, {
		eager: true
	})
	@JoinColumn([{ name: 'general_heath_care_key', referencedColumnName: 'key'}])
	generalHeathCare: GeneralHeathCare

	@Column({
		name: 'type',
		nullable: true,
		enum: TypeEnum
	})
	type: TypeEnum

	@ManyToOne(type => Sti, sti => sti.symptoms, {
		eager: true
	})
	@JoinColumn([{ name: 'sti_key', referencedColumnName: 'key'}])
	sti: Sti

}
