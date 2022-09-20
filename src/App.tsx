import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./section/home";
import TodoForm from "./section/todoForm";
import {Provider} from "react-redux";
import TodoDetails from "./section/todoDetails";
import {store} from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/todoForm/:state'} element={<TodoForm/>}/>
                    <Route path={'/todos/:todoId'} element={<TodoDetails/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
