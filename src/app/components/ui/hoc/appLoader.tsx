import React, { useEffect } from 'react'
import {
  getEmployeesLoadingStatus,
  loadEmployeesList
} from '../../../store/employeesSlice'
import { getRolesLoadingStatus, loadRolesList } from '../../../store/rolesSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import SpinnerLoader from '../../common/loader/SpinnerLoader'

export default function AppLoader({
  children
}: {
  children: React.ReactElement
}) {
  const dispatch = useAppDispatch()
  const isLoadEmployees = useAppSelector(getEmployeesLoadingStatus())
  const isLoadingRoles = useAppSelector(getRolesLoadingStatus())

  const isLoading = isLoadEmployees || isLoadingRoles

  useEffect(() => {
    dispatch(loadEmployeesList())
    dispatch(loadRolesList())
  }, [dispatch])

  if (isLoading) return <SpinnerLoader />

  return children
}
