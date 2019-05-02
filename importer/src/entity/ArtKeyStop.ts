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
		name: 'restart_date',
		type: 'timestamptz',
		nullable: true
	})
	restartDate: Date

	@Column({
		name: 'reasion',
		nullable: true
	})
	reasion: string

	@Column({
		name: 'missed_doses',
		type: 'integer',
		nullable: true
	})
	missedDoses: number

	@Column({
		name: 'stop_date',
		type: 'timestamptz',
		nullable: true
	})
	stopDate: Date

}
