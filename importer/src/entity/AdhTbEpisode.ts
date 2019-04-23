// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, Column } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhTbEpisode {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  adhTbStartDate: string

  @ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhTbEpisodes)
  artAdherence: ArtAdherence

  @Column()
  adhTbStopDate: string

  @Column()
  adhTbRestartingDate: string

}
