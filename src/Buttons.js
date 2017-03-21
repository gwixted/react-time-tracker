import React from 'react';
import Btn from './Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

class Buttons extends React.Component {
  render () {
    return (
      <div className="buttons col-md-2">
        <Btn name="task-start-pause" size="xsmall" style="success" bsGlyphicon={this.props.gIcon} propTimerFunc={this.props.onTimerClick}  />
        <Btn name="task-refresh" size="xsmall" style="warning" bsGlyphicon="refresh" />
        <Btn name="task-remove" size="xsmall" style="danger" bsGlyphicon="remove" />
      </div>
    )
  }
}

export default Buttons;
