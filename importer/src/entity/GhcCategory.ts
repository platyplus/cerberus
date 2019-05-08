// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { GeneralHeathCare } from './GeneralHeathCare'

@Entity()
export class GhcCategory {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => GeneralHeathCare, generalHeathCare => generalHeathCare.ghcCategorys, {
		eager: true
	})
	@JoinColumn([{ name: 'general_heath_care_key', referencedColumnName: 'key'}])
	generalHeathCare: GeneralHeathCare

	@Column({
		name: 'name',
		type: 'text',
		nullable: true
	})
	name: string

	@Column({
		name: 'description',
		type: 'text',
		nullable: true
	})
	description: string

}
