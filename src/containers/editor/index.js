//@flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Editor } from 'draft-js';

import { saveEditorState } from '../../modules/editor'
import { updateCanvas } from '../../modules/canvas'

import { Circle } from 'react-konva'

// TODO: figure out css
const style = {
  editor: {
    border: '1px solid black',
    cursor: 'text',
    minHeight: '80',
    marginTop: '1em',
    padding: '0.5em',
    paddingLeft: '1em',
    height: 'inherit'
  }
}

const mapStateToProps = ({ editor, canvas }) => ({
  editorState: editor.editorState,
  canvasState: canvas.canvasState
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveEditorState,
      updateCanvas
    },
    dispatch
  )
}

class MainEditor extends Component<typeof mapStateToProps> {
  
  focus = () => this.refs.editor.focus()

  onEditorChange = (newEditorState) => {
    this.props.saveEditorState(newEditorState)
    if(newEditorState.getCurrentContent().getPlainText() == 'circle') {
      this.props.updateCanvas({
        ...this.props.canvasState,
        children: this.props.canvasState.layer.children.push(
          <Circle 
            key={Math.floor(Math.random() * 100)}
            x={100} 
            y={100}  
            radius={50} 
            fill="green" 
          />
        )
      })
    }
  }
  
  render() {
    return (
      <div style={style.editor} onClick={this.focus}>
        <Editor 
          editorState={this.props.editorState} 
          onChange={this.onEditorChange} 
          ref='editor'
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainEditor)