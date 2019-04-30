// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { TbKey } from './TbKey'

@Entity()
export class AfbToMth {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => TbKey, tbKey => tbKey.afbToMths, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	tbKey: TbKey

	@Column({
		type: 'string',
		nullable: true,
		name: 'x'
	})
	x: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'culture'
	})
	culture: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sputum'
	})
	sputum: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'positive'
	})
	positive: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'negative'
	})
	negative: number

}
