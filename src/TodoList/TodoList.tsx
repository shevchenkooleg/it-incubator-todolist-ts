import React from 'react';
import Header from "./Header/Header";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import TasksArea from "./TasksArea/TasksArea";
import style from './TasksArea/TodoList.module.css'


export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {

    // console.log(props.tasks)

    return (
        <div className={style.content}>
            <Header title={props.title} />
            <TasksArea tasks={props.tasks} />
            <ButtonsBar/>
        </div>
    );
};

export default TodoList;