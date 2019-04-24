// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyApri {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  apriDate: Date

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyApris, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  apriResult: number

}
