// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class PatientGeneralData {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  mdMlocation: string

  @Column()
  mdMcode: string

  @Column()
  serialNumber: string

  @Column()
  a00RegistrationDate: string

  @Column()
  a01PatientName: string

  @Column()
  a02FatherName: string

  @Column()
  a03Sexe: string

  @Column()
  a041DateOfBirth: string

  @Column()
  a05Age: string

  @Column()
  a052DateOfBirthEstimated: string

  @Column()
  a06PlaceOfBirth: string

  @Column()
  a06AHeight: string

  @Column()
  a07PatientTarget: string

  @Column()
  a07AMaritalStatus: string

  @Column()
  a08LevelEducation: string

  @Column()
  a09Occupation: string

  @Column()
  a10AddressTownship: string

  @Column()
  a10AddressTownshipName: string

  @Column()
  a11GeographicalOrigin: string

  @Column()
  a12DistanceToMdMclinic: string

  @Column()
  a13OtherId: string

  @Column()
  counter: string

  @Column()
  verify: string

  @Column()
  a20DateOfSavingData: string

}
