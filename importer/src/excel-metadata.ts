export interface Row {
  form: string
  number: number
  variable: string
  type: string
  label: string
  modalities: string
  entity: string
  constraint: string
  name: string
}

export interface ColumnMapping {
  column: string
  relation?: string
  property: string
  type: string
}

export interface Mapping {
  file: string
  entity: string
  columns: ColumnMapping[]
}
