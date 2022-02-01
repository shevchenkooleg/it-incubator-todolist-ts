import React from 'react';
import NewTaskForm from "./NewTaskForm/NewTaskForm";
import TaskItem from "./TasksItem/TaskItem";
import {TaskType, TodoListPropsType} from "../TodoList";

type TasksAreaPropsType = {
    tasks: Array<TaskType>
}



const TasksArea = (props: TasksAreaPropsType) => {

    console.log(props.tasks)
    return (
        <div>
            <NewTaskForm/>
            <TaskItem tasks={props.tasks}/>
        </div>
    );
};

export default TasksArea;