import { Entity, Column } from 'typeorm'
import { TbKey } from './TbKey'

@Entity()
export class TbKeySample {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  sampleDate: string

  @ManyToOne(type => TbKey, tbKey => tbKey.tbKeySamples)
  tbKey: TbKey

  @Column()
  method: string

  @Column()
  result1H: string

  @Column()
  result1R: string

  @Column()
  result1E: string

  @Column()
  result1S: string

  @Column()
  result1Amk: string

  @Column()
  result1Km: string

  @Column()
  result1Cm: string

  @Column()
  result1Fq: string

  @Column()
  result1Other: string

  @Column()
  result2H: string

  @Column()
  result2R: string

  @Column()
  result2E: string

  @Column()
  result2S: string

  @Column()
  result2Amk: string

  @Column()
  result2Km: string

  @Column()
  result2Cm: string

  @Column()
  result2Fq: string

  @Column()
  result2Other: string

  @Column()
  result3H: string

  @Column()
  result3R: string

  @Column()
  result3E: string

  @Column()
  result3S: string

  @Column()
  result3Amk: string

  @Column()
  result3Km: string

  @Column()
  result3Cm: string

  @Column()
  result3Fq: string

  @Column()
  result3Other: string

  @Column()
  result4H: string

  @Column()
  result4R: string

  @Column()
  result4E: string

  @Column()
  result4S: string

  @Column()
  result4Amk: string

  @Column()
  result4Km: string

  @Column()
  result4Cm: string

  @Column()
  result4Fq: string

  @Column()
  result4Other: string

  @Column()
  result5H: string

  @Column()
  result5R: string

  @Column()
  result5E: string

  @Column()
  result5S: string

  @Column()
  result5Amk: string

  @Column()
  result5Km: string

  @Column()
  result5Cm: string

  @Column()
  result5Fq: string

  @Column()
  result5Other: string

}
