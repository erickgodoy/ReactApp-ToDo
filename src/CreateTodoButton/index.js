import React from 'react';

function CreateTodoButton(){
    const onClickButton = () =>{
        alert('Aqui se deberia abrir el modal');
    }
    
    return (
        <button 
        className='CreateTodoButton'
        onClick={onClickButton}
        >+</button>
    )
}

export { CreateTodoButton };