import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from '../../Task';
import CreateTaskInput from './CreateTaskInput.jsx';
import * as tasksAction from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />

          ))}
        </ul>
      </main>
    );
  }
}

TasksList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = state => ({
    tasks: sortedTasksListSelector(state),
  });

export default connect(mapState, mapDispatch)(TasksList);
