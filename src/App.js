import React from 'react';
import shortid from 'shortid';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Title from './Title';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import Button from 'react-bootstrap/lib/Button';

const localStorage = require('mobx-localstorage');


@observer
class App extends React.Component {

  @observable taskArr = this.props.data;

  constructor(props){
    super(props);

    // functions must be bound manually with ES6 classes
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const submitStyle = {
      height: 26
    };
    return (
      <div className="taskContainer col-md-12">
        <Title />
        <AddTaskForm />
        <ul className="taskList list-unstyled col-md-8 offset-md-3">
          {
            this.taskArr.map((item, index) => {
              return (
                <Task name={item.tname} ind={index} key={shortid.generate()} time={item.time} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
