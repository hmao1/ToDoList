import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface IToDO {
    id?: string | number,
    from?: string,
    to?: string,
    content?: string,
    isCompleted?: boolean
};

interface ToDOState {
    events: IToDO[],
};

const initialState: ToDOState = {
    events: []
};

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        createToDo: (state, action) => {
            state.events.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.events = state.events.filter((item) => item.id !== action.payload.id)
        }

    }
})

export const { createToDo, deleteTodo } = toDoSlice.actions;

export const selectEvents = (state: RootState) => state.toDo.events;

export default toDoSlice.reducer;