import { Entity, Column } from 'typeorm'
import { ArtConsultationPlha } from './ArtConsultationPlha'

@Entity()
export class TbSputum {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column()
  tbSputumSmear: string

  @ManyToOne(type => ArtConsultationPlha, artConsultationPlha => artConsultationPlha.tbSputums)
  artConsultationPlha: ArtConsultationPlha

  @Column()
  tbSputumXpert: string

  @Column()
  tbSputumCulture: string

  @Column()
  tbSputumH: string

  @Column()
  tbSputumR: string

  @Column()
  tbSputumS: string

  @Column()
  tbSputumE: string

  @Column()
  tbSputumLpa: string

  @Column()
  tbSputumSampleDate: string

  @Column()
  tbOtherSample: string

  @Column()
  tbOtherSample1Smear: string

  @Column()
  tbOtherSample1Xpert: string

  @Column()
  tbOtherSample1Culture: string

  @Column()
  tbOtherSample1H: string

  @Column()
  tbOtherSample1R: string

  @Column()
  tbOtherSample1S: string

  @Column()
  tbOtherSample1E: string

  @Column()
  tbOtherSample1Lpa: string

  @Column()
  tbOtherSample1SampleDate: string

  @Column()
  tbOtherSample2Smear: string

  @Column()
  tbOtherSample2Xpert: string

  @Column()
  tbOtherSample2Culture: string

  @Column()
  tbOtherSample2H: string

  @Column()
  tbOtherSample2R: string

  @Column()
  tbOtherSample2S: string

  @Column()
  tbOtherSample2E: string

  @Column()
  tbOtherSample2Lpa: string

  @Column()
  tbOtherSample2SampleDate: string

  @Column()
  tbOtherSample3Smear: string

  @Column()
  tbOtherSample3Xpert: string

  @Column()
  tbOtherSample3Culture: string

  @Column()
  tbOtherSample3H: string

  @Column()
  tbOtherSample3R: string

  @Column()
  tbOtherSample3S: string

  @Column()
  tbOtherSample3E: string

  @Column()
  tbOtherSample3Lpa: string

  @Column()
  tbOtherSample3SampleDate: string

}
