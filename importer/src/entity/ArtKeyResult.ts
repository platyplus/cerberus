// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyResult {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  vDate: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyResults)
  artKey: ArtKey

  @Column()
  result: string

}
