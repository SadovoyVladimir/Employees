import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../../../store/createStore'

const store = createStore()

const withRedux =
  (Component: React.FC) =>
  ({ ...props }) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }

export default withRedux

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
