// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtAntiTbMedicineCode {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'art_anti_tb_medicine_code'
  })
	artAntiTbMedicineCode: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artAntiTbMedicineCodes, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

}
