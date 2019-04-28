// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class TbSputum {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'tb_sputum_smear'
  })
	tbSputumSmear: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.tbSputums, {
    eager: true
  })
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
    nullable: true,
		name: 'tb_sputum_xpert'
  })
	tbSputumXpert: string

	@Column({
    nullable: true,
		name: 'tb_sputum_culture'
  })
	tbSputumCulture: string

	@Column({
    nullable: true,
		name: 'tb_sputum_h'
  })
	tbSputumH: string

	@Column({
    nullable: true,
		name: 'tb_sputum_r'
  })
	tbSputumR: string

	@Column({
    nullable: true,
		name: 'tb_sputum_s'
  })
	tbSputumS: string

	@Column({
    nullable: true,
		name: 'tb_sputum_e'
  })
	tbSputumE: string

	@Column({
    nullable: true,
		name: 'tb_sputum_lpa'
  })
	tbSputumLpa: string

	@Column({
    nullable: true,
		name: 'tb_sputum_sample_date',
		type: 'timestamptz'
  })
	tbSputumSampleDate: Date

	@Column({
    nullable: true,
		name: 'tb_other_sample'
  })
	tbOtherSample: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_smear'
  })
	tbOtherSample1Smear: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_xpert'
  })
	tbOtherSample1Xpert: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_culture'
  })
	tbOtherSample1Culture: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_h'
  })
	tbOtherSample1H: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_r'
  })
	tbOtherSample1R: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_s'
  })
	tbOtherSample1S: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_e'
  })
	tbOtherSample1E: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_lpa'
  })
	tbOtherSample1Lpa: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_1_sample_date',
		type: 'timestamptz'
  })
	tbOtherSample1SampleDate: Date

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_smear'
  })
	tbOtherSample2Smear: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_xpert'
  })
	tbOtherSample2Xpert: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_culture'
  })
	tbOtherSample2Culture: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_h'
  })
	tbOtherSample2H: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_r'
  })
	tbOtherSample2R: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_s'
  })
	tbOtherSample2S: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_e'
  })
	tbOtherSample2E: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_lpa'
  })
	tbOtherSample2Lpa: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_2_sample_date',
		type: 'timestamptz'
  })
	tbOtherSample2SampleDate: Date

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_smear'
  })
	tbOtherSample3Smear: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_xpert'
  })
	tbOtherSample3Xpert: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_culture'
  })
	tbOtherSample3Culture: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_h'
  })
	tbOtherSample3H: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_r'
  })
	tbOtherSample3R: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_s'
  })
	tbOtherSample3S: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_e'
  })
	tbOtherSample3E: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_lpa'
  })
	tbOtherSample3Lpa: string

	@Column({
    nullable: true,
		name: 'tb_other_sample_3_sample_date',
		type: 'timestamptz'
  })
	tbOtherSample3SampleDate: Date

}
