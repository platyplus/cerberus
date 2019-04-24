// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyNewRegimen {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  newRegimen: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyNewRegimens, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  changeRegimenDate: Date

  @Column({
    nullable: true
  })
  changeReason: string

}
