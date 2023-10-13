import React from 'react'
import { NavLink } from 'react-router-dom'

export default function GoToMainButton() {
  return (
    <div className='d-flex justify-content-center'>
      <NavLink to={'/'}>
        <button className='btn btn-secondary'>На главную</button>
      </NavLink>
    </div>
  )
}
