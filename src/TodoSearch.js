import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, totalTodos, completedTodos}) {

    return (
        <>
            <section className="app__todoSearch">
                <h1 className="todoSearch__title">Meta: {completedTodos} / {totalTodos} TODO's</h1>
                <input 
                    className="todoSearch__input"
                    type="text" 
                    placeholder="Search TODO"
                    onChange={(event) => setSearchValue(event.target.value)}
                    value={searchValue}
                />
            </section>
        </>
    );
}

export { TodoSearch }