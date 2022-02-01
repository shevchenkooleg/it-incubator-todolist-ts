import React from 'react';
import Header from "./Header/Header";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import TasksArea from "./TasksArea/TasksArea";


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
        <div>
            <Header title={props.title} />
            <TasksArea tasks={props.tasks} />
            <ButtonsBar/>
        </div>
    );
};

export default TodoList;