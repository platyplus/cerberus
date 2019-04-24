// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class PatientGeneralData {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  mdMlocation: string

  @Column({
    nullable: true
  })
  mdMcode: string

  @Column({
    nullable: true
  })
  serialNumber: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a00RegistrationDate: Date

  @Column({
    nullable: true
  })
  a01PatientName: string

  @Column({
    nullable: true
  })
  a02FatherName: string

  @Column({
    nullable: true
  })
  a03Sexe: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a041DateOfBirth: Date

  @Column({
    nullable: true,
		type: 'integer'
  })
  a05Age: number

  @Column({
    nullable: true
  })
  a052DateOfBirthEstimated: string

  @Column({
    nullable: true
  })
  a06PlaceOfBirth: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  a06AHeight: number

  @Column({
    nullable: true
  })
  a07PatientTarget: string

  @Column({
    nullable: true
  })
  a07AMaritalStatus: string

  @Column({
    nullable: true
  })
  a08LevelEducation: string

  @Column({
    nullable: true
  })
  a09Occupation: string

  @Column({
    nullable: true
  })
  a10AddressTownship: string

  @Column({
    nullable: true
  })
  a10AddressTownshipName: string

  @Column({
    nullable: true
  })
  a11GeographicalOrigin: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  a12DistanceToMdMclinic: number

  @Column({
    nullable: true
  })
  a13OtherId: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  counter: number

  @Column({
    nullable: true,
		type: 'integer'
  })
  verify: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  a20DateOfSavingData: Date

}
