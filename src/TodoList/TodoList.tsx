import React from 'react';
import Header from "./Header/Header";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import TasksArea from "./TasksArea/TasksArea";
import style from './TasksArea/TodoList.module.css'
import {filterValuesType} from "../App";


export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: filterValuesType) => void
    addTask: (title: string) => void
    filter: filterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {

    return (
        <div className={style.content}>
            <Header title={props.title} filter={props.filter}/>
            <TasksArea tasks={props.tasks} removeTask={props.removeTask} addTask={props.addTask} changeTaskStatus={props.changeTaskStatus}/>
            <ButtonsBar changeFilter={props.changeFilter} filter={props.filter}/>
        </div>
    );
};

export default TodoList;