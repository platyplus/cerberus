// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, OneToMany, Column } from 'typeorm'
import { DicDataRow } from './DicDataRow'

@Entity()
export class DicData {
	@PrimaryColumn({
		name: 'date',
		type: 'timestamptz'
	})
	date: Date

	@OneToMany(type => DicDataRow, dicDataRow => dicDataRow.dicData, {
		cascade: true
	})
	dicDataRows: DicDataRow[]

	@Column({
		name: 'total_sw',
		type: 'integer',
		nullable: true
	})
	totalSw: number

	@Column({
		name: 'total_msm',
		type: 'integer',
		nullable: true
	})
	totalMsm: number

	@Column({
		name: 'total_other',
		type: 'integer',
		nullable: true
	})
	totalOther: number

	@Column({
		name: 'vpet_sw',
		type: 'integer',
		nullable: true
	})
	vpetSw: number

	@Column({
		name: 'vpet_msm',
		type: 'integer',
		nullable: true
	})
	vpetMsm: number

	@Column({
		name: 'no_of_staff_peer',
		type: 'integer',
		nullable: true
	})
	noOfStaffPeer: number

	@Column({
		name: 'no_of_perdiem_peer',
		type: 'integer',
		nullable: true
	})
	noOfPerdiemPeer: number

	@Column({
		name: 'no_of_volunteer_peer',
		type: 'integer',
		nullable: true
	})
	noOfVolunteerPeer: number

	@Column({
		name: 'remark',
		nullable: true
	})
	remark: string

	@Column({
		name: 'male_condom',
		type: 'integer',
		nullable: true
	})
	maleCondom: number

	@Column({
		name: 'female_condom',
		type: 'integer',
		nullable: true
	})
	femaleCondom: number

	@Column({
		name: 'total_condom',
		type: 'integer',
		nullable: true
	})
	totalCondom: number

	@Column({
		name: 'leaflet',
		type: 'integer',
		nullable: true
	})
	leaflet: number

	@Column({
		name: 'gadget',
		type: 'integer',
		nullable: true
	})
	gadget: number

	@Column({
		name: 'other',
		type: 'integer',
		nullable: true
	})
	other: number

	@Column({
		name: 'total_iec',
		type: 'integer',
		nullable: true
	})
	totalIec: number

	@Column({
		name: 'sys_date',
		type: 'timestamptz',
		nullable: true
	})
	sysDate: Date

	@Column({
		name: 'last_registration_date',
		type: 'timestamptz',
		nullable: true
	})
	lastRegistrationDate: Date

	@Column({
		name: 'fusion_criteria',
		type: 'integer',
		nullable: true
	})
	fusionCriteria: number

}
