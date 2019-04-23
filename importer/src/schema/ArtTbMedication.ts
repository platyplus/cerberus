// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTbMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  artTbMedicineName: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTbMedications)
  artConsultationPlha: ArtConsultationPlha

  @Column()
  artTbDosage: string

  @Column()
  artTbFrequency: string

  @Column()
  artTbNumberDays: string

}
