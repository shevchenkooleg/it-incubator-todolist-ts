import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList/TodoList";
import {v1} from 'uuid';
import taskItem from "./TodoList/TasksArea/TasksItem/TaskItem";

// let whatToLearnTasks: Array<TaskType> = [
//     {
//         id: 1,
//         title: 'Redux',
//         isDone: true
//     },
//     {
//         id: 2,
//         title: 'React',
//         isDone: false
//     },
//     {
//         id: 3,
//         title: 'JS',
//         isDone: true
//     }
// ]
// let whatToReadTasks: Array<TaskType> = [
//     {
//         id: 1,
//         title: 'JS for children',
//         isDone: true
//     },
//     {
//         id: 2,
//         title: 'HTML/CSS',
//         isDone: false
//     },
//     {
//         id: 3,
//         title: 'War and Peace',
//         isDone: false
//     }
// ]
// let whatToByTasks: Array<TaskType> = [
//     {
//         id: 1,
//         title: 'Milk',
//         isDone: false
//     },
//     {
//         id: 2,
//         title: 'Bread',
//         isDone: false
//     },
//     {
//         id: 3,
//         title: 'Meat',
//         isDone: true
//     }
// ]

export type filterValuesType = 'all' | 'active' | 'completed'


function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {
                id: v1(),
                title: 'Redux',
                isDone: true
            },
            {
                id: v1(),
                title: 'React',
                isDone: false
            },
            {
                id: v1(),
                title: 'JS',
                isDone: true
            }
        ]
    )

    const [filter, setFilter] = useState<filterValuesType>('all')

    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
        console.log(filteredTasks)
    }

    const addTask = (title: string) => {
        // const newTask: TaskType = {
        //     id: v1(), title: title, isDone: false
        // }
        // const updatedTasks = [newTask, ...tasks]
        // setTasks(updatedTasks)
        setTasks([{id: v1(), title: title, isDone: false}, ...tasks])
    }

    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskID ? {...t, isDone: isDone} : t))
    }

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case 'completed':
                return tasks.filter(t => t.isDone === true)
            case "active":
                return tasks.filter(t => t.isDone === false)
            default:
                return tasks
        }
    }

    const changeFilter = (filter: filterValuesType) => {
        setFilter(filter)
    }

    const FilteredTasksForRender = getFilteredTasksForRender()


    return (
        <div className="App">
            <TodoList title={'What to learn'} tasks={FilteredTasksForRender} removeTask={removeTask}
                      changeFilter={changeFilter} addTask={addTask} filter={filter} changeTaskStatus={changeTaskStatus}/>
            {/*<TodoList title={'What to read'} tasks={whatToReadTasks} removeTask={removeTask}/>*/}
            {/*<TodoList title={'What to by'} tasks={whatToByTasks} removeTask={removeTask}/>*/}
        </div>
    );
}

export default App;
