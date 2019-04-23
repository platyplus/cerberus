import { Entity, Column } from 'typeorm'
import { Sti } from './Sti'

@Entity()
export class StiMedication {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  stiTreatmentMedicineName: string

  @ManyToOne(type => Sti, sti => sti.stiMedications)
  sti: Sti

  @Column()
  stiTreatmentDosage: string

  @Column()
  stiTreatmentFrequency: string

  @Column()
  stiTreatmentNumberDays: string

}
