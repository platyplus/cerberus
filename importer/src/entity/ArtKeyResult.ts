// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyResult {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  vDate: Date

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyResults, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true
  })
  result: string

}
