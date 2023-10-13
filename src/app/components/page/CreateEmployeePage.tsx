import React from 'react'
import GoToMainButton from '../common/goToMainButton'
import EditEmployeeForm from '../ui/EditEmployeeForm'

export default function CreateEmployeePage() {
  return (
    <>
      <h1 className='mb-4'>Добавление сотрудника</h1>
      <EditEmployeeForm />
      <GoToMainButton />
    </>
  )
}
