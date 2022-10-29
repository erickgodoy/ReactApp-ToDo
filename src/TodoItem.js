import React from 'react';

function TodoItem(props){
    const onComplete = () => {
        alert('you have completed the task');
    }

    const onDelete = () => {
        alert('you have deleted the task');
    }

    return (
        <li className='TodoItem'>
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onComplete}
            >ck</span>

            <p>Title</p>
            <span>{props.text}</span>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--completed'}`}
            onClick={onDelete}
            >fail</span>
            
        </li>
    )
}

export { TodoItem };