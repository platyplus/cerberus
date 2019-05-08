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
		enum: TreatmentTypeEnum
	})
	treatmentType: TreatmentTypeEnum

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.treatmentEpisodes, {
		eager: true
	})
	@JoinColumn([{ name: 'art_adherence_mdm_code', referencedColumnName: 'mdmCode'}, { name: 'art_adherence_last_registration_date', referencedColumnName: 'lastRegistrationDate'}])
	artAdherence: ArtAdherence

	@Column({
		name: 'stop_date',
		type: 'timestamptz',
		nullable: true
	})
	stopDate: Date

	@Column({
		name: 'restarting_date',
		type: 'timestamptz',
		nullable: true
	})
	restartingDate: Date

}
