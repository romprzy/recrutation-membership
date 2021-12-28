export const FORM_FIELDS_NAMES = ['firstname', 'lastname', 'email'] as const
export type FormFieldName = typeof FORM_FIELDS_NAMES[number]

export const PHONE_TYPES = ['home', 'work', 'mobile', 'main', 'other'] as const

export type PhoneType = typeof PHONE_TYPES[number]

export interface Phone {
  type: PhoneType
  number: string
}

export type FormPersonal = {
  firstname: string
  lastname: string
  email: string
  phones: Phone[]
  membership: 'personal' | 'premium'
}
