// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTbMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  artTbMedicineName: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTbMedications, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true
  })
  artTbDosage: string

  @Column({
    nullable: true
  })
  artTbFrequency: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  artTbNumberDays: number

}
