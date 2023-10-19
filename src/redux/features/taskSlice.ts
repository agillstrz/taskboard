import { taskProps } from "@/type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: taskProps[] = [];
export const task = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: () => initialState,
    addTask: (
      state,
      action: PayloadAction<{
        id: number;
        task: number;
        title: string;
        description: string;
      }>
    ) => {
      state.push(action.payload);
    },
    updateTask: (
      state,
      action: PayloadAction<{
        id: number;
        task: number;
        title: string;
        description: string;
      }>
    ) => {
      const { id, task, title, description } = action.payload;
      const taskIndex = state.findIndex((data) => data.id === id);
      if (taskIndex !== -1) {
        state[taskIndex] = {
          ...state[taskIndex],
          task,
          title,
          description,
        };
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      return state.filter((data) => data.id !== id);
    },
  },
});

export const { reset, addTask, updateTask, deleteTask } = task.actions;
export default task.reducer;
