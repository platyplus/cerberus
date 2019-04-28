// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtAntiBioMedicineCode {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_anti_bio_medicine_code'
  })
	artAntiBioMedicineCode: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artAntiBioMedicineCodes, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

}
