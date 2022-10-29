import React from 'react';

function CreateTodoButton(){
    return (
        <button 
        className='CreateTodoButton'
        onClick={() => console.log('click')}
        >+</button>
    )
}

export { CreateTodoButton };