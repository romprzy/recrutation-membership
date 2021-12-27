export const PHONE_TYPES = ['home', 'work', 'mobile', 'main', 'other'] as const

export const phoneInputLabels = [
  {
    value: 'home',
    text: 'Home'
  },
  {
    value: 'work',
    text: 'Work'
  },
  {
    value: 'mobile',
    text: 'Mobile'
  },
  {
    value: 'main',
    text: 'Main'
  },
  {
    value: 'other',
    text: 'Other',
  },
]

export type PhoneType = typeof PHONE_TYPES[number]

export interface Phone {
  type: PhoneType
  number: string
}

export interface FormPersonal {
  firstname?: string
  lastname?: string
  email?: string
  phones: Phone[]
}
