import React from 'react';
import NewTaskForm from "./NewTaskForm/NewTaskForm";
import TaskItems from "./TasksItem/TaskItem";
import {TaskType} from "../TodoList";

type TasksAreaPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
}



const TasksArea = (props: TasksAreaPropsType) => {

    return (
        <div>
            <NewTaskForm/>
            <TaskItems tasks={props.tasks} removeTask={props.removeTask}/>
        </div>
    );
};

export default TasksArea;