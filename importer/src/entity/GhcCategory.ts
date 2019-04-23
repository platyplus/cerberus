// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  ghcCategory: string

  @ManyToOne(
    type => GeneralHeathCareGhc,
    generalHeathCareGhc => generalHeathCareGhc.ghcCategorys
  )
  generalHeathCareGhc: GeneralHeathCareGhc

  @Column()
  ghcDescription: string
}
