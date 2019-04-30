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
		name: 'toxicity_grade',
		nullable: true
	})
	toxicityGrade: string

	@Column({
		name: 'toxicity_date',
		type: 'timestamptz',
		nullable: true
	})
	toxicityDate: Date

	@Column({
		name: 'haart_toxicity',
		nullable: true
	})
	haartToxicity: string

}
