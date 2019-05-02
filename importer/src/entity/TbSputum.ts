// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class TbSputum {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.tbSputums, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'xpert',
		nullable: true
	})
	xpert: string

	@Column({
		name: 'culture',
		nullable: true
	})
	culture: string

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
		name: 's',
		nullable: true
	})
	s: string

	@Column({
		name: 'e',
		nullable: true
	})
	e: string

	@Column({
		name: 'lpa',
		nullable: true
	})
	lpa: string

	@Column({
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'tb_other_sample',
		nullable: true
	})
	tbOtherSample: string

	@Column({
		name: 'smear',
		nullable: true
	})
	smear: string

}
