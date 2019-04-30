// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class PatientGeneralData {
	@Column({
		name: 'mdm_location',
		nullable: true
	})
	mdmLocation: string

	@PrimaryColumn({
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		name: 'serial_number',
		nullable: true
	})
	serialNumber: string

	@Column({
		name: 'registration_date',
		type: 'timestamptz',
		nullable: true
	})
	registrationDate: Date

	@Column({
		name: 'patient_name',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
		nullable: true
	})
	sex: string

	@Column({
		name: 'date_of_birth',
		type: 'timestamptz',
		nullable: true
	})
	dateOfBirth: Date

	@Column({
		name: 'age',
		type: 'integer',
		nullable: true
	})
	age: number

	@Column({
		name: 'date_of_birth_estimated',
		nullable: true
	})
	dateOfBirthEstimated: string

	@Column({
		name: 'place_of_birth',
		nullable: true
	})
	placeOfBirth: string

	@Column({
		name: 'height',
		type: 'integer',
		nullable: true
	})
	height: number

	@Column({
		name: 'patient_target',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'marital_status',
		nullable: true
	})
	maritalStatus: string

	@Column({
		name: 'level_education',
		nullable: true
	})
	levelEducation: string

	@Column({
		name: 'occupation',
		nullable: true
	})
	occupation: string

	@Column({
		name: 'address_township',
		nullable: true
	})
	addressTownship: string

	@Column({
		name: 'address_township_name',
		nullable: true
	})
	addressTownshipName: string

	@Column({
		name: 'geographical_origin',
		nullable: true
	})
	geographicalOrigin: string

	@Column({
		name: 'distance_to_mdm_clinic',
		type: 'integer',
		nullable: true
	})
	distanceToMdmClinic: number

	@Column({
		name: 'other_id',
		nullable: true
	})
	otherId: string

	@Column({
		name: 'counter',
		type: 'integer',
		nullable: true
	})
	counter: number

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@Column({
		name: 'date_of_saving_data',
		type: 'timestamptz',
		nullable: true
	})
	dateOfSavingData: Date

}
