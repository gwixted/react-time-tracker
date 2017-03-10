import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import shortid from 'shortid';
import ReactTimeout from 'react-timeout';

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
      <div className="taskContainer">
        <Title />
        <ul className="taskList list-unstyled">
          {
            this.state.tasks.map(item => {
              return (
                <Task name={item.tname} key={shortid.generate()} hours={item.time.h} min={item.time.m} sec={item.time.s} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const Title = () => (
  <h2 className="title">Timer Tasks</h2>
);
// =================================================
// TASK
// =================================================
class Task extends React.Component {
  constructor(props){
    super(props);

    // set initial state
    this.state = {
      sec: 0,
      ticking: false,
      playPauseIcon: 'play'
    };

    // functions must be bound manually with ES6 classes
    // this.handleChange = this.handleChange.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
  }

  handleTimer() {
    let tick = 0;
    if ( this.state.ticking === false ) {
      this.setState({
        ticking: true,
        playPauseIcon: 'pause'
      })
      tick = setInterval(() => {
        this.setState({
          sec: this.state.sec += 1
        }, () => {
          console.log(this.state.sec);
        });
      }, 1000)
    } else {
      clearInterval(tick, () => {
        this.setState({
          ticking: false,
          playPauseIcon: 'play'
        }, () => {
          console.log(this.state.sec);
        });
      });
    }
  }
  render () {
    return (
      <li className="task row">
        <TaskName name={this.props.name} />
        <TaskTime hours={this.props.hours} min={this.props.min} sec={this.props.sec} />
          <Buttons onTimerClick={this.handleTimer} gIcon={this.state.playPauseIcon} />
          <div onClick={this.handleTimer}>click me</div>
      </li>
    )
  }
}

class TaskName extends React.Component {
  render () {
    return (
      <div className="taskName col-md-4 col-md-offset-1">
        {this.props.name}
      </div>
    )
  }
}

class TaskTime extends React.Component {
  render () {
    return (
      <div className="taskTime col-md-1">
        <span className="hours">{this.props.hours}</span>:
        <span className="min">{this.props.min}</span>:
        <span className="sec">{this.props.sec}</span>
      </div>
    )
  }
}

class Buttons extends React.Component {
  render () {
    return (
      <div className="buttons col-md-2">
        <Btn name="task-start-pause" size="xsmall" style="success" bsGlyphicon={this.props.gIcon} propTimerFunc={this.props.onTimerClick}  />
        <Btn name="task-refresh" size="xsmall" style="warning" bsGlyphicon="refresh" />
        <Btn name="task-remove" size="xsmall" style="danger" bsGlyphicon="remove" />
      </div>
    )
  }
}

class Btn extends React.Component {
  render () {
    return (
      <span className="btnControl col-md-1">
        <Button bsSize={this.props.size} bsStyle={this.props.style}><span className={`glyphicon glyphicon-${this.props.bsGlyphicon}`} onClick={this.props.propTimerFunc}></span></Button>
      </span>
    )
  }
}

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

export default App;
