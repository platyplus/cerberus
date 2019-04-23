// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtArtMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  artArtMedName: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artArtMedications)
  artConsultationPlha: ArtConsultationPlha

  @Column()
  artDosage: string

  @Column()
  artFrequency: string

  @Column()
  artNumberDays: string

}
