// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class PatientGeneralData {
	@Column({
    nullable: true,
		name: 'md_mlocation'
  })
	mdMlocation: string

	@PrimaryColumn({
    name: 'md_mcode'
  })
	mdMcode: string

	@Column({
    nullable: true,
		name: 'serial_number'
  })
	serialNumber: string

	@Column({
    nullable: true,
		name: 'a_00_registration_date',
		type: 'timestamptz'
  })
	a00RegistrationDate: Date

	@Column({
    nullable: true,
		name: 'a_01_patient_name'
  })
	a01PatientName: string

	@Column({
    nullable: true,
		name: 'a_02_father_name'
  })
	a02FatherName: string

	@Column({
    nullable: true,
		name: 'a_03_sexe'
  })
	a03Sexe: string

	@Column({
    nullable: true,
		name: 'a_041_date_of_birth',
		type: 'timestamptz'
  })
	a041DateOfBirth: Date

	@Column({
    nullable: true,
		name: 'a_05_age',
		type: 'integer'
  })
	a05Age: number

	@Column({
    nullable: true,
		name: 'a_052_date_of_birth_estimated'
  })
	a052DateOfBirthEstimated: string

	@Column({
    nullable: true,
		name: 'a_06_place_of_birth'
  })
	a06PlaceOfBirth: string

	@Column({
    nullable: true,
		name: 'a_06_a_height',
		type: 'integer'
  })
	a06AHeight: number

	@Column({
    nullable: true,
		name: 'a_07_patient_target'
  })
	a07PatientTarget: string

	@Column({
    nullable: true,
		name: 'a_07_a_marital_status'
  })
	a07AMaritalStatus: string

	@Column({
    nullable: true,
		name: 'a_08_level_education'
  })
	a08LevelEducation: string

	@Column({
    nullable: true,
		name: 'a_09_occupation'
  })
	a09Occupation: string

	@Column({
    nullable: true,
		name: 'a_10_address_township'
  })
	a10AddressTownship: string

	@Column({
    nullable: true,
		name: 'a_10_address_township_name'
  })
	a10AddressTownshipName: string

	@Column({
    nullable: true,
		name: 'a_11_geographical_origin'
  })
	a11GeographicalOrigin: string

	@Column({
    nullable: true,
		name: 'a_12_distance_to_md_mclinic',
		type: 'integer'
  })
	a12DistanceToMdMclinic: number

	@Column({
    nullable: true,
		name: 'a_13_other_id'
  })
	a13OtherId: string

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
		name: 'a_20_date_of_saving_data',
		type: 'timestamptz'
  })
	a20DateOfSavingData: Date

}
