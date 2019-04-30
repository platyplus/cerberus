// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class PatientGeneralData {
	@Column({
		type: 'string',
		nullable: true,
		name: 'mdm_location'
	})
	mdmLocation: string

	@PrimaryColumn({
		type: 'string',
		name: 'mdm_code'
	})
	mdmCode: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'serial_number'
	})
	serialNumber: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'registration_date'
	})
	registrationDate: Date

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_name'
	})
	patientName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'father_name'
	})
	fatherName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'sex'
	})
	sex: string

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date_of_birth'
	})
	dateOfBirth: Date

	@Column({
		type: 'integer',
		nullable: true,
		name: 'age'
	})
	age: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'date_of_birth_estimated'
	})
	dateOfBirthEstimated: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'place_of_birth'
	})
	placeOfBirth: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'height'
	})
	height: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'patient_target'
	})
	patientTarget: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'marital_status'
	})
	maritalStatus: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'level_education'
	})
	levelEducation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'occupation'
	})
	occupation: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'address_township'
	})
	addressTownship: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'address_township_name'
	})
	addressTownshipName: string

	@Column({
		type: 'string',
		nullable: true,
		name: 'geographical_origin'
	})
	geographicalOrigin: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'distance_to_mdm_clinic'
	})
	distanceToMdmClinic: number

	@Column({
		type: 'string',
		nullable: true,
		name: 'other_id'
	})
	otherId: string

	@Column({
		type: 'integer',
		nullable: true,
		name: 'counter'
	})
	counter: number

	@Column({
		type: 'integer',
		nullable: true,
		name: 'verify'
	})
	verify: number

	@Column({
		type: 'timestamptz',
		nullable: true,
		name: 'date_of_saving_data'
	})
	dateOfSavingData: Date

}
