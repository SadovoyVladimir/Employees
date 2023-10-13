import { combineReducers, configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesSlice'
import rolesReducer from './rolesSlice'

const rootReducer = combineReducers({
  employees: employeesReducer,
  roles: rolesReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
