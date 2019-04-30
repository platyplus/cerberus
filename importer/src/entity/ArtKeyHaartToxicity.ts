// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyHaartToxicity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyHaartToxicitys, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		type: 'string',
		nullable: true,
		name: 'toxicity_grade'
	})
	toxicityGrade: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'toxicity_date'
	})
	toxicityDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'haart_toxicity'
	})
	haartToxicity: string

}
