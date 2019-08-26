// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import store from 'src/state/store'
import theme from 'src/theme'
import RootComponent from 'src/App'
import * as serviceWorker from './serviceWorker'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RootComponent />
    </ThemeProvider>
  </Provider>
)

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000)
    //$FlowFixMe
    ReactDOM.render(<App />, document.getElementById('root'))
  })
} else {
  //$FlowFixMe
  ReactDOM.render(<App />, document.getElementById('root'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
