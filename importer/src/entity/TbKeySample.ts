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
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'method',
		nullable: true
	})
	method: string

	@Column({
		name: 'h',
		nullable: true
	})
	h: string

	@Column({
		name: 'r',
		nullable: true
	})
	r: string

	@Column({
		name: 'e',
		nullable: true
	})
	e: string

	@Column({
		name: 's',
		nullable: true
	})
	s: string

	@Column({
		name: 'amk',
		nullable: true
	})
	amk: string

	@Column({
		name: 'km',
		nullable: true
	})
	km: string

	@Column({
		name: 'cm',
		nullable: true
	})
	cm: string

	@Column({
		name: 'fq',
		nullable: true
	})
	fq: string

	@Column({
		name: 'other',
		nullable: true
	})
	other: string

}
