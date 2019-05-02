// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { Vcct } from './Vcct'

@Entity()
export class VcctDrugType {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => Vcct, vcct => vcct.vcctDrugTypes, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	vcct: Vcct

	@Column({
		name: 'drug_name',
		nullable: true
	})
	drugName: string

	@Column({
		name: 'way_of_use',
		nullable: true
	})
	wayOfUse: string

	@Column({
		name: 'type_of_drugs',
		nullable: true
	})
	typeOfDrugs: string

}
