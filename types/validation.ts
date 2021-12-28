export interface Validators {
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?:number
}

export interface Validatable {
  label?: string
  value: string | number
  validators: Validators
}

