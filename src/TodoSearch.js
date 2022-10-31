import React from 'react';

function TodoSearch({searchValue,setSearchValue}){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return [
        <input 
        onChange={onSearchValueChange}
        value = {searchValue}
        placeholder="task Name" 
        />,
        <p>{searchValue}</p>
    ]
}

export { TodoSearch };