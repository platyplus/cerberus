// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyCd4Weight {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  date: Date

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyCd4Weights, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  cd4: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  weight: number

}