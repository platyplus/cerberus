// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyAttb {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyAttbs, {
		eager: true
	})
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'attb_regimen',
		nullable: true
	})
	attbRegimen: string

	@Column({
		name: 'date_of_diagnosis',
		type: 'timestamptz',
		nullable: true
	})
	dateOfDiagnosis: Date

	@Column({
		name: 'end_date_of_attb_ip',
		type: 'timestamptz',
		nullable: true
	})
	endDateOfAttbIp: Date

	@Column({
		name: 'end_date_of_attb_cp',
		type: 'timestamptz',
		nullable: true
	})
	endDateOfAttbCp: Date

	@Column({
		name: 'tb',
		nullable: true
	})
	tb: string

	@Column({
		name: 'dateof_diagnosis',
		type: 'timestamptz',
		nullable: true
	})
	dateofDiagnosis: Date

}
