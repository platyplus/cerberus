import { Entity, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyStop {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  artStopDate: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyStops)
  artKey: ArtKey

  @Column()
  artRestartDate: string

  @Column()
  reason: string

  @Column()
  totalNoOfMissedDose: string

}
