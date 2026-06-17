import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksSlice';

export const Store = configureStore({
  reducer: { tasks: tasksReducer },
});