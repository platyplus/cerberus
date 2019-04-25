// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTreatment {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		name: 'art_medicine_taken'
  })
  artMedicineTaken: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTreatments, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true,
		name: 'art_medicine_name'
  })
  artMedicineName: string

  @Column({
    nullable: true,
		name: 'art_start_date',
		type: 'timestamptz'
  })
  artStartDate: Date

  @Column({
    nullable: true,
		name: 'art_stop_date',
		type: 'timestamptz'
  })
  artStopDate: Date

  @Column({
    nullable: true,
		name: 'art_interrupted'
  })
  artInterrupted: string

}
