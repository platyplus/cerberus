// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Regimen {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'new_regimen',
		type: 'text',
		nullable: true
	})
	newRegimen: string

	@Column({
		name: 'change_regimen_date',
		type: 'timestamptz',
		nullable: true
	})
	changeRegimenDate: Date

	@Column({
		name: 'change_reason',
		type: 'text',
		nullable: true
	})
	changeReason: string

}
