import React, {ChangeEvent, useState, KeyboardEvent, MouseEvent} from 'react';

type NewTaskFormPropsType = {
    addTask: (title: string) => void
}

const NewTaskForm = (props: NewTaskFormPropsType) => {

    const onClickAddTask = () => {
        props.addTask(title);
        setTitle('')
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressSetTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickAddTask()

        }
    }

    const [title, setTitle] = useState<string>('')
    return (
        <div>
            <input value={title}
                   onChange={onChangeSetTitle}
                   onKeyPress={onKeyPressSetTitle}/>
            <button onClick={onClickAddTask}>+
            </button>
        </div>
    );
};

export default NewTaskForm;