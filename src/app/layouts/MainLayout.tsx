import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='container-fluid main'>
      <h1 className='main-title'>Список сотрудников</h1>
      <Outlet />
    </div>
  )
}
