// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhArtEpisode {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhArtEpisodes, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}, { name: 'placeOfMedicalCare', referencedColumnName: 'placeOfMedicalCare'}, { name: 'visitDate', referencedColumnName: 'visitDate'}])
	artAdherence: ArtAdherence

	@Column({
		name: 'art_restarting_date',
		type: 'timestamptz',
		nullable: true
	})
	artRestartingDate: Date

	@Column({
		name: 'art_stop_date',
		type: 'timestamptz',
		nullable: true
	})
	artStopDate: Date

}
