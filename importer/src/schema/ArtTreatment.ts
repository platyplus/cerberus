import { Entity, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTreatment {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  artMedicineTaken: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTreatments)
  artConsultationPlha: ArtConsultationPlha

  @Column()
  artMedicineName: string

  @Column()
  artStartDate: string

  @Column()
  artStopDate: string

  @Column()
  artInterrupted: string

}
