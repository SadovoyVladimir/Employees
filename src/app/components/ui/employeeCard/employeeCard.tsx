import React from 'react'
import { NavLink } from 'react-router-dom'
import { IEmployee } from '../../../interfaces/interfaces'
import { getRoles } from '../../../store/rolesSlice'
import { useAppSelector } from '../../../hooks/reduxHooks'
import Card from '../../common/card/card'
import './employeeCard.scss'

export default function EmployeeCard({
  id,
  name,
  role,
  phone,
  birthday
}: IEmployee) {
  const roles = useAppSelector(getRoles())
  const rusRole = roles.find(r => r.value === role)?.name || 'Не определена'
  const roleText = `Должность: ${rusRole}`
  const phoneText = `Телефон: ${phone}`
  const birthdayText = `Дата рождения: ${birthday}`

  return (
    <div className='employee-card'>
      <NavLink className='employee-card_link' to={`employee/edit/${id}`}>
        <Card
          title={name}
          text1={roleText}
          text2={phoneText}
          text3={birthdayText}
        />
      </NavLink>
    </div>
  )
}
