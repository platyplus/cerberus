// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyStop {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artStopDate: Date

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyStops, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artRestartDate: Date

  @Column({
    nullable: true
  })
  reason: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  totalNoOfMissedDose: number

}
