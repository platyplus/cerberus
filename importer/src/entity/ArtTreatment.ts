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
		name: 'art_medicine_name',
		nullable: true
	})
	artMedicineName: string

	@Column({
		name: 'art_start_date',
		type: 'timestamptz',
		nullable: true
	})
	artStartDate: Date

	@Column({
		name: 'art_stop_date',
		type: 'timestamptz',
		nullable: true
	})
	artStopDate: Date

	@Column({
		name: 'art_interrupted',
		nullable: true
	})
	artInterrupted: string

	@Column({
		name: 'art_medicine_taken',
		nullable: true
	})
	artMedicineTaken: string

}
