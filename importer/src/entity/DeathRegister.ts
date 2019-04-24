// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class DeathRegister {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  mdMcode: string

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
		type: 'integer'
  })
  a05Age: number

  @Column({
    nullable: true
  })
  a07PatientTarget: string

  @Column({
    nullable: true
  })
  address: string

  @Column({
    nullable: true
  })
  plh: string

  @Column({
    nullable: true
  })
  onAntiTb: string

  @Column({
    nullable: true
  })
  onArt: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  expiredDate: Date

  @Column({
    nullable: true
  })
  placeOfPatientExpired: string

  @Column({
    nullable: true
  })
  causeOfDeath: string

  @Column({
    nullable: true
  })
  hivRelated: string

  @Column({
    nullable: true,
		type: 'integer'
  })
  verify: number

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  dateOfSaving: Date

}
