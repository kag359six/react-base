// @flow

import { combineReducers } from 'redux'
import type { Reducer } from 'redux'
import type { State, ReduxAction } from 'src/utils/types'

export const ACTION_A_TYPE: 'ACTION_A' = 'ACTION_A'

export type StateA = {
  foo: string,
  bar: string
}

const stateA = {
  foo: 'none',
  bar: 'none'
}

const reducerA = (state: StateA = stateA, action: ReduxAction) => {
  switch (action.type) {
    case ACTION_A_TYPE:
      return { ...state, foo: 'foo', bar: 'bar' }
    default:
      return state
  }
}

const reducers: Reducer<State, ReduxAction> = combineReducers({
  a: reducerA
})

export default reducers
