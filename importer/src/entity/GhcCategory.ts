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
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	generalHeathCare: GeneralHeathCare

	@Column({
		name: 'description',
		nullable: true
	})
	description: string

	@Column({
		name: 'name',
		nullable: true
	})
	name: string

}
