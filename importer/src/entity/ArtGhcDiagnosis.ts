// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtGhcDiagnosis {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		name: 'art_ghc_dia_code'
  })
  artGhcDiaCode: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artGhcDiagnosiss, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true,
		name: 'art_ghc_dia_description'
  })
  artGhcDiaDescription: string

}
