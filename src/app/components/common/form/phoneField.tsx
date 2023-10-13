import React from 'react'
import { IMaskInput } from 'react-imask'
import { IPhoneField } from '../../../interfaces/interfaces'

export default function PhoneField({
  label,
  value,
  name,
  onChange,
  error
}: IPhoneField) {
  const mask = '+7 (000) 000-0000'

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
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          mask={mask}
          placeholder='+7 (___) ___-__-__'
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}
