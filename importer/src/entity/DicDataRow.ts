// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { DicData } from './DicData'

export enum TypeEnum { 
	EDUCATIONAL = 'educational', 
	RECREATIONAL = 'recreational' 
}

export enum ActivityEnum { 
	ART_SESSIONS = 'art sessions', 
	SUPPORT_GROUP = 'support group', 
	BOMB_GROUP = 'bomb group', 
	CONTRACEPTION = 'contraception', 
	DICE_TO_KNOW = 'dice to know', 
	EDUCATIONAL_GAMES = 'educational games', 
	FEMALE_CONDOM = 'female condom', 
	FOCUS_GROUP = 'focus group', 
	MALE_CONDOM = 'male condom', 
	MONTHLY_WORKSHOP = 'monthly workshop', 
	MSM_SUPPORT_GROUP = 'msm support group', 
	NUTRITION = 'nutrition', 
	PLHA_SESSIONS = 'plha sessions', 
	PLHA_SUPPORT_GROUP = 'plha support group', 
	ROLE_PLAYS = 'role plays', 
	SAFER_SEX = 'safer sex', 
	STIS_HIV = 'stis hiv', 
	SW_SUPPORT_GROUP = 'sw support group', 
	TB_SESSION = 'tb session', 
	V_PEER_TRAINING = 'v peer training', 
	OTHER = 'other' 
}

@Entity()
export class DicDataRow {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'type',
		nullable: true,
		enum: ['educational', 'recreational']
	})
	type: TypeEnum

	@Column({
		name: 'activity',
		nullable: true,
		enum: ['art sessions', 'support group', 'bomb group', 'contraception', 'dice to know', 'educational games', 'female condom', 'focus group', 'male condom', 'monthly workshop', 'msm support group', 'nutrition', 'plha sessions', 'plha support group', 'role plays', 'safer sex', 'stis hiv', 'sw support group', 'tb session', 'v peer training', 'other']
	})
	activity: ActivityEnum

	@ManyToOne(type => DicData, dicData => dicData.dicDataRows, {
		eager: true
	})
	@JoinColumn([{ name: 'date', referencedColumnName: 'date'}])
	dicData: DicData

	@Column({
		name: 'new_sw',
		type: 'integer',
		nullable: true
	})
	newSw: number

	@Column({
		name: 'new_msm',
		type: 'integer',
		nullable: true
	})
	newMsm: number

	@Column({
		name: 'new_other',
		type: 'integer',
		nullable: true
	})
	newOther: number

	@Column({
		name: 'repeater_sw',
		type: 'integer',
		nullable: true
	})
	repeaterSw: number

	@Column({
		name: 'repeater_msm',
		type: 'integer',
		nullable: true
	})
	repeaterMsm: number

	@Column({
		name: 'repeater_other',
		type: 'integer',
		nullable: true
	})
	repeaterOther: number

	@Column({
		name: 'total',
		type: 'integer',
		nullable: true
	})
	total: number

}
