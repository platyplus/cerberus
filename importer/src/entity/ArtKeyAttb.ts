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
		type: 'string',
		nullable: true,
		name: 'attb_regimen'
	})
	attbRegimen: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date_of_diagnosis'
	})
	dateOfDiagnosis: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'end_date_of_attb_ip'
	})
	endDateOfAttbIp: Date

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'end_date_of_attb_cp'
	})
	endDateOfAttbCp: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'tb'
	})
	tb: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'dateof_diagnosis'
	})
	dateofDiagnosis: Date

}
