import { observable } from 'mobx';
import tdata from '../tdata';
import App from '../App';

class TaskData {
  @observable all = tasks;
}

export default new TaskData();
