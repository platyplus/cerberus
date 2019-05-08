// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyResult {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyResults, {
		eager: true
	})
	@JoinColumn([{ name: 'art_key_mdm_code', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'date',
		type: 'timestamptz',
		nullable: true
	})
	date: Date

	@Column({
		name: 'result',
		type: 'text',
		nullable: true
	})
	result: string

}
