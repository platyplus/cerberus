// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, Column } from 'typeorm'
import { Vcct } from './Vcct'

@Entity()
export class VcctDrugType {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  vcctTypeOfDrugs: string

  @ManyToOne(type => Vcct, vcct => vcct.vcctDrugTypes)
  vcct: Vcct

  @Column()
  vcctDrugName: string

  @Column()
  vcctWayOfUse: string

}
