import React from 'react';

class TaskName extends React.Component {
  render () {
    return (
      <div className="taskName col-md-8">
        {this.props.name}
      </div>
    )
  }
}

export default TaskName;
