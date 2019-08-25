// @flow

import type { ThunkAction } from 'src/utils/types'
import { ACTION_A_TYPE } from 'src/state/reducers'

type ActionACreator = string => ThunkAction

export const actionACreator: ActionACreator = (
  someText: string
) => dispatch => {
  dispatch({ type: ACTION_A_TYPE, payload: someText })
}
