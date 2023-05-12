import React from "react";

function TodoSearch({searchValue, setSearchValue, totalTodos, completedTodos}) {
    console.log(searchValue);

    return (
        <>
            <h1>Has completado {completedTodos} de {totalTodos} TODO's</h1>
            <input 
                type="text" 
                placeholder="Search TODO"
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
                value={searchValue}
            />

               
        </>
    );
}

export { TodoSearch }