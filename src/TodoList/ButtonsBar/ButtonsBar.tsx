import React from 'react';
import {filterValuesType} from "../../App";
import style from './ButtonsBar.module.css'

type ButtonsBarPropsType = {
    changeFilter: (filter: filterValuesType) => void
    filter: filterValuesType
}

const ButtonsBar = (props: ButtonsBarPropsType) => {

    return (
        <div className={style.content}>
            <button className={props.filter === 'all' ? style.button_active : ''} onClick={() => props.changeFilter('all')}>All</button>
            <button className={props.filter === 'active' ? style.button_active : ''} onClick={() => props.changeFilter('active')}>Active</button>
            <button className={props.filter === 'completed' ? style.button_active : ''} onClick={() => props.changeFilter('completed')}>Completed</button>
        </div>
    );
};

export default ButtonsBar;