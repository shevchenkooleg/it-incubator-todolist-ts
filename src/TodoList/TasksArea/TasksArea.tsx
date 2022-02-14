import React from 'react';
import NewTaskForm from "./NewTaskForm/NewTaskForm";
import TaskItems from "./TasksItem/TaskItem";
import {TaskType} from "../TodoList";

type TasksAreaPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    addTask: (title: string) => void
}



const TasksArea = (props: TasksAreaPropsType) => {

    return (
        <div>
            <NewTaskForm addTask={props.addTask}/>
            <TaskItems tasks={props.tasks} removeTask={props.removeTask}/>
        </div>
    );
};

export default TasksArea;