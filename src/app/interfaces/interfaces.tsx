export interface IEmployee {
  id: number
  name: string
  isArchive: boolean
  role: string
  phone: string
  birthday: string
}

export interface IRole {
  id: number
  value: string
  name: string
}

export interface IOption {
  id: number
  value: string
  name: string
}

export interface ISelect {
  label: string
  defaultOption?: string
  options: IOption[]
  name: string
  onChange: Function
  value?: string
}

export interface ICheckbox {
  name: string
  value: boolean
  children: React.ReactNode
  onChange: Function
}

export interface ITextField {
  label: string
  value?: string
  name: string
  onChange: Function
  error?: string
}

export interface IPhoneField extends ITextField {}
export interface IBirthdayField extends ITextField {}

export interface ICard {
  title: string
  text1: string
  text2?: string
  text3?: string
}

export interface IEmployeeState {
  entities: IEmployee[]
  isLoading: boolean
}

export interface IRoleState {
  entities: IRole[]
  isLoading: boolean
}

export interface IState {
  employees: IEmployeeState
  roles: IRoleState
}
