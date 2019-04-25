// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtOthMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		name: 'art_oth_med_name'
  })
  artOthMedName: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artOthMedications, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true,
		name: 'art_oth_dosage'
  })
  artOthDosage: string

  @Column({
    nullable: true,
		name: 'art_oth_frequency'
  })
  artOthFrequency: string

  @Column({
    nullable: true,
		name: 'art_oth_number_days',
		type: 'integer'
  })
  artOthNumberDays: number

}
