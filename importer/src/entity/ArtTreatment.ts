// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTreatment {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  artMedicineTaken: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTreatments, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true
  })
  artMedicineName: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artStartDate: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  artStopDate: Date

  @Column({
    nullable: true
  })
  artInterrupted: string

}
