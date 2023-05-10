import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateButton } from './CreateButton';

function App() {
  return (
    <div>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateButton/>
    </div>
  );
}

export {
  App
} 
