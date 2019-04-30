// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhTbEpisode {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhTbEpisodes, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}, { name: 'placeOfMedicalCare', referencedColumnName: 'placeOfMedicalCare'}, { name: 'visitDate', referencedColumnName: 'visitDate'}])
	artAdherence: ArtAdherence

	@Column({
		name: 'tb_restarting_date',
		type: 'timestamptz',
		nullable: true
	})
	tbRestartingDate: Date

	@Column({
		name: 'tb_stop_date',
		type: 'timestamptz',
		nullable: true
	})
	tbStopDate: Date

}
