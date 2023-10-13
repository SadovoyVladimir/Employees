import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee, updateEmployee } from '../../store/employeesSlice'
import { getRoles } from '../../store/rolesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { IEmployee } from '../../interfaces/interfaces'
import TextField from '../common/form/textField'
import SelectField from '../common/form/selectField'
import CheckBoxField from '../common/form/checkBoxField'
import PhoneField from '../common/form/phoneField'
import BirtdayField from '../common/form/birtdayField'
import { validator } from '../../utils/validator'
import './EditEmployeeForm.scss'

export default function EditEmployeeForm({
  employee
}: {
  employee?: IEmployee
}) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const roles = useAppSelector(getRoles())

  const initialData: IEmployee = {
    phone: '',
    name: '',
    birthday: '',
    role: 'driver',
    isArchive: false,
    id: 0
  }
  const initialErrors: { [key: string]: string } = {}
  const [data, setData] = useState(employee || initialData)
  const [errors, setErrors] = useState(initialErrors)

  const validatorConfig = {
    name: {
      isRequired: { message: 'Имя обязательно для заполнения' },
      consistOfLetters: {
        message: 'Имя должно состоять из букв'
      }
    },
    phone: {
      phoneNumber: {
        message: 'Телефон должен иметь вид +7 (xxx) xx-xxxx'
      }
    },
    birthday: {
      isRequired: { message: 'Дата рождения обязательна для заполнения' },
      isMinYear: { message: 'Дата рождения должна быть выше 1900' },
      isMaxDate: { message: 'Дата рождения не должна превышать текущий день' }
    }
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return !Object.keys(errors).length
  }

  const isValid = !Object.keys(errors).length

  useEffect(() => {
    validate()
  }, [data])

  const handleChange = (target: { name: string; value: string }) => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  const toggleIsArchive = () => {
    setData(prevState => ({ ...prevState, isArchive: !prevState.isArchive }))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    const birthday = data.birthday.split('-').reverse().join('.')
    const newData = { ...data, birthday }

    if (employee) {
      dispatch(updateEmployee(newData))
    } else {
      dispatch(createEmployee({ ...newData, id: Date.now() }))
    }
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className='employee-form'>
      <TextField
        label='Имя'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <PhoneField
        label='Телефон'
        name='phone'
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <BirtdayField
        label='Дата рождения'
        name='birthday'
        value={data.birthday}
        onChange={handleChange}
        error={errors.birthday}
      />
      <SelectField
        label='Должность'
        name='role'
        value={data.role}
        options={roles}
        onChange={handleChange}
      />
      <CheckBoxField
        name='isArchive'
        value={data.isArchive}
        onChange={toggleIsArchive}
      >
        В архиве
      </CheckBoxField>
      <div>
        <button disabled={!isValid} className='btn btn-primary'>
          {employee ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
    </form>
  )
}
