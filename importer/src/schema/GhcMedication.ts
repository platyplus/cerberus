import { Entity, Column } from 'typeorm'
import { GeneralHeathCareGhc } from './GeneralHeathCareGhc'

@Entity()
export class GhcMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  ghcMedicineName: string

  @ManyToOne(type => GeneralHeathCareGhc, generalHeathCareGhc => generalHeathCareGhc.ghcMedications)
  generalHeathCareGhc: GeneralHeathCareGhc

  @Column()
  ghcDosage: string

  @Column()
  ghcFrequency: string

  @Column()
  ghcNumberDays: string

}
