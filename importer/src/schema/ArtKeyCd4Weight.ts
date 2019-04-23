import { Entity, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyCd4Weight {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  date: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyCd4Weights)
  artKey: ArtKey

  @Column()
  cd4: string

  @Column()
  weight: string

}
