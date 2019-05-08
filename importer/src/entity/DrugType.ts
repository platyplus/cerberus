// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { Vcct } from './Vcct'

@Entity()
export class DrugType {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => Vcct, vcct => vcct.drugTypes, {
		eager: true
	})
	@JoinColumn([{ name: 'vcct_key', referencedColumnName: 'key'}])
	vcct: Vcct

	@Column({
		name: 'type_of_drugs',
		type: 'text',
		nullable: true
	})
	typeOfDrugs: string

	@Column({
		name: 'drug_name',
		type: 'text',
		nullable: true
	})
	drugName: string

	@Column({
		name: 'way_of_use',
		type: 'text',
		nullable: true
	})
	wayOfUse: string

}
