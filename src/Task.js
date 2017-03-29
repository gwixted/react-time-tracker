import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import TaskName from './TaskName';
import TaskTime from './TaskTime';
import Button from 'react-bootstrap/lib/Button';

var moment = require('moment');

@observer
class Task extends React.Component {

  @observable sec = this.props.time || 0;
  @observable min = Math.floor(this.sec / 60) % 60;
  @observable hour = Math.floor((this.sec / 60) / 60);
  @observable ticking = false;
  @observable playPauseIcon = 'play';
  @observable timer = (secs) => {
    if ( this.ticking === false ) {
      this.ticking = true;
      this.playPauseIcon = 'pause';
      this.tick = setInterval(() => {
        this.sec++
        // this.sec = this.sec % 60;
        //this.hour = this.hour % 60;
        function pad(num) {
          return ('0'+num).slice(-2);
        }
        function hhmmss(secs) {
          var minutes = Math.floor(secs / 60);
          secs = secs%60;
          var hours = Math.floor(minutes/60)
          minutes = minutes%60;
          return pad(hours)+":"+pad(minutes)+":"+pad(secs);
        }
        function mm(secs) {
          var minutes = Math.floor(secs / 60);
          minutes = minutes%60;
          return pad(minutes);
        }
        console.log(hhmmss(this.sec));
      },1000);
    } else {
      this.ticking = false;
      this.playPauseIcon = 'play';
      clearInterval(this.tick);
    }
  }

  constructor(props){
    super(props);

    this.handleTimer = this.handleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

    // functions must be bound manually with ES6 classes
    // this.handleChange = this.handleChange.bind(this);
  }

  pad(str) {
    return ('0'+str).slice(-2);
  }

  handleTimer() {
    this.timer();
  }

  resetTimer() {
    if ( this.ticking === true ) {
      this.timer();
    }
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
  }

  render () {
    return (
      <li className="task row">
        <TaskName name={this.props.name} />
          <TaskTime time={this.sec} />
          <div className="buttons col-md-2">
            <Button name="task-start-pause" bsSize="xsmall" bsStyle="success" className={`glyphicon glyphicon-${this.playPauseIcon}`} onClick={this.handleTimer}></Button>
            <Button name="task-refresh" bsSize="xsmall" bsStyle="warning" onClick={this.resetTimer} className="glyphicon glyphicon-refresh" onClick={this.resetTimer}></Button>
            <Button name="task-remove" bsSize="xsmall" bsStyle="danger" className="glyphicon glyphicon-remove"></Button>
          </div>
      </li>
    )
  }
}

export default Task;
