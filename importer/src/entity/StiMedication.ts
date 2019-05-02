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
		name: 'dosage',
		nullable: true
	})
	dosage: string

	@Column({
		name: 'frequency',
		nullable: true
	})
	frequency: string

	@Column({
		name: 'number_days',
		type: 'integer',
		nullable: true
	})
	numberDays: number

	@Column({
		name: 'medicine_name',
		nullable: true
	})
	medicineName: string

}
