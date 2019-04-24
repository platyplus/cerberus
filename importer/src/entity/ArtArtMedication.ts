// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtArtMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  artArtMedName: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artArtMedications, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true
  })
  artDosage: string

  @Column({
    nullable: true
  })
  artFrequency: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  artNumberDays: number

}
