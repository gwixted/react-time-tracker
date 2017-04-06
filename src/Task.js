import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import TaskName from './TaskName';
import TaskTime from './TaskTime';
import App from './App';
import Button from 'react-bootstrap/lib/Button';

const localStorage = require('mobx-localstorage');

@observer
class Task extends React.Component {

  @observable taskArr = localStorage.getItem('lsSet') || [];
  @observable sec = this.props.time || 0;
  @observable ticking = false;
  @observable playPauseIcon = 'play';
  @observable pad = (num) => {
    return ('0'+num).slice(-2);
  };
  @observable hhmmss = (secs) => {
    var minutes = Math.floor(secs / 60);
    secs = secs%60;
    var hours = Math.floor(minutes/60)
    minutes = minutes%60;
    return this.pad(hours)+":"+this.pad(minutes)+":"+this.pad(secs);
  };
  @observable timer = () => {
    if ( this.ticking === false ) {
      this.ticking = true;
      this.playPauseIcon = 'pause';
      this.tick = setInterval(() => {
        this.sec++
      },1000);
    } else {
      this.ticking = false;
      this.playPauseIcon = 'play';
      clearInterval(this.tick);
    }
  };

  constructor(props){
    super(props);

    this.handleTimer = this.handleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    // functions must be bound manually with ES6 classes
    // this.handleChange = this.handleChange.bind(this);
  }

  handleTimer() {
    this.timer();
  }

  resetTimer() {
    if ( this.ticking === true ) {
      this.timer();
    }
    this.sec = 0;
  }

  deleteTask() {
    this.taskArr.splice(this.props.ind, 1);
    localStorage.setItem('lsSet',this.taskArr);
  }

  render () {
    const liststyle = {
      marginTop: 1,
      padding: 10,
      background: '#eee',
      clear: 'both'
    };
    const buttonstyle = {
      marginLeft: 5,
      marginRight: 5
    };
    return (
      <li className="task row" style={liststyle}>
        <TaskName name={this.props.name} />
        <TaskTime time={this.hhmmss(this.sec)} />
        <div className="buttons col-md-2">
          <Button name="task-start-pause" bsSize="xsmall" bsStyle="success" className={`glyphicon glyphicon-${this.playPauseIcon}`} onClick={this.handleTimer}></Button>
          <Button name="task-refresh" bsSize="xsmall" bsStyle="warning" onClick={this.resetTimer} className="glyphicon glyphicon-refresh" onClick={this.resetTimer} style={buttonstyle}></Button>
          <Button name="task-remove" bsSize="xsmall" bsStyle="danger" className="glyphicon glyphicon-remove" onClick={this.deleteTask}></Button>
        </div>
      </li>
    )
  }
}

export default Task;
