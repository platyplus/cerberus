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
	@JoinColumn([{ name: 'art_key_mdm_code', referencedColumnName: 'mdmCode'}])
	artKey: ArtKey

	@Column({
		name: 'tb',
		type: 'text',
		nullable: true
	})
	tb: string

	@Column({
		name: 'attb_regimen',
		type: 'text',
		nullable: true
	})
	attbRegimen: string

	@Column({
		name: 'diagnosis_date',
		type: 'timestamptz',
		nullable: true
	})
	diagnosisDate: Date

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

}
