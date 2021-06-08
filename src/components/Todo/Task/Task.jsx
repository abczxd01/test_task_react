import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './Task.scss';
import { completeTask, deleteTask } from '../../../tasksReducers';

export const Task = ({ title, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <button
        type="button"
        onClick={() => {
          dispatch(completeTask(id));
        }}>
        <p
          className={
            completed ? 'task__text task__text_completed' : 'task__text'
          }>
          {title}
        </p>
      </button>
      <button
        type="button"
        className="task__bth-delete"
        onClick={() => {
          dispatch(deleteTask(id));
        }}>
        Delete
      </button>
    </div>
  );
};

Task.propTypes = {
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
};
