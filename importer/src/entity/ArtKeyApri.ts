// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { ArtKey } from './ArtKey'

@Entity()
export class ArtKeyApri {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
    nullable: true,
		name: 'apri_date',
		type: 'timestamptz'
  })
	apriDate: Date

	@ManyToOne(type => ArtKey, artKey => artKey.artKeyApris, {
    eager: true
  })
	@JoinColumn([{ name: 'mdMcode', referencedColumnName: 'mdMcode'}])
	artKey: ArtKey

	@Column({
    nullable: true,
		name: 'apri_result',
		type: 'integer'
  })
	apriResult: number

}
