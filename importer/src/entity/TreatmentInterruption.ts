// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class TreatmentInterruption {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.treatmentInterruptions, {
		eager: true
	})
	@JoinColumn([{ name: 'art_key_mdm_code', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'stop_date',
		type: 'timestamptz',
		nullable: true
	})
	stopDate: Date

	@Column({
		name: 'restart_date',
		type: 'timestamptz',
		nullable: true
	})
	restartDate: Date

	@Column({
		name: 'reasion',
		type: 'text',
		nullable: true
	})
	reasion: string

	@Column({
		name: 'missed_doses',
		type: 'integer',
		nullable: true
	})
	missedDoses: number

}
