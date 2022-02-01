import React from 'react';
import {TaskType} from "../../TodoList";

type TaskPropsType = {
    tasks: Array<TaskType>
}

const TaskItem = (props: TaskPropsType) => {
    return (
        <div>
            <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
        </div>
    );
};

export default TaskItem;