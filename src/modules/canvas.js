//@flow
import { initialState } from './_types'
import type { Layer } from 'react-konva';
import type { State, Action, Dispatch, LayerState } from './_types'

const SET_LAYER_REF = 'SET_LAYER_REF'
const UPDATE_CANVAS_STATE = 'UPDATE_CANVAS_STATE'
const DRAW_LAYER = 'DRAW_LAYER'

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_LAYER_REF:
      return {
        ...state,
        canvasState: {
          ...state.canvasState,
          layer: {
            ...state.canvasState.layer,
            ref: action.payload
          }
        }
      }
    case UPDATE_CANVAS_STATE:
      return {
        ...state,
        canvasState: action.payload
      }
    case DRAW_LAYER:
      state.canvasState.layer.ref.draw()
      return state
    default:
      return state
  }
}

export const drawLayer = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DRAW_LAYER
    })
  }
}

export const updateCanvas = (layerState: LayerState) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_CANVAS_STATE, payload: layerState
    })

    dispatch({
      type: DRAW_LAYER
    })
  }
}

export const setLayerRef = (ref: Layer) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_LAYER_REF, payload: ref
    })
  }
}