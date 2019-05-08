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
	@JoinColumn([{ name: 'tb_key_mdm_code', referencedColumnName: 'mdmCode'}])
	tbKey: TbKey

	@Column({
		name: 'sputum',
		type: 'text',
		nullable: true
	})
	sputum: string

	@Column({
		name: 'x',
		type: 'text',
		nullable: true
	})
	x: string

	@Column({
		name: 'culture',
		type: 'text',
		nullable: true
	})
	culture: string

	@Column({
		name: 'positive',
		type: 'integer',
		nullable: true
	})
	positive: number

	@Column({
		name: 'negative',
		type: 'integer',
		nullable: true
	})
	negative: number

}
