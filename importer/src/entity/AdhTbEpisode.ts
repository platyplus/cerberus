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
		type: 'timestamptz',
		nullable: true,
		name: 'tb_restarting_date'
	})
	tbRestartingDate: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'tb_stop_date'
	})
	tbStopDate: Date

}
