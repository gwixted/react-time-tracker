import React from 'react';
import shortid from 'shortid';
import Title from './Title';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import stores from './stores';
import Button from 'react-bootstrap/lib/Button';

class App extends React.Component {
  constructor(props){
    super(props);

    // set initial state
    this.state = {
      tasks: this.props.data
    };

    this.addTask = this.addTask.bind(this);

    // functions must be bound manually with ES6 classes
    // this.handleChange = this.handleChange.bind(this);
  }

  addTask(e) {
    if ( this._inputElement.value.length ) {
      var taskArr = this.state.tasks;
      taskArr.push({
        tname: this._inputElement.value,
        time: 0
      });
      this.setState({
        tasks: taskArr
      })
      this._inputElement.value = '';
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="taskContainer col-md-12">
        <Title />
          <div className="addTaskForm  col-md-12">
            <form onSubmit={this.addTask} className="row">
              <input type="text" placeholder="enter task name" ref={(a) => this._inputElement = a} className="col-md-3" />
              <Button type="submit" bsSize="xsmall" bsStyle="primary"><span className="glyphicon glyphicon-plus"></span> Add Task</Button>
            </form>
          </div>
        <ul className="taskList list-unstyled col-md-8 offset-md-3">
          {
            this.state.tasks.map(item => {
              return (
                <Task name={item.tname} key={shortid.generate()} time={item.time} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
