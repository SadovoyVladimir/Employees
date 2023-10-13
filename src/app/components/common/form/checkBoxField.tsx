import React from 'react'
import { ICheckbox } from '../../../interfaces/interfaces'

export default function CheckBoxField({
  name,
  value,
  onChange,
  children
}: ICheckbox) {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange(target.value)
  }

  return (
    <div className='form-check mb-2'>
      <input
        className='form-check-input'
        type='checkbox'
        id={name}
        onChange={handleChange}
        checked={value}
        style={{ cursor: 'pointer' }}
      />
      <label
        className='form-check-label unselectable'
        htmlFor={name}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </label>
    </div>
  )
}
