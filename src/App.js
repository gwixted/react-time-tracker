import React from 'react';
import { observer } from 'mobx-react';
import shortid from 'shortid';
import ReactTimeout from 'react-timeout';
import Title from './Title';
import Task from './Task';
import stores from './stores';

class App extends React.Component {
  constructor(props){
    super(props);

    // set initial state
    this.state = {
      tasks: this.props.data
    };

    // functions must be bound manually with ES6 classes
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="taskContainer col-md-12">
        <Title />
        <ul className="taskList list-unstyled">
          {
            this.state.tasks.map(item => {
              return (
                <Task name={item.tname} key={shortid.generate()} time={item.time.s} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
