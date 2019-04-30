// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { TbKey } from './TbKey'

@Entity()
export class TbKeySample {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => TbKey, tbKey => tbKey.tbKeySamples, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	tbKey: TbKey

	@Column({
		type: 'string',
		nullable: true,
		name: 'method'
	})
	method: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'h'
	})
	h: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'r'
	})
	r: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'e'
	})
	e: string

	@Column({
		type: 'string',
		nullable: true,
		name: 's'
	})
	s: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'amk'
	})
	amk: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'km'
	})
	km: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'cm'
	})
	cm: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'fq'
	})
	fq: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'other'
	})
	other: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'sample_date'
	})
	sampleDate: Date

}
