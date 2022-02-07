import React from 'react';
import Header from "./Header/Header";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import TasksArea from "./TasksArea/TasksArea";
import style from './TasksArea/TodoList.module.css'
import {filterValuesType} from "../App";


export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: filterValuesType) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {

    return (
        <div className={style.content}>
            <Header title={props.title} />
            <TasksArea tasks={props.tasks} removeTask={props.removeTask}/>
            <ButtonsBar changeFilter={props.changeFilter}/>
        </div>
    );
};

export default TodoList;