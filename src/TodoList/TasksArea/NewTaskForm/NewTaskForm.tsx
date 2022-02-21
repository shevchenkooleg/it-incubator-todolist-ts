import React, {ChangeEvent, useState, KeyboardEvent, MouseEvent} from 'react';
import style from './NewTaskForm.module.css'

type NewTaskFormPropsType = {
    addTask: (title: string) => void
}

const NewTaskForm = (props: NewTaskFormPropsType) => {

    const onClickAddTask = () => {
        if (title.trim()) {
            props.addTask(title);
            setTitle('')
        } else {
            setError(true)
            setTitle('')
        }
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const onKeyPressSetTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickAddTask()

        }
    }


    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    return (
        <div>
            <input value={title}
                   onChange={onChangeSetTitle}
                   onKeyPress={onKeyPressSetTitle}
                   className={error ? style.error : ''}/>
            <button onClick={onClickAddTask}>+
            </button>
            {error && <div style={{color: 'red', margin: '10px 0 10px 0'}}>Empty string is forbidden!</div>}
        </div>
    );
};

export default NewTaskForm;