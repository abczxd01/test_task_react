import React from 'react';

import { Task } from './Task';

export const TaskList = ({ tasks, filter }) => {
  const checkCompleted = completed => {
    const values = {
      current: !completed,
      completed,
    };
    return values[filter];
  };

  if (filter === 'all') {
    return tasks.map(task => (
      <Task
        title={task.title}
        key={task.id}
        completed={task.completed}
        id={task.id} />
    ));
  }

  return tasks
    .filter(task => checkCompleted(task.completed))
    .map(task => (
      <Task
        title={task.title}
        key={task.id}
        completed={task.completed}
        id={task.id} />
    ));
};
