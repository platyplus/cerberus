// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhArtEpisode {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		name: 'adh_art_start_date',
		type: 'timestamptz'
  })
  adhArtStartDate: Date

  @ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhArtEpisodes, {
    eager: true
  })
  artAdherence: string

  @Column({
    nullable: true,
		name: 'adh_art_stop_date',
		type: 'timestamptz'
  })
  adhArtStopDate: Date

  @Column({
    nullable: true,
		name: 'adh_art_restarting_date',
		type: 'timestamptz'
  })
  adhArtRestartingDate: Date

}
