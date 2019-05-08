// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class HaartToxicity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.haartToxicitys, {
		eager: true
	})
	@JoinColumn([{ name: 'art_key_mdm_code', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'toxicity',
		type: 'text',
		nullable: true
	})
	toxicity: string

	@Column({
		name: 'grade',
		type: 'text',
		nullable: true
	})
	grade: string

	@Column({
		name: 'date',
		type: 'timestamptz',
		nullable: true
	})
	date: Date

}
