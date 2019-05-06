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
		name: 'patient_target',
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
		nullable: true
	})
	mdmStaff: string

	@OneToMany(type => Symptom, symptom => symptom.generalHeathCare, {
		cascade: true
	})
	symptoms: Symptom[]

	@Column({
		name: 'symptoms_comment',
		nullable: true
	})
	symptomsComment: string

	@OneToMany(type => PhysicalExam, physicalExam => physicalExam.generalHeathCare, {
		cascade: true
	})
	physicalExams: PhysicalExam[]

	@Column({
		name: 'physical_exam_comment',
		nullable: true
	})
	physicalExamComment: string

	@OneToMany(type => GhcCategory, ghcCategory => ghcCategory.generalHeathCare, {
		cascade: true
	})
	ghcCategorys: GhcCategory[]

	@Column({
		name: 'hbsag',
		nullable: true
	})
	hbsag: string

	@Column({
		name: 'hbsab',
		nullable: true
	})
	hbsab: string

	@Column({
		name: 'hcvab',
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
		nullable: true
	})
	liverFibrosis: string

	@Column({
		name: 'allergy',
		nullable: true
	})
	allergy: string

	@Column({
		name: 'allergy_other',
		nullable: true
	})
	allergyOther: string

	@OneToMany(type => Medication, medication => medication.generalHeathCare, {
		cascade: true
	})
	medications: Medication[]

	@Column({
		name: 'should_return_in',
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
		name: 'key'
	})
	key: string

}
