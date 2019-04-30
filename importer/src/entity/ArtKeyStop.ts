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
		type: 'timestamptz',
		nullable: true,
		name: 'art_restart_date'
	})
	artRestartDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'reason'
	})
	reason: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'total_no_of_missed_dose'
	})
	totalNoOfMissedDose: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_stop_date'
	})
	artStopDate: Date

}
