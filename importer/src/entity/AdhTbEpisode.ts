// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

@Entity()
export class AdhTbEpisode {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		name: 'adh_tb_start_date',
		type: 'timestamptz'
  })
  adhTbStartDate: Date

  @ManyToOne(type => ArtAdherence, artAdherence => artAdherence.adhTbEpisodes, {
    eager: true
  })
  artAdherence: string

  @Column({
    nullable: true,
		name: 'adh_tb_stop_date',
		type: 'timestamptz'
  })
  adhTbStopDate: Date

  @Column({
    nullable: true,
		name: 'adh_tb_restarting_date',
		type: 'timestamptz'
  })
  adhTbRestartingDate: Date

}
