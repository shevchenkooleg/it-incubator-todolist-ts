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
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {

    return (
        <div className={style.content}>
            <Header title={props.title} />
            <TasksArea tasks={props.tasks} removeTask={props.removeTask} addTask={props.addTask}/>
            <ButtonsBar changeFilter={props.changeFilter}/>
        </div>
    );
};

export default TodoList;