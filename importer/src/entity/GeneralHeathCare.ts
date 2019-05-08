// AUTOMATICALLY GENERATED FILE - DO NOT EDIT - MODIFICATIONS WILL BE LOST
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { Symptom } from './Symptom'
import { PhysicalExam } from './PhysicalExam'
import { GhcCategory } from './GhcCategory'
import { Medication } from './Medication'

@Entity()
export class GeneralHeathCare {
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
		name: 'patient_target',
		type: 'text',
		nullable: true
	})
	patientTarget: string

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
		name: 'is_new_patient',
		type: 'boolean',
		nullable: true
	})
	isNewPatient: boolean

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

	@OneToMany(type => Symptom, symptom => symptom.generalHeathCare, {
		cascade: true
	})
	symptoms: Symptom[]

	@Column({
		name: 'symptoms_comment',
		type: 'text',
		nullable: true
	})
	symptomsComment: string

	@OneToMany(type => PhysicalExam, physicalExam => physicalExam.generalHeathCare, {
		cascade: true
	})
	physicalExams: PhysicalExam[]

	@Column({
		name: 'physical_exam_comment',
		type: 'text',
		nullable: true
	})
	physicalExamComment: string

	@OneToMany(type => GhcCategory, ghcCategory => ghcCategory.generalHeathCare, {
		cascade: true
	})
	ghcCategorys: GhcCategory[]

	@Column({
		name: 'hbsag',
		type: 'text',
		nullable: true
	})
	hbsag: string

	@Column({
		name: 'hbsab',
		type: 'text',
		nullable: true
	})
	hbsab: string

	@Column({
		name: 'hcvab',
		type: 'text',
		nullable: true
	})
	hcvab: string

	@Column({
		name: 'apri',
		type: 'integer',
		nullable: true
	})
	apri: number

	@Column({
		name: 'liver_fibrosis',
		type: 'text',
		nullable: true
	})
	liverFibrosis: string

	@Column({
		name: 'allergy',
		type: 'text',
		nullable: true
	})
	allergy: string

	@Column({
		name: 'allergy_other',
		type: 'text',
		nullable: true
	})
	allergyOther: string

	@OneToMany(type => Medication, medication => medication.generalHeathCare, {
		cascade: true
	})
	medications: Medication[]

	@Column({
		name: 'should_return_in',
		type: 'text',
		nullable: true
	})
	shouldReturnIn: string

	@Column({
		name: 'date_next_visit',
		type: 'timestamptz',
		nullable: true
	})
	dateNextVisit: Date

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
