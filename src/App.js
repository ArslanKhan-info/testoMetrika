import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Path from './routes/path'
import { Provider } from 'react-redux'
import { store } from './Redux/store/store'

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Path/>
    </BrowserRouter>
    </Provider>
  )
}

export default App