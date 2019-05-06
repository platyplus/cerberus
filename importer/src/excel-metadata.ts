export interface Row {
  form: string
  relation_type: string
  relation_name: string
  constraint: string
  excel_name: string
  property_name: string
  property_type: string
  group_names: string
  group_values: string
}

export interface ColumnMapping {
  column: string
  relation?: string
  property: string
  type: string
  entityValues?: { [key: string]: string }
}

export interface Mapping {
  file: string
  entity: string
  columns: ColumnMapping[]
}

export const emptyRow = () =>
  ({
    form: '',
    relation_type: '',
    constraint: '',
    excel_name: '',
    property_name: '',
    property_type: '',
    group_names: '',
    group_values: ''
  } as Row)
