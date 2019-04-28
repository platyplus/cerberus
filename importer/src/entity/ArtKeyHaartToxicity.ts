// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyHaartToxicity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'haart_toxicity'
  })
	haartToxicity: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyHaartToxicitys, {
    eager: true
  })
	@JoinColumn([{ name: 'mdMcode', referencedColumnName: 'mdMcode'}])
	artKey: ArtKey

	@Column({
    nullable: true,
		name: 'toxicity_grade'
  })
	toxicityGrade: string

	@Column({
    nullable: true,
		name: 'toxicity_date',
		type: 'timestamptz'
  })
	toxicityDate: Date

}
