//@flow
import { initialState } from './_types'

import type {State, Action, Dispatch} from './_types'

const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
const INCREMENT = 'counter/INCREMENT'
const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
const DECREMENT = 'counter/DECREMENT'


export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export const increment = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
