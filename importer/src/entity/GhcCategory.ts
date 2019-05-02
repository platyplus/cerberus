// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcCategory {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => GeneralHeathCareGhc, generalHeathCareGhc => generalHeathCareGhc.ghcCategorys, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	generalHeathCareGhc: GeneralHeathCareGhc

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
