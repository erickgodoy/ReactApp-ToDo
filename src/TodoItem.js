import React from 'react';

function TodoItem(props){
    return (
        <li>
            <p>Title</p>
            <p>Description</p>
            <span>{props.text}</span>
        </li>
    )
}

export { TodoItem };