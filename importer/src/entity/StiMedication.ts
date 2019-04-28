// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Sti } from './Sti'

@Entity()
export class StiMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'sti_treatment_medicine_name'
  })
	stiTreatmentMedicineName: string

	@ManyToOne(type => Sti, sti => sti.stiMedications, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	sti: Sti

	@Column({
    nullable: true,
		name: 'sti_treatment_dosage'
  })
	stiTreatmentDosage: string

	@Column({
    nullable: true,
		name: 'sti_treatment_frequency'
  })
	stiTreatmentFrequency: string

	@Column({
    nullable: true,
		name: 'sti_treatment_number_days',
		type: 'integer'
  })
	stiTreatmentNumberDays: number

}
