import { createSlice } from '@reduxjs/toolkit'
import rolesService from '../services/roles.service'
import { IRoleState, IState } from '../interfaces/interfaces'

const initialState: IRoleState = {
  entities: [],
  isLoading: true
}

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    rolesRequested: state => {
      state.isLoading = true
    },
    rolesRecieved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    }
  }
})
const { reducer: rolesReducer, actions } = rolesSlice

const { rolesRequested, rolesRecieved } = actions

export const loadRolesList =
  () => (dispatch: React.Dispatch<React.SetStateAction<{}>>) => {
    dispatch(rolesRequested())
    const data = rolesService.get()
    dispatch(rolesRecieved(data))
  }

export const getRoles = () => (state: IState) => state.roles.entities
export const getRolesLoadingStatus = () => (state: IState) =>
  state.roles.isLoading

export default rolesReducer
