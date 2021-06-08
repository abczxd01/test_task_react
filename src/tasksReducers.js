/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Начальные задачи для примера
const exapleTasks = [
  { title: 'Купить молоко', completed: false, id: nanoid(10) },
  { title: 'Купить огурцы', completed: false, id: nanoid(10) },
  { title: 'Купить масло', completed: true, id: nanoid(10) },
  { title: 'Купить хлеб', completed: true, id: nanoid(10) },
];

const sliceTasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: exapleTasks,
  },
  reducers: {
    deleteTask(state, action) {
      const searchIndex = state.tasks.findIndex(
        task => task.id === action.payload,
      );
      state.tasks.splice(searchIndex, 1);
    },
    addTask(state, action) {
      state.tasks.push({
        title: action.payload,
        completed: false,
        id: nanoid(10),
      });
    },
    completeTask(state, action) {
      const searchIndex = state.tasks.findIndex(
        task => task.id === action.payload,
      );
      state.tasks[searchIndex].completed = !state.tasks[searchIndex].completed;
    },
  },
});

export const tasksReducers = sliceTasks.reducer;
export const { deleteTask, addTask, completeTask } = sliceTasks.actions;
