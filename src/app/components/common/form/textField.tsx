import React from 'react'
import { ITextField } from '../../../interfaces/interfaces'

export default function TextField({
  label,
  value,
  name,
  onChange,
  error
}: ITextField) {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  return (
    <div className='mb-2'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group has-validation'>
        <input
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}
