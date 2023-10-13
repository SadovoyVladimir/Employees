import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getEmployeeById } from '../../store/employeesSlice'
import { useAppSelector } from '../../hooks/reduxHooks'
import GoToMainButton from '../common/goToMainButton'
import EditEmployeeForm from '../ui/EditEmployeeForm'

export default function EditEmployeePage() {
  const { employeeId } = useParams()
  const employee = useAppSelector(
    getEmployeeById(employeeId ? +employeeId : null)
  )

  if (!employee) return <Navigate to='/' />

  return (
    <>
      <h1 className='mb-4'>Редактирование сотрудника</h1>
      <EditEmployeeForm employee={employee} />
      <GoToMainButton />
    </>
  )
}
