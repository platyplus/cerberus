// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class ArtTreatment {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'medicine_taken',
		nullable: true
	})
	medicineTaken: string

	@Column({
		name: 'medicine_name',
		nullable: true
	})
	medicineName: string

	@Column({
		name: 'start_date',
		type: 'timestamptz',
		nullable: true
	})
	startDate: Date

	@Column({
		name: 'stop_date',
		type: 'timestamptz',
		nullable: true
	})
	stopDate: Date

	@Column({
		name: 'interrupted',
		nullable: true
	})
	interrupted: string

}
