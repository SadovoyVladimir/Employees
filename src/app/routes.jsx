import React, { Navigate } from 'react-router-dom'
import MainPage from './components/page/MainPage'
import MainLayout from './layouts/MainLayout'
import EditLayout from './layouts/EditLayout'
import EditEmployeePage from './components/page/EditEmployeePage'
import CreateEmployeePage from './components/page/CreateEmployeePage'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <MainPage /> },
      { path: '*', element: <Navigate to='/' /> }
    ]
  },
  {
    path: 'employee',
    element: <EditLayout />,
    children: [
      { path: '', element: <Navigate to='/' /> },
      {
        path: 'edit',
        children: [
          { path: '', element: <Navigate to='/' /> },
          { path: ':employeeId', element: <EditEmployeePage /> }
        ]
      },
      { path: 'create', element: <CreateEmployeePage /> },
      { path: '*', element: <Navigate to='/' /> }
    ]
  },
  { path: '*', element: <Navigate to='/' /> }
]

export default routes
