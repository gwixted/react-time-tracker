import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Button from 'react-bootstrap/lib/Button';

const localStorage = require('mobx-localstorage');

@observer
class AddTaskForm extends React.Component {

  @observable taskArr = localStorage.getItem('lsSet') || [];

  constructor(props){
    super(props);

    this.addTask = this.addTask.bind(this);

    // functions must be bound manually with ES6 classes
    // this.handleChange = this.handleChange.bind(this);
  }

  addTask(e) {
    if ( this._inputElement.value.length ) {
      var taskArr = this.taskArr;
      this.taskArr.push({
        tname: this._inputElement.value
      });
      this.taskArr = taskArr;
      this._inputElement.value = '';
    }
    localStorage.setItem('lsSet',this.taskArr);
    e.preventDefault();
  }

  render () {
    const margin = {
      marginBottom: 10
    }
    const inputStyle = {
      height: 30
    };
    return (
      <div style={margin} className="addTaskForm col-md-12">
        <form onSubmit={this.addTask} className="row">
          <input type="text" placeholder="enter task" ref={(a) => this._inputElement = a} style={inputStyle} className="col-md-3" />
          <Button type="submit" bsSize="xsmall" bsStyle="primary" style={inputStyle}><span className="glyphicon glyphicon-plus"></span> Add Task</Button>
        </form>
      </div>
    )
  }
}

export default AddTaskForm;
