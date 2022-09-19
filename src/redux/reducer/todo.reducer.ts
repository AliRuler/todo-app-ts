import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import Todo from "../../models/todo";

const initialState: Todo[] = [
    {id: 1, title: 'خرید هدیه', bookmark: false, description: 'dec...', status: true, theme: 'primary.main'},
    {id: 2, title: 'خرید شیر', bookmark: true, description: 'dec...', status: false, theme: 'primary.light'},
    {id: 3, title: 'خرید بلیط', bookmark: false, description: 'dec...', status: true, theme: 'error.main'},
]

export const TodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const p = state.findIndex((item) => item.id === action.payload);
            if (p >= 0) {
                state.splice(p, 1);
            }
        },
        updateTodo: (state, action: PayloadAction<number>) => {

        },
        checkTodo: (state, action: PayloadAction<number>) => {
            const p = state.findIndex((item) => item.id === action.payload);
            state[p].status = !state[p].status
        },
        bookmarkTodo: (state, action: PayloadAction<number>) => {
            const p = state.findIndex((item) => item.id === action.payload);
            state[p].bookmark = !state[p].bookmark
        },
    },
})

export const {addTodo, deleteTodo, updateTodo, checkTodo, bookmarkTodo} = TodoReducer.actions


export default TodoReducer.reducer
