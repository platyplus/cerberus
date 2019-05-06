// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

export enum TypeEnum { 
	ANTIBIO = 'antibio', 
	ANTITB = 'antitb' 
}

@Entity()
export class MedicineCode {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'type',
		nullable: true,
		enum: TypeEnum
	})
	type: TypeEnum

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.medicineCodes, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'medicine_code',
		nullable: true
	})
	medicineCode: string

}
