// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Vcct } from './Vcct'

@Entity()
export class VcctDrugType {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  vcctTypeOfDrugs: string

  @ManyToOne(type => Vcct, vcct => vcct.vcctDrugTypes, {
    eager: true
  })
  vcct: string

  @Column({
    nullable: true
  })
  vcctDrugName: string

  @Column({
    nullable: true
  })
  vcctWayOfUse: string

}
