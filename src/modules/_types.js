//@flow
import { EditorState } from "draft-js";
import type { Layer, Node } from 'react-konva'

export const initialState: State = {
  editorState: EditorState.createEmpty(),
  canvasState: {
    layer: {
      ref: { draw: () => {throw new Error('Layer did not mount')} }, 
      menu: null, 
      children: []
    }
  },
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

// temp using Node instead of OptionMenu
export type LayerState = {ref: Layer, menu: ?Node, children: ?Array<Node>}

type EditorAction = 
  | { type: 'UPDATE_EDITOR_STATE', payload: EditorState }

type CanvasAction =
  | { type: 'UPDATE_CANVAS_STATE', payload: LayerState }
  | { type: 'SET_LAYER_REF', payload: Layer }
  | { type: 'DRAW_LAYER' }

export type Action = 
  | EditorAction
  | CanvasAction

export type State = {
  editorState: EditorState,
  canvasState: { layer: LayerState }
}

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type GetState = () => State;
type PromiseAction = Promise<Action>;