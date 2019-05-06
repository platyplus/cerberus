// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

export enum DrugEnum { 
	ALCOHOL = 'alcohol', 
	AMPHETAMINE = 'amphetamine', 
	DIAZEPINE = 'diazepine', 
	CANNABIS = 'cannabis', 
	ECSTASY = 'ecstasy', 
	HEROIN = 'heroin', 
	OPIUM = 'opium' 
}

@Entity()
export class DrugUsage {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'drug',
		nullable: true,
		enum: DrugEnum
	})
	drug: DrugEnum

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.drugUsages, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}, { name: 'placeOfMedicalCare', referencedColumnName: 'placeOfMedicalCare'}, { name: 'visitDate', referencedColumnName: 'visitDate'}])
	artAdherence: ArtAdherence

	@Column({
		name: 'times_day',
		type: 'integer',
		nullable: true
	})
	timesDay: number

	@Column({
		name: 'days_week',
		type: 'integer',
		nullable: true
	})
	daysWeek: number

	@Column({
		name: 'way_of_use',
		nullable: true
	})
	wayOfUse: string

	@Column({
		name: 'last_use',
		type: 'timestamptz',
		nullable: true
	})
	lastUse: Date

}
