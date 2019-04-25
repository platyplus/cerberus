// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class DeathRegister {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		name: 'md_mcode'
  })
  mdMcode: string

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
		name: 'a_05_age',
		type: 'integer'
  })
  a05Age: number

  @Column({
    nullable: true,
		name: 'a_07_patient_target'
  })
  a07PatientTarget: string

  @Column({
    nullable: true,
		name: 'address'
  })
  address: string

  @Column({
    nullable: true,
		name: 'plh'
  })
  plh: string

  @Column({
    nullable: true,
		name: 'on_anti_tb'
  })
  onAntiTb: string

  @Column({
    nullable: true,
		name: 'on_art'
  })
  onArt: string

  @Column({
    nullable: true,
		name: 'expired_date',
		type: 'timestamptz'
  })
  expiredDate: Date

  @Column({
    nullable: true,
		name: 'place_of_patient_expired'
  })
  placeOfPatientExpired: string

  @Column({
    nullable: true,
		name: 'cause_of_death'
  })
  causeOfDeath: string

  @Column({
    nullable: true,
		name: 'hiv_related'
  })
  hivRelated: string

  @Column({
    nullable: true,
		name: 'verify',
		type: 'integer'
  })
  verify: number

  @Column({
    nullable: true,
		name: 'date_of_saving',
		type: 'timestamptz'
  })
  dateOfSaving: Date

}
