import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class Btn extends React.Component {
  render () {
    return (
      <span className="btnControl col-md-1">
        <Button bsSize={this.props.size} bsStyle={this.props.style}><span className={`glyphicon glyphicon-${this.props.bsGlyphicon}`} onClick={this.props.propTimerFunc}></span></Button>
      </span>
    )
  }
}

export default Btn;
