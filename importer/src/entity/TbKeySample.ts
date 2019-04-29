// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { TbKey } from './TbKey'

@Entity()
export class TbKeySample {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'sample_date',
		type: 'timestamptz'
  })
	sampleDate: Date

	@ManyToOne(type => TbKey, tbKey => tbKey.tbKeySamples, {
    eager: true
  })
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	tbKey: TbKey

	@Column({
    nullable: true,
		name: 'method'
  })
	method: string

	@Column({
    nullable: true,
		name: 'h'
  })
	h: string

	@Column({
    nullable: true,
		name: 'r'
  })
	r: string

	@Column({
    nullable: true,
		name: 'e'
  })
	e: string

	@Column({
    nullable: true,
		name: 's'
  })
	s: string

	@Column({
    nullable: true,
		name: 'amk'
  })
	amk: string

	@Column({
    nullable: true,
		name: 'km'
  })
	km: string

	@Column({
    nullable: true,
		name: 'cm'
  })
	cm: string

	@Column({
    nullable: true,
		name: 'fq'
  })
	fq: string

	@Column({
    nullable: true,
		name: 'other'
  })
	other: string

}
