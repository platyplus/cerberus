// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class Cd4Measurement {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.cd4Measurements, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'weight',
		type: 'integer',
		nullable: true
	})
	weight: number

	@Column({
		name: 'date',
		type: 'timestamptz',
		nullable: true
	})
	date: Date

	@Column({
		name: 'cd',
		type: 'integer',
		nullable: true
	})
	cd: number

}
