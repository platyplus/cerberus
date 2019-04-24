// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  ghcCategory: string

  @ManyToOne(type => GeneralHeathCareGhc, generalHeathCareGhc => generalHeathCareGhc.ghcCategorys, {
    eager: true
  })
  generalHeathCareGhc: string

  @Column({
    nullable: true
  })
  ghcDescription: string

}
