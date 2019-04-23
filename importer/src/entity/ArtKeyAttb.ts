// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyAttb {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  tb: string

  @ManyToOne(type => ArtKey, artKey => artKey.artKeyAttbs)
  artKey: ArtKey

  @Column()
  attbRegimen: string

  @Column()
  dateOfDiagnosis: string

  @Column()
  endDateOfAttbip: string

  @Column()
  endDateOfAttbcp: string

  @Column()
  dateofDiagnosis: string

}
