export interface Row {
  form: string
  relation: string
  constraint: string
  excel_name: string
  property_name: string
  property_type: string
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
