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
		type: 'string',
		nullable: true,
		name: 'art_medicine_name'
	})
	artMedicineName: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_start_date'
	})
	artStartDate: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'art_stop_date'
	})
	artStopDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_interrupted'
	})
	artInterrupted: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'art_medicine_taken'
	})
	artMedicineTaken: string

}
