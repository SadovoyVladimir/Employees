import React from 'react'
import { ISelect } from '../../../interfaces/interfaces'

export default function SelectField({
  label,
  onChange,
  defaultOption,
  options,
  name,
  value
}: ISelect) {
  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ name: target.name, value: target.value })
  }

  return (
    <div className='mb-2'>
      <label htmlFor={name} className='form-label mb-0'>
        {label}
      </label>
      <select
        className='form-select'
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      >
        {defaultOption && <option value='all'>{defaultOption}</option>}
        {options.length > 0 &&
          options.map(option => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  )
}
