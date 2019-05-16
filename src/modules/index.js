//@flow
import { combineReducers } from 'redux'
import counter from './counter'
import editor from './editor'
import canvas from './canvas'

export default combineReducers({
  editor,
  canvas
})
