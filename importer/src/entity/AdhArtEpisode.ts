// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, Column } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhArtEpisode {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  adhArtStartDate: string

  @ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhArtEpisodes)
  artAdherence: ArtAdherence

  @Column()
  adhArtStopDate: string

  @Column()
  adhArtRestartingDate: string

}
