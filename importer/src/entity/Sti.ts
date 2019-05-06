// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { Symptom } from './Symptom'
import { PhysicalExam } from './PhysicalExam'
import { Medication } from './Medication'

@Entity()
export class Sti {
	@Column({
		name: 'mdm_code',
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
		nullable: true
	})
	patientName: string

	@Column({
		name: 'father_name',
		nullable: true
	})
	fatherName: string

	@Column({
		name: 'sex',
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
		nullable: true
	})
	symptomsComment: string

	@OneToMany(type => PhysicalExam, physicalExam => physicalExam.sti, {
		cascade: true
	})
	physicalExams: PhysicalExam[]

	@Column({
		name: 'sti_presumptive_diagnosis',
		nullable: true
	})
	stiPresumptiveDiagnosis: string

	@Column({
		name: 'partner_diagnosis_other',
		nullable: true
	})
	partnerDiagnosisOther: string

	@Column({
		name: 'lab_type',
		nullable: true
	})
	labType: string

	@Column({
		name: 'treatment_plan',
		nullable: true
	})
	treatmentPlan: string

	@Column({
		name: 'treatment_allergy',
		nullable: true
	})
	treatmentAllergy: string

	@Column({
		name: 'treatment_other_allergy',
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
		nullable: true
	})
	stiPartnerTreatment: string

	@Column({
		name: 'remark',
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
		name: 'key'
	})
	key: string

}
