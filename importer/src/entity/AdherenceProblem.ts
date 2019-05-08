// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

export enum CategoryEnum { 
	SOCIAL = 'social', 
	MEDICAL = 'medical', 
	MISC = 'misc' 
}

@Entity()
export class AdherenceProblem {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'category',
		nullable: true,
		enum: CategoryEnum
	})
	category: CategoryEnum

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adherenceProblems, {
		eager: true
	})
	@JoinColumn([{ name: 'art_adherence_mdm_code', referencedColumnName: 'mdmCode'}, { name: 'art_adherence_last_registration_date', referencedColumnName: 'lastRegistrationDate'}])
	artAdherence: ArtAdherence

	@Column({
		name: 'name',
		type: 'text',
		nullable: true
	})
	name: string

}
