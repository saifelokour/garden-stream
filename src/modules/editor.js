//@flow
import { initialState } from './_types'
import type { State, Action, Dispatch } from './_types'
import type { EditorState } from "draft-js";

const UPDATE_EDITOR_STATE = 'UPDATE_EDITOR_STATE'

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        // TODO: do nothing if editorState hasn't changed
        case UPDATE_EDITOR_STATE:
            // console.log(action.payload.getCurrentContent().getPlainText())
            return {
                ...state,
                editorState: action.payload
            }
        default:
            return state
    }
}

export const saveEditorState = (editorState: EditorState) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: UPDATE_EDITOR_STATE,
            payload: editorState,
        })
    }
}