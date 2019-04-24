// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyAttb {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  tb: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyAttbs, {
    eager: true
  })
  artKey: string

  @Column({
    nullable: true
  })
  attbRegimen: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  dateOfDiagnosis: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  endDateOfAttbip: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  endDateOfAttbcp: Date

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  dateofDiagnosis: Date

}
