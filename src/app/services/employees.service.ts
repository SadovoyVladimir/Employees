import employees from './../mockdata/employees.json'
import { IEmployee } from '../interfaces/interfaces'

const key = 'employees'

const employeesService = {
  get: () => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(employees))
    }
    const data: IEmployee[] = JSON.parse(localStorage.getItem(key)!)
    return data
  },
  update: (payload: IEmployee) => {
    let data: IEmployee[] = JSON.parse(localStorage.getItem(key)!)
    data = data.map(d => {
      if (d.id === payload.id) {
        d = payload
      }
      return d
    })
    localStorage.setItem(key, JSON.stringify(data))
    return data
  },
  create: (employee: IEmployee) => {
    let data: IEmployee[] = JSON.parse(localStorage.getItem(key)!)
    data.push(employee)
    localStorage.setItem(key, JSON.stringify(data))
    return data
  }
}

export default employeesService
