import React from 'react';
import {filterValuesType} from "../../App";
import style from './Header.module.css'

type TodoListHeaderPropsType = {
    title: string
    filter: filterValuesType
}

const Header = (props:TodoListHeaderPropsType) => {
    return (
        <div>
            <h3>{props.title}<div className={style.blinker}>{props.filter}</div></h3>
        </div>
    );
};

export default Header;