// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyAttb {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		name: 'tb'
  })
  tb: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyAttbs, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true,
		name: 'attb_regimen'
  })
  attbRegimen: string

  @Column({
    nullable: true,
		name: 'date_of_diagnosis',
		type: 'timestamptz'
  })
  dateOfDiagnosis: Date

  @Column({
    nullable: true,
		name: 'end_date_of_attbip',
		type: 'timestamptz'
  })
  endDateOfAttbip: Date

  @Column({
    nullable: true,
		name: 'end_date_of_attbcp',
		type: 'timestamptz'
  })
  endDateOfAttbcp: Date

  @Column({
    nullable: true,
		name: 'dateof_diagnosis',
		type: 'timestamptz'
  })
  dateofDiagnosis: Date

}
