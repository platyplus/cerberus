// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class ArtGhcDiagnosis {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.artGhcDiagnosiss, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'art_ghc_dia_description',
		nullable: true
	})
	artGhcDiaDescription: string

	@Column({
		name: 'art_ghc_dia_code',
		nullable: true
	})
	artGhcDiaCode: string

}
