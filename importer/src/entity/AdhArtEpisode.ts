// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhArtEpisode {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhArtStartDate: Date

  @ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhArtEpisodes, {
    eager: true
  })
  artAdherence: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhArtStopDate: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  adhArtRestartingDate: Date

}
