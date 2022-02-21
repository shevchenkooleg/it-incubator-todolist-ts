import React, {ChangeEvent} from 'react';
import {TaskType} from "../../TodoList";
import style from './TaskItem.module.css'

type TaskPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const TaskItems = (props: TaskPropsType) => {
    const tasksComponentsList = props.tasks.map(task => {


        const taskClass = task.isDone ? style.task_completed : style.task

        const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {props.changeTaskStatus(task.id, e.currentTarget.checked)}

    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.isDone}
                   onChange={onChangeCheckBoxHandler}/>
            <span className={taskClass}>{task.title}</span>
            <button onClick={() => props.removeTask(task.id)}>X</button>
        </li>)
}
)

return (
    <div>
        {tasksComponentsList}
    </div>
);
}
;

export default TaskItems;