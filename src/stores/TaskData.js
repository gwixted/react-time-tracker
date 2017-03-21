import { observable } from 'mobx';
import tdata from '../tdata';

class TaskData {
  @observable all = tdata;
}

export default new TaskData();
