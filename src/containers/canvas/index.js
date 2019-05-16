import React, { Component } from 'react';
import { Stage, Layer, Circle } from 'react-konva'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setLayerRef, updateCanvas } from '../../modules/canvas'
import { saveEditorState } from '../../modules/editor'

import { EditorState, ContentState } from 'draft-js'


const mapStateToProps = ({ canvas }) => ({
  canvasState: canvas.canvasState
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setLayerRef,
      updateCanvas,
      saveEditorState
    },
    dispatch
  )
}

class Canvas extends Component {

  componentDidMount() {
    this.props.setLayerRef(this.refs.layer)
  }

  createCircle = (e: SyntheticEvent) => {
    this.props.updateCanvas({
      ...this.props.canvasState,
      children: this.props.canvasState.layer.children.push(
        <Circle 
          key={Math.floor(Math.random() * 1000)}
          x={e.evt.pageX} 
          y={e.evt.pageY}  
          radius={50} 
          fill="green" 
        />
      )
    })
    this.props.saveEditorState(EditorState.createWithContent(ContentState.createFromText("circle")))
  }

  render() {
    return (
      <Stage 
        name="MainStage"
        width={800}
        height={1000}
        ref='stage' 
        onClick={this.createCircle}
      >
        <Layer ref='layer'>
          {this.props.canvasState.layer.menu}
          {this.props.canvasState.layer.children.map(child => child)}
        </Layer>
      </Stage>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)