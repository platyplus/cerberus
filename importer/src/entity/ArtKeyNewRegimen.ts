// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyNewRegimen {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  newRegimen: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyNewRegimens)
  artKey: ArtKey

  @Column()
  changeRegimenDate: string

  @Column()
  changeReason: string

}
