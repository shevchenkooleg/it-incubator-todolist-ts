import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList/TodoList";

let whatToLearnTasks: Array<TaskType> = [
    {
        id: 1,
        title: 'Redux',
        isDone: true
    },
    {
        id: 2,
        title: 'React',
        isDone: false
    },
    {
        id: 3,
        title: 'JS',
        isDone: true
    }
]

let whatToReadTasks: Array<TaskType> = [
    {
        id: 1,
        title: 'JS for children',
        isDone: true
    },
    {
        id: 2,
        title: 'HTML/CSS',
        isDone: false
    },
    {
        id: 3,
        title: 'War and Peace',
        isDone: false
    }
]

let whatToByTasks: Array<TaskType> = [
    {
        id: 1,
        title: 'Milk',
        isDone: false
    },
    {
        id: 2,
        title: 'Bread',
        isDone: false
    },
    {
        id: 3,
        title: 'Meat',
        isDone: true
    }
]


function App() {
    return (
        <div className="App">
            <TodoList title={'What to learn'} tasks={whatToLearnTasks}/>
            <TodoList title={'What to read'} tasks={whatToReadTasks}/>
            <TodoList title={'What to by'} tasks={whatToByTasks}/>
        </div>
    );
}

export default App;
