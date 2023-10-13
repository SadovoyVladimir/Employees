import { createSlice } from '@reduxjs/toolkit'
import employeesService from '../services/employees.service'
import { IEmployee, IEmployeeState, IState } from '../interfaces/interfaces'

const initialState: IEmployeeState = {
  entities: [],
  isLoading: true
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    employeesRequested: state => {
      state.isLoading = true
    },
    employeesRecieved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    employeeCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities = action.payload
    },
    employeeUpdated: (state, action) => {
      state.entities = action.payload
    }
  }
})
const { reducer: employeesReducer, actions } = employeesSlice

const {
  employeesRequested,
  employeesRecieved,
  employeeCreated,
  employeeUpdated
} = actions

export const loadEmployeesList =
  () => (dispatch: React.Dispatch<React.SetStateAction<{}>>) => {
    dispatch(employeesRequested())
    const data = employeesService.get()
    dispatch(employeesRecieved(data))
  }

export const createEmployee = (payload: IEmployee) => {
  return function (dispatch: React.Dispatch<React.SetStateAction<{}>>) {
    const data = employeesService.create(payload)
    dispatch(employeeCreated(data))
  }
}

export const updateEmployee = (payload: IEmployee) => {
  return function (dispatch: React.Dispatch<React.SetStateAction<{}>>) {
    const data = employeesService.update(payload)
    dispatch(employeeUpdated(data))
  }
}

export const getEmployees = () => (state: IState) => state.employees.entities
export const getEmployeesLoadingStatus = () => (state: IState) =>
  state.employees.isLoading
export const getEmployeeById =
  (employeeId: number | null) => (state: IState) => {
    if (state.employees.entities && employeeId) {
      let employee
      for (const emp of state.employees.entities) {
        if (emp.id === employeeId) {
          employee = emp
          break
        }
      }
      return employee
    }
    return undefined
  }

export default employeesReducer
