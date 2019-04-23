// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtGhcDiagnosis {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  artGhcDiaCode: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artGhcDiagnosiss)
  artConsultationPlha: ArtConsultationPlha

  @Column()
  artGhcDiaDescription: string

}
