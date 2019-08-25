/* eslint-disable no-use-before-define */
// @flow

import type { StateA } from 'src/state/reducers'

export type State = {
  a: StateA
}

export type ReduxAction = { type: string, payload: any }

export type Dispatch = (
  action: ReduxAction | ThunkAction | PromiseAction
) => any
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
type PromiseAction = Promise<ReduxAction>
type GetState = () => State
