// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Oi {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({
		name: 'mdm_lab',
		type: 'text',
		nullable: true
	})
	mdmLab: string

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
		name: 'oi_sample',
		type: 'text',
		nullable: true
	})
	oiSample: string

	@Column({
		name: 'sample_date',
		type: 'timestamptz',
		nullable: true
	})
	sampleDate: Date

	@Column({
		name: 'oi_done_by',
		type: 'text',
		nullable: true
	})
	oiDoneBy: string

	@Column({
		name: 'oi_skin_test',
		type: 'text',
		nullable: true
	})
	oiSkinTest: string

	@Column({
		name: 'oi_skin_wet_mount_crytp_result',
		type: 'text',
		nullable: true
	})
	oiSkinWetMountCrytpResult: string

	@Column({
		name: 'oi_skin_wet_mount_fungus_result',
		type: 'text',
		nullable: true
	})
	oiSkinWetMountFungusResult: string

	@Column({
		name: 'oi_skin_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiSkinGramSeenResult: string

	@Column({
		name: 'oi_skin_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiSkinGramUInfectionText: string

	@Column({
		name: 'oi_skin_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiSkinGiemsaSeenResult: string

	@Column({
		name: 'oi_skin_mzn_seen_result',
		type: 'text',
		nullable: true
	})
	oiSkinMznSeenResult: string

	@Column({
		name: 'oi_sputum_test',
		type: 'text',
		nullable: true
	})
	oiSputumTest: string

	@Column({
		name: 'oi_sputum_wet_mount_crypt_result',
		type: 'text',
		nullable: true
	})
	oiSputumWetMountCryptResult: string

	@Column({
		name: 'oi_sputum_wet_mount_result',
		type: 'text',
		nullable: true
	})
	oiSputumWetMountResult: string

	@Column({
		name: 'oi_sputum_wet_mount_ova',
		type: 'text',
		nullable: true
	})
	oiSputumWetMountOva: string

	@Column({
		name: 'oi_sputum_wet_mount_larvae',
		type: 'text',
		nullable: true
	})
	oiSputumWetMountLarvae: string

	@Column({
		name: 'oi_sputum_wet_mount_cyst',
		type: 'text',
		nullable: true
	})
	oiSputumWetMountCyst: string

	@Column({
		name: 'oi_sputum_wet_mount_vegf',
		type: 'text',
		nullable: true
	})
	oiSputumWetMountVegf: string

	@Column({
		name: 'oi_sputum_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiSputumGramSeenResult: string

	@Column({
		name: 'oi_sputum_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiSputumGramUInfectionText: string

	@Column({
		name: 'oi_sputum_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiSputumGiemsaSeenResult: string

	@Column({
		name: 'oi_sputum_mzn_seen_result',
		type: 'text',
		nullable: true
	})
	oiSputumMznSeenResult: string

	@Column({
		name: 'oi_nasal_test',
		type: 'text',
		nullable: true
	})
	oiNasalTest: string

	@Column({
		name: 'oi_nasal_wet_mount_result',
		type: 'text',
		nullable: true
	})
	oiNasalWetMountResult: string

	@Column({
		name: 'oi_nasal_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiNasalGramSeenResult: string

	@Column({
		name: 'oi_nasal_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiNasalGramUInfectionText: string

	@Column({
		name: 'oi_nasal_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiNasalGiemsaSeenResult: string

	@Column({
		name: 'oi_nasal_mzn_seen_result',
		type: 'text',
		nullable: true
	})
	oiNasalMznSeenResult: string

	@Column({
		name: 'oi_ear_test',
		type: 'text',
		nullable: true
	})
	oiEarTest: string

	@Column({
		name: 'oi_ear_wet_mount_result',
		type: 'text',
		nullable: true
	})
	oiEarWetMountResult: string

	@Column({
		name: 'oi_ear_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiEarGramSeenResult: string

	@Column({
		name: 'oi_ear_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiEarGramUInfectionText: string

	@Column({
		name: 'oi_ear_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiEarGiemsaSeenResult: string

	@Column({
		name: 'oi_ear_mzn_seen_result',
		type: 'text',
		nullable: true
	})
	oiEarMznSeenResult: string

	@Column({
		name: 'oi_throat_test',
		type: 'text',
		nullable: true
	})
	oiThroatTest: string

	@Column({
		name: 'oi_throat_wet_mount_result',
		type: 'text',
		nullable: true
	})
	oiThroatWetMountResult: string

	@Column({
		name: 'oi_throat_wet_mount_vegf',
		type: 'text',
		nullable: true
	})
	oiThroatWetMountVegf: string

	@Column({
		name: 'oi_throat_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiThroatGramSeenResult: string

	@Column({
		name: 'oi_throat_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiThroatGramUInfectionText: string

	@Column({
		name: 'oi_throat_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiThroatGiemsaSeenResult: string

	@Column({
		name: 'oi_csf_test',
		type: 'text',
		nullable: true
	})
	oiCsfTest: string

	@Column({
		name: 'oi_csf_wet_mount_crypto_result',
		type: 'text',
		nullable: true
	})
	oiCsfWetMountCryptoResult: string

	@Column({
		name: 'oi_csf_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiCsfGramSeenResult: string

	@Column({
		name: 'oi_csf_gram_pus_result',
		type: 'text',
		nullable: true
	})
	oiCsfGramPusResult: string

	@Column({
		name: 'oi_csf_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiCsfGramUInfectionText: string

	@Column({
		name: 'oi_csf_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiCsfGiemsaSeenResult: string

	@Column({
		name: 'oi_csf_cell_count',
		type: 'integer',
		nullable: true
	})
	oiCsfCellCount: number

	@Column({
		name: 'oi_ln_test',
		type: 'text',
		nullable: true
	})
	oiLnTest: string

	@Column({
		name: 'oi_ln_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiLnGramSeenResult: string

	@Column({
		name: 'oi_ln_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiLnGramUInfectionText: string

	@Column({
		name: 'oi_ln_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiLnGiemsaSeenResult: string

	@Column({
		name: 'oi_ln_mzn_seen_result',
		type: 'text',
		nullable: true
	})
	oiLnMznSeenResult: string

	@Column({
		name: 'oi_pus_test',
		type: 'text',
		nullable: true
	})
	oiPusTest: string

	@Column({
		name: 'oi_pus_gram_seen_result',
		type: 'text',
		nullable: true
	})
	oiPusGramSeenResult: string

	@Column({
		name: 'oi_pus_gram_u_infection_text',
		type: 'text',
		nullable: true
	})
	oiPusGramUInfectionText: string

	@Column({
		name: 'oi_pus_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiPusGiemsaSeenResult: string

	@Column({
		name: 'oi_pus_mzn_seen_result',
		type: 'text',
		nullable: true
	})
	oiPusMznSeenResult: string

	@Column({
		name: 'oi_stool_test',
		type: 'text',
		nullable: true
	})
	oiStoolTest: string

	@Column({
		name: 'oi_stool_wet_mount_result',
		type: 'text',
		nullable: true
	})
	oiStoolWetMountResult: string

	@Column({
		name: 'oi_stool_wet_mount_ova',
		type: 'text',
		nullable: true
	})
	oiStoolWetMountOva: string

	@Column({
		name: 'oi_stool_wet_mount_larvae',
		type: 'text',
		nullable: true
	})
	oiStoolWetMountLarvae: string

	@Column({
		name: 'oi_stool_wet_mount_cyst',
		type: 'text',
		nullable: true
	})
	oiStoolWetMountCyst: string

	@Column({
		name: 'oi_stool_wet_mount_vegf',
		type: 'text',
		nullable: true
	})
	oiStoolWetMountVegf: string

	@Column({
		name: 'oi_stool_mzn_seen_result',
		type: 'text',
		nullable: true
	})
	oiStoolMznSeenResult: string

	@Column({
		name: 'oi_urine_test',
		type: 'text',
		nullable: true
	})
	oiUrineTest: string

	@Column({
		name: 'oi_urine_wet_mount_result',
		type: 'text',
		nullable: true
	})
	oiUrineWetMountResult: string

	@Column({
		name: 'oi_urine_wet_mount_ova',
		type: 'text',
		nullable: true
	})
	oiUrineWetMountOva: string

	@Column({
		name: 'oi_urine_wet_mount_larvae',
		type: 'text',
		nullable: true
	})
	oiUrineWetMountLarvae: string

	@Column({
		name: 'oi_urine_wet_mount_cyst',
		type: 'text',
		nullable: true
	})
	oiUrineWetMountCyst: string

	@Column({
		name: 'oi_urine_wet_mount_vegf',
		type: 'text',
		nullable: true
	})
	oiUrineWetMountVegf: string

	@Column({
		name: 'oi_blood_test',
		type: 'text',
		nullable: true
	})
	oiBloodTest: string

	@Column({
		name: 'oi_blood_giemsa_seen_result',
		type: 'text',
		nullable: true
	})
	oiBloodGiemsaSeenResult: string

	@Column({
		name: 'oi_blood_giemsa_pf',
		type: 'text',
		nullable: true
	})
	oiBloodGiemsaPf: string

	@Column({
		name: 'oi_blood_giemsa_pv',
		type: 'text',
		nullable: true
	})
	oiBloodGiemsaPv: string

	@Column({
		name: 'oi_blood_giemsa_pm',
		type: 'text',
		nullable: true
	})
	oiBloodGiemsaPm: string

	@Column({
		name: 'oi_blood_giemsa_po',
		type: 'text',
		nullable: true
	})
	oiBloodGiemsaPo: string

	@Column({
		name: 'oi_blood_malaria_rdt_positive_result',
		type: 'text',
		nullable: true
	})
	oiBloodMalariaRdtPositiveResult: string

	@Column({
		name: 'oi_conclusion',
		type: 'text',
		nullable: true
	})
	oiConclusion: string

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
