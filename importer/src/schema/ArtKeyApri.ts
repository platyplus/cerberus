import { Entity, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyApri {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  apriDate: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyApris)
  artKey: ArtKey

  @Column()
  apriResult: string

}
