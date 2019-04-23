// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class DeathRegister {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  mdMcode: string

  @Column()
  a01PatientName: string

  @Column()
  a02FatherName: string

  @Column()
  a03Sexe: string

  @Column()
  a05Age: string

  @Column()
  a07PatientTarget: string

  @Column()
  address: string

  @Column()
  plh: string

  @Column()
  onAntiTb: string

  @Column()
  onArt: string

  @Column()
  expiredDate: string

  @Column()
  placeOfPatientExpired: string

  @Column()
  causeOfDeath: string

  @Column()
  hivRelated: string

  @Column()
  verify: string

  @Column()
  dateOfSaving: string

}
