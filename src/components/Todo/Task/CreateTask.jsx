import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './CreateTask.scss';
import { addTask } from '../../../tasksReducers';

const CreateTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleCreate = event => {
    if (event.key === 'Enter' || event.type === 'click') {
      if (text.length >= 35 || !text.length) return;
      dispatch(addTask(text));
    }
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={text}
        onChange={event => {
          setText(event.target.value);
        }}
        placeholder="Add task"
        onKeyPress={handleCreate} />
      <button
        onClick={handleCreate}
        type="button"
        className="create-task__button">
        +
      </button>
    </div>
  );
};

const memoCreateTask = React.memo(CreateTask);

export { memoCreateTask as CreateTask };
