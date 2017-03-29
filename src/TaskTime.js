import React from 'react';

class TaskTime extends React.Component {
  render () {
    return (
      <div className="taskTime col-md-2">
        <span className="time">{this.props.time}</span>
      </div>
    )
  }
}

export default TaskTime;
