// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class StiLab {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'sti_mdm_lab',
		type: 'text',
		nullable: true
	})
	stiMdmLab: string

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
		name: 'sti_sample',
		type: 'text',
		nullable: true
	})
	stiSample: string

	@Column({
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'sti_done_by',
		type: 'text',
		nullable: true
	})
	stiDoneBy: string

	@Column({
		name: 'sti_chlamydia_test',
		type: 'text',
		nullable: true
	})
	stiChlamydiaTest: string

	@Column({
		name: 'sti_vaginal_smear_test',
		type: 'text',
		nullable: true
	})
	stiVaginalSmearTest: string

	@Column({
		name: 'sti_vaginal_smear_ph',
		type: 'integer',
		nullable: true
	})
	stiVaginalSmearPH: number

	@Column({
		name: 'sti_vaginal_smear_sniff_test',
		type: 'text',
		nullable: true
	})
	stiVaginalSmearSniffTest: string

	@Column({
		name: 'sti_wet_mount',
		type: 'text',
		nullable: true
	})
	stiWetMount: string

	@Column({
		name: 'sti_wm_wbc_result',
		type: 'text',
		nullable: true
	})
	stiWmWbcResult: string

	@Column({
		name: 'sti_wm_clue_cells_result',
		type: 'text',
		nullable: true
	})
	stiWmClueCellsResult: string

	@Column({
		name: 'sti_endo',
		type: 'text',
		nullable: true
	})
	stiEndo: string

	@Column({
		name: 'sti_endo_wbc_result',
		type: 'text',
		nullable: true
	})
	stiEndoWbcResult: string

	@Column({
		name: 'sti_endo_clue_cells_result',
		type: 'text',
		nullable: true
	})
	stiEndoClueCellsResult: string

	@Column({
		name: 'sti_endo_other_result',
		type: 'text',
		nullable: true
	})
	stiEndoOtherResult: string

	@Column({
		name: 'sti_endo_other_text',
		type: 'text',
		nullable: true
	})
	stiEndoOtherText: string

	@Column({
		name: 'sti_posterior_fornix',
		type: 'text',
		nullable: true
	})
	stiPosteriorFornix: string

	@Column({
		name: 'sti_p_fornix_wbc_result',
		type: 'text',
		nullable: true
	})
	stiPFornixWbcResult: string

	@Column({
		name: 'sti_p_fornix_clue_cells_result',
		type: 'text',
		nullable: true
	})
	stiPFornixClueCellsResult: string

	@Column({
		name: 'sti_p_fornix_other_result',
		type: 'text',
		nullable: true
	})
	stiPFornixOtherResult: string

	@Column({
		name: 'sti_p_fornix_other_text',
		type: 'text',
		nullable: true
	})
	stiPFornixOtherText: string

	@Column({
		name: 'sti_urethra',
		type: 'text',
		nullable: true
	})
	stiUrethra: string

	@Column({
		name: 'sti_urethra_wbc_result',
		type: 'text',
		nullable: true
	})
	stiUrethraWbcResult: string

	@Column({
		name: 'sti_urethra_clue_cells_result',
		type: 'text',
		nullable: true
	})
	stiUrethraClueCellsResult: string

	@Column({
		name: 'sti_urethra_other_result',
		type: 'text',
		nullable: true
	})
	stiUrethraOtherResult: string

	@Column({
		name: 'sti_urethra_other_text',
		type: 'text',
		nullable: true
	})
	stiUrethraOtherText: string

	@Column({
		name: 'sti_u_smear_m',
		type: 'text',
		nullable: true
	})
	stiUSmearM: string

	@Column({
		name: 'sti_u_smear_m_gram',
		type: 'text',
		nullable: true
	})
	stiUSmearMGram: string

	@Column({
		name: 'sti_u_smear_m_gram_wbc_result',
		type: 'text',
		nullable: true
	})
	stiUSmearMGramWbcResult: string

	@Column({
		name: 'sti_u_smear_m_gram_other_result',
		type: 'text',
		nullable: true
	})
	stiUSmearMGramOtherResult: string

	@Column({
		name: 'sti_u_smear_m_giemsa_result',
		type: 'text',
		nullable: true
	})
	stiUSmearMGiemsaResult: string

	@Column({
		name: 'sti_u_smear_m_giemsa_other',
		type: 'text',
		nullable: true
	})
	stiUSmearMGiemsaOther: string

	@Column({
		name: 'sti_urine',
		type: 'text',
		nullable: true
	})
	stiUrine: string

	@Column({
		name: 'sti_urine_other',
		type: 'text',
		nullable: true
	})
	stiUrineOther: string

	@Column({
		name: 'sti_g_ulcer',
		type: 'text',
		nullable: true
	})
	stiGUlcer: string

	@Column({
		name: 'sti_g_ulcer_gram_result',
		type: 'text',
		nullable: true
	})
	stiGUlcerGramResult: string

	@Column({
		name: 'sti_g_ulcer_gram_fungal_element',
		type: 'text',
		nullable: true
	})
	stiGUlcerGramFungalElement: string

	@Column({
		name: 'sti_g_ulcer_giemsa_result',
		type: 'text',
		nullable: true
	})
	stiGUlcerGiemsaResult: string

	@Column({
		name: 'sti_g_ulcer_giemsa_other',
		type: 'text',
		nullable: true
	})
	stiGUlcerGiemsaOther: string

	@Column({
		name: 'sti_anal',
		type: 'text',
		nullable: true
	})
	stiAnal: string

	@Column({
		name: 'sti_anal_gram_result',
		type: 'text',
		nullable: true
	})
	stiAnalGramResult: string

	@Column({
		name: 'sti_anal_gram_other',
		type: 'text',
		nullable: true
	})
	stiAnalGramOther: string

	@Column({
		name: 'sit_anal_giemsa_result',
		type: 'text',
		nullable: true
	})
	sitAnalGiemsaResult: string

	@Column({
		name: 'sti_anal_giemsa_other',
		type: 'text',
		nullable: true
	})
	stiAnalGiemsaOther: string

	@Column({
		name: 'sti_conclusion',
		type: 'text',
		nullable: true
	})
	stiConclusion: string

	@Column({
		name: 'sti_conclusion_other',
		type: 'text',
		nullable: true
	})
	stiConclusionOther: string

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

	@Column({
		name: 'key',
		type: 'text',
		nullable: true
	})
	key: string

}
