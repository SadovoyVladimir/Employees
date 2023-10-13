import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getEmployees } from '../../../store/employeesSlice'
import { getRoles } from '../../../store/rolesSlice'
import { useAppSelector } from '../../../hooks/reduxHooks'
import SelectField from '../../common/form/selectField'
import CheckBoxField from '../../common/form/checkBoxField'
import { sortByDate } from '../../../utils/sortByDate'
import { sortByLetters } from '../../../utils/sortByLetters'
import EmployeeCard from '../employeeCard/employeeCard'
import './employeesList.scss'

export default function EmployeesList() {
  const employees = useAppSelector(getEmployees())
  const roles = useAppSelector(getRoles())

  const [changedEmployees, setChangedEmployees] = useState([...employees])
  const [sortBy, setSortBy] = useState({ path: '', order: 'desc' })
  const [isArchive, setIsArchive] = useState(false)
  const [filter, setFilter] = useState('all')

  const handleSort = (item: string) => {
    if (item === 'birthday') {
      setChangedEmployees(sortByDate(changedEmployees, item, sortBy.order))
    } else {
      setChangedEmployees(sortByLetters(changedEmployees, item, sortBy.order))
    }

    if (sortBy.path === item) {
      setSortBy({ ...sortBy, order: sortBy.order === 'desc' ? 'asc' : 'desc' })
    } else {
      setSortBy({ path: item, order: 'asc' })
    }
  }

  const resetSort = () => {
    setSortBy({ path: '', order: 'desc' })
  }

  const filterEmployees = () => {
    if (filter !== 'all') {
      isArchive
        ? setChangedEmployees(
            employees.filter(e => e.role === filter).filter(e => e.isArchive)
          )
        : setChangedEmployees(employees.filter(e => e.role === filter))
    } else {
      isArchive
        ? setChangedEmployees(employees.filter(e => e.isArchive))
        : setChangedEmployees([...employees])
    }
  }

  useEffect(() => {
    filterEmployees()
    resetSort()
  }, [filter, isArchive])

  const handleFilter = ({ value }: { value: string }) => {
    setFilter(value)
  }

  const toggleIsArchive = () => {
    setIsArchive(prevState => !prevState)
  }

  const renderSortArrow = (path: string) => {
    if (path === sortBy.path) {
      return (
        <i
          className={
            'bi bi-caret-' + (sortBy.order === 'asc' ? 'up' : 'down') + '-fill'
          }
        ></i>
      )
    }
    return null
  }

  return (
    <div className='employee-list container'>
      <div>
        <form action=''>
          <SelectField
            label='Должность'
            defaultOption={'Все'}
            options={roles}
            onChange={handleFilter}
            name='role'
          />
          <CheckBoxField
            value={isArchive}
            onChange={toggleIsArchive}
            name='isArchive'
          >
            В архиве
          </CheckBoxField>
        </form>
        <div className='sort-field mb-2'>
          <span>Сортировать по: </span>
          <button onClick={() => handleSort('name')}>
            имени
            {renderSortArrow('name')}
          </button>{' '}
          <button onClick={() => handleSort('birthday')}>
            дате рождения
            {renderSortArrow('birthday')}
          </button>
        </div>
        <div className='create-button mb-2'>
          <NavLink to={`employee/create`} className='btn btn-secondary'>
            Добавить сотрудника
          </NavLink>
        </div>
      </div>
      {changedEmployees.map(e => (
        <EmployeeCard key={e.id} {...e} />
      ))}
    </div>
  )
}
