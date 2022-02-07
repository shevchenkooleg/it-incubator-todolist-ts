import React from 'react';
import {filterValuesType} from "../../App";

type ButtonsBarPropsType = {
    changeFilter: (filter: filterValuesType) => void
}

const ButtonsBar = (props: ButtonsBarPropsType) => {
    return (
        <div>
            <button onClick={() => props.changeFilter('all')}>All</button>
            <button onClick={() => props.changeFilter('active')}>Active</button>
            <button onClick={() => props.changeFilter('completed')}>Completed</button>
        </div>
    );
};

export default ButtonsBar;