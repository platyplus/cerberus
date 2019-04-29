// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class Apri {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'date',
		type: 'timestamptz'
  })
	date: Date

	@ManyToOne(type => ArtKey, artKey => artKey.apris, {
    eager: true
  })
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
    nullable: true,
		name: 'result',
		type: 'integer'
  })
	result: number

}
