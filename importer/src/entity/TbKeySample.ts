// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { TbKey } from './TbKey'

@Entity()
export class TbKeySample {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'sample_date',
		type: 'timestamptz'
  })
	sampleDate: Date

	@ManyToOne(type => TbKey, tbKey => tbKey.tbKeySamples, {
    eager: true
  })
	@JoinColumn([{ name: 'mdMcode', referencedColumnName: 'mdMcode'}])
	tbKey: TbKey

	@Column({
    nullable: true,
		name: 'method'
  })
	method: string

	@Column({
    nullable: true,
		name: 'result_1_h'
  })
	result1H: string

	@Column({
    nullable: true,
		name: 'result_1_r'
  })
	result1R: string

	@Column({
    nullable: true,
		name: 'result_1_e'
  })
	result1E: string

	@Column({
    nullable: true,
		name: 'result_1_s'
  })
	result1S: string

	@Column({
    nullable: true,
		name: 'result_1_amk'
  })
	result1Amk: string

	@Column({
    nullable: true,
		name: 'result_1_km'
  })
	result1Km: string

	@Column({
    nullable: true,
		name: 'result_1_cm'
  })
	result1Cm: string

	@Column({
    nullable: true,
		name: 'result_1_fq'
  })
	result1Fq: string

	@Column({
    nullable: true,
		name: 'result_1_other'
  })
	result1Other: string

	@Column({
    nullable: true,
		name: 'result_2_h'
  })
	result2H: string

	@Column({
    nullable: true,
		name: 'result_2_r'
  })
	result2R: string

	@Column({
    nullable: true,
		name: 'result_2_e'
  })
	result2E: string

	@Column({
    nullable: true,
		name: 'result_2_s'
  })
	result2S: string

	@Column({
    nullable: true,
		name: 'result_2_amk'
  })
	result2Amk: string

	@Column({
    nullable: true,
		name: 'result_2_km'
  })
	result2Km: string

	@Column({
    nullable: true,
		name: 'result_2_cm'
  })
	result2Cm: string

	@Column({
    nullable: true,
		name: 'result_2_fq'
  })
	result2Fq: string

	@Column({
    nullable: true,
		name: 'result_2_other'
  })
	result2Other: string

	@Column({
    nullable: true,
		name: 'result_3_h'
  })
	result3H: string

	@Column({
    nullable: true,
		name: 'result_3_r'
  })
	result3R: string

	@Column({
    nullable: true,
		name: 'result_3_e'
  })
	result3E: string

	@Column({
    nullable: true,
		name: 'result_3_s'
  })
	result3S: string

	@Column({
    nullable: true,
		name: 'result_3_amk'
  })
	result3Amk: string

	@Column({
    nullable: true,
		name: 'result_3_km'
  })
	result3Km: string

	@Column({
    nullable: true,
		name: 'result_3_cm'
  })
	result3Cm: string

	@Column({
    nullable: true,
		name: 'result_3_fq'
  })
	result3Fq: string

	@Column({
    nullable: true,
		name: 'result_3_other'
  })
	result3Other: string

	@Column({
    nullable: true,
		name: 'result_4_h'
  })
	result4H: string

	@Column({
    nullable: true,
		name: 'result_4_r'
  })
	result4R: string

	@Column({
    nullable: true,
		name: 'result_4_e'
  })
	result4E: string

	@Column({
    nullable: true,
		name: 'result_4_s'
  })
	result4S: string

	@Column({
    nullable: true,
		name: 'result_4_amk'
  })
	result4Amk: string

	@Column({
    nullable: true,
		name: 'result_4_km'
  })
	result4Km: string

	@Column({
    nullable: true,
		name: 'result_4_cm'
  })
	result4Cm: string

	@Column({
    nullable: true,
		name: 'result_4_fq'
  })
	result4Fq: string

	@Column({
    nullable: true,
		name: 'result_4_other'
  })
	result4Other: string

	@Column({
    nullable: true,
		name: 'result_5_h'
  })
	result5H: string

	@Column({
    nullable: true,
		name: 'result_5_r'
  })
	result5R: string

	@Column({
    nullable: true,
		name: 'result_5_e'
  })
	result5E: string

	@Column({
    nullable: true,
		name: 'result_5_s'
  })
	result5S: string

	@Column({
    nullable: true,
		name: 'result_5_amk'
  })
	result5Amk: string

	@Column({
    nullable: true,
		name: 'result_5_km'
  })
	result5Km: string

	@Column({
    nullable: true,
		name: 'result_5_cm'
  })
	result5Cm: string

	@Column({
    nullable: true,
		name: 'result_5_fq'
  })
	result5Fq: string

	@Column({
    nullable: true,
		name: 'result_5_other'
  })
	result5Other: string

}
