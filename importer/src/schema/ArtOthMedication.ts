import { Entity, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtOthMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  artOthMedName: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artOthMedications)
  artConsultationPlha: ArtConsultationPlha

  @Column()
  artOthDosage: string

  @Column()
  artOthFrequency: string

  @Column()
  artOthNumberDays: string

}
