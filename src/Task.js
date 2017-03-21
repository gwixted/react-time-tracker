import React from 'react';

import TaskName from './TaskName';
import TaskTime from './TaskTime';
import Buttons from './Buttons';

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
      </li>
    )
  }
}

export default Task;
