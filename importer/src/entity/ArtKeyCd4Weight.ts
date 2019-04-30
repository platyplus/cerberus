// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyCd4Weight {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyCd4Weights, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		type: 'integer',
		nullable: true,
		name: 'cd'
	})
	cd: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'weight'
	})
	weight: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date'
	})
	date: Date

}
