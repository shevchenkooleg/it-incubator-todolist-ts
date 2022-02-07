import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList/TodoList";

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
    )

    const [filt, setFilter] = useState<filterValuesType>('all')

    const removeTask = (taskID: number) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
        console.log(filteredTasks)
    }

    const getFilteredTasksForRender = () => {
        switch (filt) {
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
            <TodoList title={'What to learn'} tasks={FilteredTasksForRender} removeTask={removeTask} changeFilter={changeFilter}/>
            {/*<TodoList title={'What to read'} tasks={whatToReadTasks} removeTask={removeTask}/>*/}
            {/*<TodoList title={'What to by'} tasks={whatToByTasks} removeTask={removeTask}/>*/}
        </div>
    );
}

export default App;
