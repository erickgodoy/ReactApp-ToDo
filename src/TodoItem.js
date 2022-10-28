import React from 'react';

function TodoItem(props){
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>ck</span>

            <p>Title</p>
            <span>{props.text}</span>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--completed'}`}>fail</span>
            
        </li>
    )
}

export { TodoItem };