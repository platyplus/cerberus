// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyHaartToxicity {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  haartToxicity: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyHaartToxicitys, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true
  })
  toxicityGrade: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  toxicityDate: Date

}
