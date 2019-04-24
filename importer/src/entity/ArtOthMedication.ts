// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtOthMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  artOthMedName: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artOthMedications, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true
  })
  artOthDosage: string

  @Column({
    nullable: true
  })
  artOthFrequency: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  artOthNumberDays: number

}
