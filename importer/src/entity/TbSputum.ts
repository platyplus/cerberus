// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class TbSputum {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.tbSputums, {
		eager: true
	})
	@JoinColumn([{ name: 'key', referencedColumnName: 'key'}])
	artConsultationPlha: ArtConsultationPlha

	@Column({
		name: 'tb_sputum_xpert',
		nullable: true
	})
	tbSputumXpert: string

	@Column({
		name: 'tb_sputum_culture',
		nullable: true
	})
	tbSputumCulture: string

	@Column({
		name: 'tb_sputum_h',
		nullable: true
	})
	tbSputumH: string

	@Column({
		name: 'tb_sputum_r',
		nullable: true
	})
	tbSputumR: string

	@Column({
		name: 'tb_sputum_s',
		nullable: true
	})
	tbSputumS: string

	@Column({
		name: 'tb_sputum_e',
		nullable: true
	})
	tbSputumE: string

	@Column({
		name: 'tb_sputum_lpa',
		nullable: true
	})
	tbSputumLpa: string

	@Column({
		name: 'tb_sputum_sample_date',
		type: 'timestamptz',
		nullable: true
	})
	tbSputumSampleDate: Date

	@Column({
		name: 'tb_other_sample',
		nullable: true
	})
	tbOtherSample: string

	@Column({
		name: 'tb_other_sample_1_smear',
		nullable: true
	})
	tbOtherSample1Smear: string

	@Column({
		name: 'tb_other_sample_1_xpert',
		nullable: true
	})
	tbOtherSample1Xpert: string

	@Column({
		name: 'tb_other_sample_1_culture',
		nullable: true
	})
	tbOtherSample1Culture: string

	@Column({
		name: 'tb_other_sample_1_h',
		nullable: true
	})
	tbOtherSample1H: string

	@Column({
		name: 'tb_other_sample_1_r',
		nullable: true
	})
	tbOtherSample1R: string

	@Column({
		name: 'tb_other_sample_1_s',
		nullable: true
	})
	tbOtherSample1S: string

	@Column({
		name: 'tb_other_sample_1_e',
		nullable: true
	})
	tbOtherSample1E: string

	@Column({
		name: 'tb_other_sample_1_lpa',
		nullable: true
	})
	tbOtherSample1Lpa: string

	@Column({
		name: 'tb_other_sample_1_sample_date',
		type: 'timestamptz',
		nullable: true
	})
	tbOtherSample1SampleDate: Date

	@Column({
		name: 'tb_other_sample_2_smear',
		nullable: true
	})
	tbOtherSample2Smear: string

	@Column({
		name: 'tb_other_sample_2_xpert',
		nullable: true
	})
	tbOtherSample2Xpert: string

	@Column({
		name: 'tb_other_sample_2_culture',
		nullable: true
	})
	tbOtherSample2Culture: string

	@Column({
		name: 'tb_other_sample_2_h',
		nullable: true
	})
	tbOtherSample2H: string

	@Column({
		name: 'tb_other_sample_2_r',
		nullable: true
	})
	tbOtherSample2R: string

	@Column({
		name: 'tb_other_sample_2_s',
		nullable: true
	})
	tbOtherSample2S: string

	@Column({
		name: 'tb_other_sample_2_e',
		nullable: true
	})
	tbOtherSample2E: string

	@Column({
		name: 'tb_other_sample_2_lpa',
		nullable: true
	})
	tbOtherSample2Lpa: string

	@Column({
		name: 'tb_other_sample_2_sample_date',
		type: 'timestamptz',
		nullable: true
	})
	tbOtherSample2SampleDate: Date

	@Column({
		name: 'tb_other_sample_3_smear',
		nullable: true
	})
	tbOtherSample3Smear: string

	@Column({
		name: 'tb_other_sample_3_xpert',
		nullable: true
	})
	tbOtherSample3Xpert: string

	@Column({
		name: 'tb_other_sample_3_culture',
		nullable: true
	})
	tbOtherSample3Culture: string

	@Column({
		name: 'tb_other_sample_3_h',
		nullable: true
	})
	tbOtherSample3H: string

	@Column({
		name: 'tb_other_sample_3_r',
		nullable: true
	})
	tbOtherSample3R: string

	@Column({
		name: 'tb_other_sample_3_s',
		nullable: true
	})
	tbOtherSample3S: string

	@Column({
		name: 'tb_other_sample_3_e',
		nullable: true
	})
	tbOtherSample3E: string

	@Column({
		name: 'tb_other_sample_3_lpa',
		nullable: true
	})
	tbOtherSample3Lpa: string

	@Column({
		name: 'tb_other_sample_3_sample_date',
		type: 'timestamptz',
		nullable: true
	})
	tbOtherSample3SampleDate: Date

}
