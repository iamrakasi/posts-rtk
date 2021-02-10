import React from 'react'
import {Provider} from 'react-redux'
import './App.scss'
import Posts from './Posts'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Posts />
      </Provider>
    </div>
  )
}

export default App
