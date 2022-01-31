import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Task from "./Task";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title} />
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <Task tasks={props.tasks}/>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;