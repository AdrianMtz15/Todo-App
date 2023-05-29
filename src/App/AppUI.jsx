
import { Header } from '../Header';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateButton } from '../CreateButton';
import { TodoSearch } from '../TodoSearch';
import { TodoLoader } from '../TodoLoader/TodoLoader';

function AppUI({
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    todosSearched,
    toggleTodoComplete,
    deleteTodo,
    loading,
    error
}) {
    return (
        <>
            <Header/>

            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            />

            <TodoList title={"Today"}>
                {error && <p>Lo sentimos, hubo un error</p>}
                {loading && <TodoLoader/>}
                {todosSearched.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed} 
                        hour={todo.hour}
                        toggleComplete={(id, completed) => toggleTodoComplete(id, completed)}
                        id={todo.id}
                        deleteTodo={(id) => deleteTodo(id)}
                    />
                ))}

            </TodoList>
            
            <CreateButton/>
        </>
    )
}

export {
    AppUI
}