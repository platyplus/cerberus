// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class OtherOi {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.otherOis, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'other_oi',
		nullable: true
	})
	otherOi: string

}
