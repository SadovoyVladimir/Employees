import React from 'react'
import { useRoutes } from 'react-router-dom'
import withRouter from './components/ui/hoc/withRouter'
import withRedux from './components/ui/hoc/withRedux'
import AppLoader from './components/ui/hoc/appLoader'
import routes from './routes'
import './App.scss'

function App() {
  const elements = useRoutes(routes)

  return (
    <AppLoader>
      <>{elements}</>
    </AppLoader>
  )
}

const AppWithStoreAndRouter = withRedux(withRouter(App))
export default AppWithStoreAndRouter
