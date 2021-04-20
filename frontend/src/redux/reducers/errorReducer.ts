import { AnyAction } from 'redux'
import initialState from '../initialState'

export default function errorReducer (state = initialState.errorReducer, action: AnyAction) {
  const { error } = action

  if (error) {
    return { error }
  }

  return state
}
