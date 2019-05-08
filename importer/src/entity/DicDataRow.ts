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
	OTHER = 'other', 
	BAG_MAKING = 'bag making', 
	BEAUTY_SESSIONS = 'beauty sessions', 
	DANCING = 'dancing', 
	ENGLISH_SESSIONS = 'english sessions', 
	GAME = 'game', 
	HAIT_STRAIGHT = 'hait straight', 
	KTV_MOVIE = 'ktv movie', 
	LEAFLET = 'leaflet', 
	LEGAL_COUNSELLING = 'legal counselling', 
	MASSAGE_TRAINING = 'massage training', 
	MEDIATION_SESSIONS = 'mediation sessions', 
	NAIL_POLISH = 'nail polish', 
	RELAXATION = 'relaxation', 
	SELF_ESTEEM = 'self esteem', 
	SEWING = 'sewing', 
	NUTRITIONAL_ACTIVITY = 'nutritional activity' 
}

@Entity()
export class DicDataRow {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'type',
		nullable: true,
		enum: TypeEnum
	})
	type: TypeEnum

	@Column({
		name: 'activity',
		nullable: true,
		enum: ActivityEnum
	})
	activity: ActivityEnum

	@ManyToOne(type => DicData, dicData => dicData.dicDataRows, {
		eager: true
	})
	@JoinColumn([{ name: 'dic_data_date', referencedColumnName: 'date'}])
	dicData: DicData

	@Column({
		name: 'total',
		type: 'integer',
		nullable: true
	})
	total: number

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

}
