import { Entity, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyHaartToxicity {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  haartToxicity: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyHaartToxicitys)
  artKey: ArtKey

  @Column()
  toxicityGrade: string

  @Column()
  toxicityDate: string

}
