// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class TbSputum {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({
    nullable: true
  })
  tbSputumSmear: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.tbSputums, {
    eager: true
  })
  artConsultationPlha: string

  @Column({
    nullable: true
  })
  tbSputumXpert: string

  @Column({
    nullable: true
  })
  tbSputumCulture: string

  @Column({
    nullable: true
  })
  tbSputumH: string

  @Column({
    nullable: true
  })
  tbSputumR: string

  @Column({
    nullable: true
  })
  tbSputumS: string

  @Column({
    nullable: true
  })
  tbSputumE: string

  @Column({
    nullable: true
  })
  tbSputumLpa: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  tbSputumSampleDate: Date

  @Column({
    nullable: true
  })
  tbOtherSample: string

  @Column({
    nullable: true
  })
  tbOtherSample1Smear: string

  @Column({
    nullable: true
  })
  tbOtherSample1Xpert: string

  @Column({
    nullable: true
  })
  tbOtherSample1Culture: string

  @Column({
    nullable: true
  })
  tbOtherSample1H: string

  @Column({
    nullable: true
  })
  tbOtherSample1R: string

  @Column({
    nullable: true
  })
  tbOtherSample1S: string

  @Column({
    nullable: true
  })
  tbOtherSample1E: string

  @Column({
    nullable: true
  })
  tbOtherSample1Lpa: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  tbOtherSample1SampleDate: Date

  @Column({
    nullable: true
  })
  tbOtherSample2Smear: string

  @Column({
    nullable: true
  })
  tbOtherSample2Xpert: string

  @Column({
    nullable: true
  })
  tbOtherSample2Culture: string

  @Column({
    nullable: true
  })
  tbOtherSample2H: string

  @Column({
    nullable: true
  })
  tbOtherSample2R: string

  @Column({
    nullable: true
  })
  tbOtherSample2S: string

  @Column({
    nullable: true
  })
  tbOtherSample2E: string

  @Column({
    nullable: true
  })
  tbOtherSample2Lpa: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  tbOtherSample2SampleDate: Date

  @Column({
    nullable: true
  })
  tbOtherSample3Smear: string

  @Column({
    nullable: true
  })
  tbOtherSample3Xpert: string

  @Column({
    nullable: true
  })
  tbOtherSample3Culture: string

  @Column({
    nullable: true
  })
  tbOtherSample3H: string

  @Column({
    nullable: true
  })
  tbOtherSample3R: string

  @Column({
    nullable: true
  })
  tbOtherSample3S: string

  @Column({
    nullable: true
  })
  tbOtherSample3E: string

  @Column({
    nullable: true
  })
  tbOtherSample3Lpa: string

  @Column({
    nullable: true,
		type: 'timestamptz'
  })
  tbOtherSample3SampleDate: Date

}
