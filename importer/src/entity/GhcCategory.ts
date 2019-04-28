// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcCategory {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'ghc_category'
  })
	ghcCategory: string

	@ManyToOne(type => GeneralHeathCareGhc, generalHeathCareGhc => generalHeathCareGhc.ghcCategorys, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	generalHeathCareGhc: GeneralHeathCareGhc

	@Column({
    nullable: true,
		name: 'ghc_description'
  })
	ghcDescription: string

}
