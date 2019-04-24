// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  ghcMedicineName: string

  @ManyToOne(type => GeneralHeathCareGhc, generalHeathCareGhc => generalHeathCareGhc.ghcMedications, {
    eager: true
  })
  generalHeathCareGhc: string

  @Column({
    nullable: true
  })
  ghcDosage: string

  @Column({
    nullable: true
  })
  ghcFrequency: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  ghcNumberDays: number

}
