// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtAdherence } from './ArtAdherence'

export enum DrugEnum { 
	ALCOHOL = 'alcohol' 
}

@Entity()
export class DrugType {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'drug',
		nullable: true,
		enum: ['alcohol']
	})
	drug: DrugEnum

	@ManyToOne(type => ArtAdherence, artAdherence => artAdherence.drugTypes, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}, { name: 'placeOfMedicalCare', referencedColumnName: 'placeOfMedicalCare'}, { name: 'visitDate', referencedColumnName: 'visitDate'}])
	artAdherence: ArtAdherence

}
