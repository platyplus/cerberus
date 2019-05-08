export interface Row {
  form: string
  relation_type: string
  relation_name: string
  relation_multiplicity: string
  constraint: string
  excel_name: string
  property_type: string
  property_name: string
  property_multiplicity: string
  group_names: string
  group_values: string
  default: string
  import: string
}

export interface ColumnMapping {
  column: string
  relation?: string
  property: string
  type: string
  array?: boolean
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
    relation_name: '',
    relation_multiplicity: '',
    constraint: '',
    excel_name: '',
    property_type: '',
    property_name: '',
    property_multiplicity: '',
    group_names: '',
    group_values: '',
    default: '',
    import: ''
  } as Row)
