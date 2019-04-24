// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtGhcDiagnosis {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  artGhcDiaCode: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artGhcDiagnosiss, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true
  })
  artGhcDiaDescription: string

}
