import { Header } from './Header';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateButton } from './CreateButton';
import { TodoSearch } from './TodoSearch';

const todos = [
  { text: "Tarea 1", completed: true, hour: "13:00" },
  { text: "Tarea 2", completed: true, hour: "13:00" },
  { text: "Tarea 3", completed: true, hour: "13:00" },
  { text: "Tarea 4", completed: true, hour: "13:00" }
]

function App() {
  return (
    <>
      <Header/>

      <TodoSearch/>

      <TodoList title={"Today"}>
        { 
          todos.map(todo => (
            <TodoItem 
              key={todos.indexOf(todo)} 
              text={todo.text} 
              completed={todo.completed} 
              hour={todo.hour}
            />
          )) 
        }
      </TodoList>

      <TodoList title={"Tomorrow"}>
        { 
          todos.map(todo => (
            <TodoItem 
              key={todos.indexOf(todo)} 
              text={todo.text} 
              completed={todo.completed} 
              hour={todo.hour}
              />
          )) 
        }
      </TodoList>

      <CreateButton/>
    </>
  );
}

export {
  App
} 
