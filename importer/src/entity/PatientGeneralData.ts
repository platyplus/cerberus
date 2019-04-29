// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class PatientGeneralData {
	@Column({
    nullable: true,
		name: 'mdm_location'
  })
	mdmLocation: string

	@PrimaryColumn({
    name: 'mdm_code'
  })
	mdmCode: string

	@Column({
    nullable: true,
		name: 'serial_number'
  })
	serialNumber: string

	@Column({
    nullable: true,
		name: 'registration_date',
		type: 'timestamptz'
  })
	registrationDate: Date

	@Column({
    nullable: true,
		name: 'patient_name'
  })
	patientName: string

	@Column({
    nullable: true,
		name: 'father_name'
  })
	fatherName: string

	@Column({
    nullable: true,
		name: 'sex'
  })
	sex: string

	@Column({
    nullable: true,
		name: 'date_of_birth',
		type: 'timestamptz'
  })
	dateOfBirth: Date

	@Column({
    nullable: true,
		name: 'age',
		type: 'integer'
  })
	age: number

	@Column({
    nullable: true,
		name: 'date_of_birth_estimated'
  })
	dateOfBirthEstimated: string

	@Column({
    nullable: true,
		name: 'place_of_birth'
  })
	placeOfBirth: string

	@Column({
    nullable: true,
		name: 'height',
		type: 'integer'
  })
	height: number

	@Column({
    nullable: true,
		name: 'patient_target'
  })
	patientTarget: string

	@Column({
    nullable: true,
		name: 'marital_status'
  })
	maritalStatus: string

	@Column({
    nullable: true,
		name: 'level_education'
  })
	levelEducation: string

	@Column({
    nullable: true,
		name: 'occupation'
  })
	occupation: string

	@Column({
    nullable: true,
		name: 'address_township'
  })
	addressTownship: string

	@Column({
    nullable: true,
		name: 'address_township_name'
  })
	addressTownshipName: string

	@Column({
    nullable: true,
		name: 'geographical_origin'
  })
	geographicalOrigin: string

	@Column({
    nullable: true,
		name: 'distance_to_mdm_clinic',
		type: 'integer'
  })
	distanceToMdmClinic: number

	@Column({
    nullable: true,
		name: 'other_id'
  })
	otherId: string

	@Column({
    nullable: true,
		name: 'counter',
		type: 'integer'
  })
	counter: number

	@Column({
    nullable: true,
		name: 'verify',
		type: 'integer'
  })
	verify: number

	@Column({
    nullable: true,
		name: 'date_of_saving_data',
		type: 'timestamptz'
  })
	dateOfSavingData: Date

}
