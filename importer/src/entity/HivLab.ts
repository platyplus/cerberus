// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class HivLab {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'hiv_mdm_lab',
		type: 'text',
		nullable: true
	})
	hivMdmLab: string

	@Column({
		name: 'mdm_code',
		type: 'text',
		nullable: true
	})
	mdmCode: string

	@Column({
		name: 'sex',
		type: 'text',
		nullable: true
	})
	sex: string

	@Column({
		name: 'age',
		type: 'integer',
		nullable: true
	})
	age: number

	@Column({
		name: 'patient_target',
		type: 'text',
		nullable: true
	})
	patientTarget: string

	@Column({
		name: 'other_ingo_no',
		type: 'text',
		nullable: true
	})
	otherIngoNo: string

	@Column({
		name: 'ingo_sex',
		type: 'text',
		nullable: true
	})
	ingoSex: string

	@Column({
		name: 'ingo_age',
		type: 'integer',
		nullable: true
	})
	ingoAge: number

	@Column({
		name: 'hiv_test_done_in',
		type: 'text',
		nullable: true
	})
	hivTestDoneIn: string

	@Column({
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'hiv_done_by',
		type: 'text',
		nullable: true
	})
	hivDoneBy: string

	@Column({
		name: 'hiv_new_patient',
		type: 'text',
		nullable: true
	})
	hivNewPatient: string

	@Column({
		name: 'hiv_test',
		type: 'text',
		nullable: true
	})
	hivTest: string

	@Column({
		name: 'hiv_determinded_result',
		type: 'text',
		nullable: true
	})
	hivDetermindedResult: string

	@Column({
		name: 'hiv_unigold_result',
		type: 'text',
		nullable: true
	})
	hivUnigoldResult: string

	@Column({
		name: 'hiv_stat_pak',
		type: 'text',
		nullable: true
	})
	hivStatPak: string

	@Column({
		name: 'hiv_capillus_result',
		type: 'text',
		nullable: true
	})
	hivCapillusResult: string

	@Column({
		name: 'hiv_mdm_result',
		type: 'text',
		nullable: true
	})
	hivMdmResult: string

	@Column({
		name: 'ref_sample_date',
		type: 'timestamptz',
		nullable: true
	})
	refSampleDate: Date

	@Column({
		name: 'hiv_ref_test',
		type: 'text',
		nullable: true
	})
	hivRefTest: string

	@Column({
		name: 'hiv_ref_determinded_result',
		type: 'text',
		nullable: true
	})
	hivRefDetermindedResult: string

	@Column({
		name: 'hiv_statpak_result',
		type: 'text',
		nullable: true
	})
	hivStatpakResult: string

	@Column({
		name: 'hiv_elisa_result',
		type: 'text',
		nullable: true
	})
	hivElisaResult: string

	@Column({
		name: 'hiv_serodia_result',
		type: 'text',
		nullable: true
	})
	hivSerodiaResult: string

	@Column({
		name: 'hiv_immunocomb_result',
		type: 'text',
		nullable: true
	})
	hivImmunocombResult: string

	@Column({
		name: 'hiv_western_blot_result',
		type: 'text',
		nullable: true
	})
	hivWesternBlotResult: string

	@Column({
		name: 'hiv_conclusion',
		type: 'text',
		nullable: true
	})
	hivConclusion: string

	@Column({
		name: 'hiv_rpr_new_patient',
		type: 'text',
		nullable: true
	})
	hivRprNewPatient: string

	@Column({
		name: 'hiv_syphillis_ict',
		type: 'text',
		nullable: true
	})
	hivSyphillisIct: string

	@Column({
		name: 'hiv_rpr',
		type: 'text',
		nullable: true
	})
	hivRpr: string

	@Column({
		name: 'hiv_rpr_dilution',
		type: 'text',
		nullable: true
	})
	hivRprDilution: string

	@Column({
		name: 'comment',
		type: 'text',
		nullable: true
	})
	comment: string

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@Column({
		name: 'saving_date',
		type: 'timestamptz',
		nullable: true
	})
	savingDate: Date

}
