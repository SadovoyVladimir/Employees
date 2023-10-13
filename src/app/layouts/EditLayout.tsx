import React from 'react'
import { Outlet } from 'react-router-dom'

export default function EditLayout() {
  return (
    <div className='edit container'>
      <div className='row'>
        <div className='edit-container col-md-10 offset-md-1 shadow p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
