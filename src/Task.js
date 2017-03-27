import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import TaskName from './TaskName';
import TaskTime from './TaskTime';
import Button from 'react-bootstrap/lib/Button';


@observer
class Task extends React.Component {


  @observable sec = this.props.sec || 0;
  @observable min = Math.floor(this.sec / 60);
  @observable hours = Math.floor(this.min / 60);
  @observable ticking = false;
  @observable playPauseIcon = 'play';
  @observable timer = () => {
    if ( this.ticking === false ) {
      this.ticking = true;
      this.playPauseIcon = 'pause';
      this.tick = setInterval(() => {
        this.sec++
        this.min = Math.floor(this.sec / 60)
        this.hours = Math.floor(this.min / 60)
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

  handleTimer() {
    this.timer();
  }

  resetTimer() {
    if ( this.ticking === true ) {
      this.timer();
    }
    this.sec = 0;
  }

  render () {
    return (
      <li className="task row">
        <TaskName name={this.props.name} />
        <TaskTime hours={this.hours} min={this.min} sec={this.sec}  />
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
