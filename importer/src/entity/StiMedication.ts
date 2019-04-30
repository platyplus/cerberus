// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { Sti } from './Sti'

@Entity()
export class StiMedication {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => Sti, sti => sti.stiMedications, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	sti: Sti

	@Column({
		name: 'sti_treatment_dosage',
		nullable: true
	})
	stiTreatmentDosage: string

	@Column({
		name: 'sti_treatment_frequency',
		nullable: true
	})
	stiTreatmentFrequency: string

	@Column({
		name: 'sti_treatment_number_days',
		type: 'integer',
		nullable: true
	})
	stiTreatmentNumberDays: number

	@Column({
		name: 'sti_treatment_medicine_name',
		nullable: true
	})
	stiTreatmentMedicineName: string

}
