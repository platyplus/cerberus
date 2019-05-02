// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

export enum TreatmentTypeEnum { 
	ART = 'art', 
	TB = 'tb' 
}

@Entity()
export class TreatmentEpisode {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'treatment_type',
		nullable: true,
		enum: ['art', 'tb']
	})
	treatmentType: TreatmentTypeEnum

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.treatmentEpisodes, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}, { name: 'placeOfMedicalCare', referencedColumnName: 'placeOfMedicalCare'}, { name: 'visitDate', referencedColumnName: 'visitDate'}])
	artAdherence: ArtAdherence

	@Column({
		name: 'restarting_date',
		type: 'timestamptz',
		nullable: true
	})
	restartingDate: Date

	@Column({
		name: 'stop_date',
		type: 'timestamptz',
		nullable: true
	})
	stopDate: Date

}
