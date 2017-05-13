import React from 'react';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import Button from 'react-bootstrap/lib/Button';

const localStorage = require('mobx-localstorage');

@observer
class AddTaskForm extends React.Component {

  @observable taskArr = localStorage.getItem('taskData');

  constructor(props){
    super(props);

    this.addTask = this.addTask.bind(this);

  }

  addTask(e) {
    if ( this._inputElement.value.length ) {
      this.taskArr = localStorage.getItem('taskData');
      this.taskArr.push({
        tname: this._inputElement.value,
        time: 0,
        interval: 0
      });
      // this.taskArr = taskArr;
      localStorage.setItem('taskData',this.taskArr);
      this._inputElement.value = '';
    }
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
