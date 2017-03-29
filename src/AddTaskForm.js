import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class AddTaskForm extends React.Component {

  render () {
    return (
      <div className="addTaskForm col-md-12">
        <form onSubmit={this.props.add} className="row">
          <input type="text" placeholder="enter task" ref={(a) => this._inputElement = a} className="col-md-3" />
          <Button type="submit" bsSize="xsmall" bsStyle="primary"><span className="glyphicon glyphicon-plus"></span> Add Task</Button>
        </form>
      </div>
    )
  }
}

export default AddTaskForm;
