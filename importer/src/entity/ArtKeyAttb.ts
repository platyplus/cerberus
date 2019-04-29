// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyAttb {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'tb'
  })
	tb: string

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyAttbs, {
    eager: true
  })
	@JoinColumn([{ name: 'mdmCode', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
    nullable: true,
		name: 'attb_regimen'
  })
	attbRegimen: string

	@Column({
    nullable: true,
		name: 'date_of_diagnosis',
		type: 'timestamptz'
  })
	dateOfDiagnosis: Date

	@Column({
    nullable: true,
		name: 'end_date_of_attb_ip',
		type: 'timestamptz'
  })
	endDateOfAttbIp: Date

	@Column({
    nullable: true,
		name: 'end_date_of_attb_cp',
		type: 'timestamptz'
  })
	endDateOfAttbCp: Date

	@Column({
    nullable: true,
		name: 'dateof_diagnosis',
		type: 'timestamptz'
  })
	dateofDiagnosis: Date

}
