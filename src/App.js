import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateButton } from './CreateButton';

const todos = [
  { text: "Tarea 1", completed: true },
  { text: "Tarea 2", completed: true },
  { text: "Tarea 3", completed: true },
  { text: "Tarea 4", completed: true }
]

function App() {
  return (
    <div>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        { 
          todos.map(todo => (
            <TodoItem key={todos.indexOf(todo)} text={todo.text} completed={todo.completed}/>
          )) 
        }
      </TodoList>
      <CreateButton/>
    </div>
  );
}

export {
  App
} 
