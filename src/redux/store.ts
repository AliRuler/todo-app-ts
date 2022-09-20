import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./reducer/todo.reducer";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    todo: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export  const store = configureStore({
    reducer: {
        todo: persistedReducer,
    },
    middleware: [],
})

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch