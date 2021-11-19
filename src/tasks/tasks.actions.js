import { tasksListSelector } from './tasks.selectors';
import * as tasksGateway from './tasksGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = (dispatch) =>{
    tasksGateway.fetchTasksList().then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };

  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = (dispatch, getState) =>{
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(taskElem => taskElem.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTaskList()));
  };

  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction =  (dispatch) =>{
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };

  return thunkAction;
};

export const createTask = text => {
  const thunkAction = (dispatch) =>{
    const newTask = {
      text,
      done: false,
    };
    tasksGateway.createTask(newTask).then(() => dispatch(getTaskList()));
  };

  return thunkAction;
};
