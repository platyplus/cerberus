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
		name: 'vcct_drug_name',
		nullable: true
	})
	vcctDrugName: string

	@Column({
		name: 'vcct_way_of_use',
		nullable: true
	})
	vcctWayOfUse: string

	@Column({
		name: 'vcct_type_of_drugs',
		nullable: true
	})
	vcctTypeOfDrugs: string

}
