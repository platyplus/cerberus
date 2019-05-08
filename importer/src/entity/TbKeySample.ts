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
	@JoinColumn([{ name: 'tb_key_mdm_code', referencedColumnName: 'mdmCode'}])
	tbKey: TbKey

	@Column({
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'method',
		type: 'text',
		nullable: true
	})
	method: string

	@Column({
		name: 'h',
		type: 'text',
		nullable: true
	})
	h: string

	@Column({
		name: 'r',
		type: 'text',
		nullable: true
	})
	r: string

	@Column({
		name: 'e',
		type: 'text',
		nullable: true
	})
	e: string

	@Column({
		name: 's',
		type: 'text',
		nullable: true
	})
	s: string

	@Column({
		name: 'amk',
		type: 'text',
		nullable: true
	})
	amk: string

	@Column({
		name: 'km',
		type: 'text',
		nullable: true
	})
	km: string

	@Column({
		name: 'cm',
		type: 'text',
		nullable: true
	})
	cm: string

	@Column({
		name: 'fq',
		type: 'text',
		nullable: true
	})
	fq: string

	@Column({
		name: 'other',
		type: 'text',
		nullable: true
	})
	other: string

}
