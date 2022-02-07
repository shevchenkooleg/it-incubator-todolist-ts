import React from 'react';
import {TaskType} from "../../TodoList";

type TaskPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
}

const TaskItems = (props: TaskPropsType) => {
    const tasksComponentsList = props.tasks.map(task => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => props.removeTask(task.id)}>X</button>
            </li>)
    })

    return (
        <div>
            {tasksComponentsList}
        </div>
    );
};

export default TaskItems;