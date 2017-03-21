import React from 'react';

class TaskTime extends React.Component {
  render () {
    return (
      <div className="taskTime col-md-1">
        <span className="hours">{this.props.hours}</span>:
        <span className="min">{this.props.min}</span>:
        <span className="sec">{this.props.sec}</span>
      </div>
    )
  }
}

export default TaskTime;
