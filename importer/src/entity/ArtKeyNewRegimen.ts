// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyNewRegimen {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyNewRegimens, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'change_regimen_date'
	})
	changeRegimenDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'change_reason'
	})
	changeReason: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'new_regimen'
	})
	newRegimen: string

}
