import React from 'react'
import { IMaskInput } from 'react-imask'
import { IBirthdayField } from '../../../interfaces/interfaces'

export default function BirtdayField({
  label,
  value,
  name,
  onChange,
  error
}: IBirthdayField) {
  let newValue = value?.split('.').reverse().join('-')

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  return (
    <div className='mb-2'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group'>
        <IMaskInput
          id={name}
          name={name}
          value={newValue}
          onChange={handleChange}
          className={getInputClasses()}
          type='date'
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}
