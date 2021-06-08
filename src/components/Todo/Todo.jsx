import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './Todo.scss';
import { CreateTask } from './Task/CreateTask';
import { Filters } from './Additions/Filters';
import { CounterTask } from './Additions/CounterTask';
import { TaskList } from './Task/TaskList';

export const Todo = () => {
  const tasks = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('all');
  return (
    <div className="todo">
      <h1 className="todo__title">Todo-List</h1>
      <CreateTask />
      <div className="task-list">
        <TaskList tasks={tasks} filter={filter} />
      </div>
      <Filters setFilter={setFilter} />
      <CounterTask tasks={tasks} />
    </div>
  );
};
