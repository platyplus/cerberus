// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhTbEpisode {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'tb_stop_date',
		type: 'timestamptz'
  })
	tbStopDate: Date

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhTbEpisodes, {
    eager: true
  })
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}, { name: 'placeOfMedicalCare', referencedColumnName: 'placeOfMedicalCare'}, { name: 'visitDate', referencedColumnName: 'visitDate'}])
	artAdherence: ArtAdherence

	@Column({
    nullable: true,
		name: 'tb_restarting_date',
		type: 'timestamptz'
  })
	tbRestartingDate: Date

}
