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
		type: 'string',
		nullable: true,
		name: 'sti_treatment_dosage'
	})
	stiTreatmentDosage: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_treatment_frequency'
	})
	stiTreatmentFrequency: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'sti_treatment_number_days'
	})
	stiTreatmentNumberDays: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'sti_treatment_medicine_name'
	})
	stiTreatmentMedicineName: string

}
