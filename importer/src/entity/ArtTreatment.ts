// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtTreatment {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artTreatments, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

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

	@Column({
		name: 'medicine_taken',
		nullable: true
	})
	medicineTaken: string

}
