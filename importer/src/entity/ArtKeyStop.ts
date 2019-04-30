// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyStop {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyStops, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'art_restart_date',
		type: 'timestamptz',
		nullable: true
	})
	artRestartDate: Date

	@Column({
		name: 'reason',
		nullable: true
	})
	reason: string

	@Column({
		name: 'total_no_of_missed_dose',
		type: 'integer',
		nullable: true
	})
	totalNoOfMissedDose: number

	@Column({
		name: 'art_stop_date',
		type: 'timestamptz',
		nullable: true
	})
	artStopDate: Date

}
