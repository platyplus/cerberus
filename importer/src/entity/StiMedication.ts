// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Sti } from './Sti'

@Entity()
export class StiMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  stiTreatmentMedicineName: string

  @ManyToOne(type => Sti, sti => sti.stiMedications, {
    eager: true
  })
  sti: string

  @Column({
    nullable: true
  })
  stiTreatmentDosage: string

  @Column({
    nullable: true
  })
  stiTreatmentFrequency: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  stiTreatmentNumberDays: number

}
