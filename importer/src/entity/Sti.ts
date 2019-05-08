// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { Symptom } from './Symptom'
import { PhysicalExam } from './PhysicalExam'
import { Medication } from './Medication'

@Entity()
export class Sti {
	@Column({
		name: 'mdm_code',
		type: 'text',
		nullable: true
	})
	mdmCode: string

	@Column({
		name: 'registration_date',
		type: 'timestamptz',
		nullable: true
	})
	registrationDate: Date

	@Column({
		name: 'patient_name',
		type: 'text',
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		type: 'text',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
		type: 'text',
		nullable: true
	})
	sex: string

	@Column({
		name: 'date_of_birth',
		type: 'timestamptz',
		nullable: true
	})
	dateOfBirth: Date

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
		name: 'visit_date',
		type: 'timestamptz',
		nullable: true
	})
	visitDate: Date

	@Column({
		name: 'mdm_staff',
		type: 'text',
		nullable: true
	})
	mdmStaff: string

	@Column({
		name: 'new_patient',
		type: 'boolean',
		nullable: true
	})
	newPatient: boolean

	@Column({
		name: 'sti_background_previous_sit_treated',
		type: 'boolean',
		nullable: true
	})
	stiBackgroundPreviousSitTreated: boolean

	@OneToMany(type => Symptom, symptom => symptom.sti, {
		cascade: true
	})
	symptoms: Symptom[]

	@Column({
		name: 'symptoms_comment',
		type: 'text',
		nullable: true
	})
	symptomsComment: string

	@OneToMany(type => PhysicalExam, physicalExam => physicalExam.sti, {
		cascade: true
	})
	physicalExams: PhysicalExam[]

	@Column({
		name: 'sti_presumptive_diagnosis',
		type: 'text',
		nullable: true
	})
	stiPresumptiveDiagnosis: string

	@Column({
		name: 'partner_diagnosis_other',
		type: 'text',
		nullable: true
	})
	partnerDiagnosisOther: string

	@Column({
		name: 'lab_type',
		type: 'text',
		nullable: true
	})
	labType: string

	@Column({
		name: 'treatment_plan',
		type: 'text',
		nullable: true
	})
	treatmentPlan: string

	@Column({
		name: 'treatment_allergy',
		type: 'text',
		nullable: true
	})
	treatmentAllergy: string

	@Column({
		name: 'treatment_other_allergy',
		type: 'text',
		nullable: true
	})
	treatmentOtherAllergy: string

	@Column({
		name: 'is_pregnant',
		type: 'boolean',
		nullable: true
	})
	isPregnant: boolean

	@Column({
		name: 'had_surgical_intervention',
		type: 'boolean',
		nullable: true
	})
	hadSurgicalIntervention: boolean

	@OneToMany(type => Medication, medication => medication.sti, {
		cascade: true
	})
	medications: Medication[]

	@Column({
		name: 'other_treatment',
		type: 'text',
		nullable: true
	})
	otherTreatment: string

	@Column({
		name: 'referred_to_hospital',
		type: 'boolean',
		nullable: true
	})
	referredToHospital: boolean

	@Column({
		name: 'sti_sti_condom',
		type: 'boolean',
		nullable: true
	})
	stiStiCondom: boolean

	@Column({
		name: 'sti_partner_treatment',
		type: 'text',
		nullable: true
	})
	stiPartnerTreatment: string

	@Column({
		name: 'remark',
		type: 'text',
		nullable: true
	})
	remark: string

	@Column({
		name: 'date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	dateNextVisit: Date

	@Column({
		name: 'plan_next_visit',
		type: 'text',
		nullable: true
	})
	planNextVisit: string

	@Column({
		name: 'verify',
		type: 'integer',
		nullable: true
	})
	verify: number

	@Column({
		name: 'last_registration_date',
		type: 'timestamptz',
		nullable: true
	})
	lastRegistrationDate: Date

	@PrimaryColumn({
		name: 'key',
		type: 'text'
	})
	key: string

}
