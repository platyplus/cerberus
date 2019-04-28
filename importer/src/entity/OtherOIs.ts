// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class OtherOIs {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'other_o_is'
  })
	otherOIs: string

	@ManyToOne(type => ArtKey, artKey => artKey.otherOIss, {
    eager: true
  })
	@JoinColumn([{ name: 'mdMcode', referencedColumnName: 'mdMcode'}])
	artKey: ArtKey

}
