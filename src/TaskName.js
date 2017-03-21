import React from 'react';

class TaskName extends React.Component {
  render () {
    return (
      <div className="taskName col-md-4 col-md-offset-1">
        {this.props.name}
      </div>
    )
  }
}

export default TaskName;
