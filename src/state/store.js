// @flow

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from 'src/state/reducers'
import type { State, ReduxAction } from 'src/utils/types'

const composeEnhancers = composeWithDevTools({ trace: true })

export default createStore<State, ReduxAction, *>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
