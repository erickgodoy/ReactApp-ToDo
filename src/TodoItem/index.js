import React from 'react';

function TodoItem(props){

    return (
        <li className='TodoItem'>
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >ck</span>

            <p>Title</p>
            <span>{props.text}</span>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--completed'}`}
            onClick={props.onDelete}
            >fail</span>
            
        </li>
    )
}

export { TodoItem };