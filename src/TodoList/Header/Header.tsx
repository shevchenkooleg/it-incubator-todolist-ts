import React from 'react';

type TodoListHeaderPropsType = {
    title: string
}

const Header = (props:TodoListHeaderPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Header;