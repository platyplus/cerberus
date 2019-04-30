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
		name: 'change_regimen_date',
		type: 'timestamptz',
		nullable: true
	})
	changeRegimenDate: Date

	@Column({
		name: 'change_reason',
		nullable: true
	})
	changeReason: string

	@Column({
		name: 'new_regimen',
		nullable: true
	})
	newRegimen: string

}
