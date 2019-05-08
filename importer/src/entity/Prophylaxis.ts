// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

export enum TypeEnum { 
	PRIMARY = 'primary', 
	SECONDARY = 'secondary' 
}

@Entity()
export class Prophylaxis {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.prophylaxiss, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'name',
		nullable: true
	})
	name: string

	@Column({
		name: 'type',
		nullable: true,
		enum: TypeEnum
	})
	type: TypeEnum

}
