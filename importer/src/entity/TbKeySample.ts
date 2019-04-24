// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { TbKey } from './TbKey'

@Entity()
export class TbKeySample {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  sampleDate: Date

  @ManyToOne(type => TbKey, tbKey => tbKey.tbKeySamples, {
    eager: true
  })
  tbKey: string

  @Column({
    nullable: true
  })
  method: string

  @Column({
    nullable: true
  })
  result1H: string

  @Column({
    nullable: true
  })
  result1R: string

  @Column({
    nullable: true
  })
  result1E: string

  @Column({
    nullable: true
  })
  result1S: string

  @Column({
    nullable: true
  })
  result1Amk: string

  @Column({
    nullable: true
  })
  result1Km: string

  @Column({
    nullable: true
  })
  result1Cm: string

  @Column({
    nullable: true
  })
  result1Fq: string

  @Column({
    nullable: true
  })
  result1Other: string

  @Column({
    nullable: true
  })
  result2H: string

  @Column({
    nullable: true
  })
  result2R: string

  @Column({
    nullable: true
  })
  result2E: string

  @Column({
    nullable: true
  })
  result2S: string

  @Column({
    nullable: true
  })
  result2Amk: string

  @Column({
    nullable: true
  })
  result2Km: string

  @Column({
    nullable: true
  })
  result2Cm: string

  @Column({
    nullable: true
  })
  result2Fq: string

  @Column({
    nullable: true
  })
  result2Other: string

  @Column({
    nullable: true
  })
  result3H: string

  @Column({
    nullable: true
  })
  result3R: string

  @Column({
    nullable: true
  })
  result3E: string

  @Column({
    nullable: true
  })
  result3S: string

  @Column({
    nullable: true
  })
  result3Amk: string

  @Column({
    nullable: true
  })
  result3Km: string

  @Column({
    nullable: true
  })
  result3Cm: string

  @Column({
    nullable: true
  })
  result3Fq: string

  @Column({
    nullable: true
  })
  result3Other: string

  @Column({
    nullable: true
  })
  result4H: string

  @Column({
    nullable: true
  })
  result4R: string

  @Column({
    nullable: true
  })
  result4E: string

  @Column({
    nullable: true
  })
  result4S: string

  @Column({
    nullable: true
  })
  result4Amk: string

  @Column({
    nullable: true
  })
  result4Km: string

  @Column({
    nullable: true
  })
  result4Cm: string

  @Column({
    nullable: true
  })
  result4Fq: string

  @Column({
    nullable: true
  })
  result4Other: string

  @Column({
    nullable: true
  })
  result5H: string

  @Column({
    nullable: true
  })
  result5R: string

  @Column({
    nullable: true
  })
  result5E: string

  @Column({
    nullable: true
  })
  result5S: string

  @Column({
    nullable: true
  })
  result5Amk: string

  @Column({
    nullable: true
  })
  result5Km: string

  @Column({
    nullable: true
  })
  result5Cm: string

  @Column({
    nullable: true
  })
  result5Fq: string

  @Column({
    nullable: true
  })
  result5Other: string

}
