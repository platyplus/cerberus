// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { TbKey } from './TbKey'

@Entity()
export class AfbToMth {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'sputum'
  })
	sputum: string

	@ManyToOne(type => TbKey, tbKey => tbKey.afbToMths, {
    eager: true
  })
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	tbKey: TbKey

	@Column({
    nullable: true,
		name: 'x'
  })
	x: string

	@Column({
    nullable: true,
		name: 'culture'
  })
	culture: string

	@Column({
    nullable: true,
		name: 'positive',
		type: 'integer'
  })
	positive: number

	@Column({
    nullable: true,
		name: 'negative',
		type: 'integer'
  })
	negative: number

}
