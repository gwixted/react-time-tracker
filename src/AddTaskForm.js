import React from 'react';

class AddTaskForm extends React.Component {
  addTask(e) {
    e.preventDefault();
  }
  render () {
    return (
      <div className="addTaskForm col-md-4 col-md-offset-1">
        <form onSubmit={this.addTask} className="row">
          <input type="text" placeholder="enter task" ref={(a) => this._inputElement = a} className="col-md-9" />
          <Button type="submit" bsSize="xsmall" bsStyle="primary"><span className="glyphicon glyphicon-plus"></span> Add Task</Button>
        </form>
      </div>
    )
  }
}

export default AddTaskForm;
