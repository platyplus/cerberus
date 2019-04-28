// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyStop {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_stop_date',
		type: 'timestamptz'
  })
	artStopDate: Date

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyStops, {
    eager: true
  })
	@JoinColumn([{ name: 'mdMcode', referencedColumnName: 'mdMcode'}])
	artKey: ArtKey

	@Column({
    nullable: true,
		name: 'art_restart_date',
		type: 'timestamptz'
  })
	artRestartDate: Date

	@Column({
    nullable: true,
		name: 'reason'
  })
	reason: string

	@Column({
    nullable: true,
		name: 'total_no_of_missed_dose',
		type: 'integer'
  })
	totalNoOfMissedDose: number

}
