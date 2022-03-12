/** import statement **/
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigation from './src/navigation'
import { store } from './src/store'

class App extends Component {
  /** class render **/
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App