import './TodoList.css';

function TodoList({children, title}) {
  // const todosCompleted = children.filter((todo) => todo.props.completed === true);

  return(
    <>
      <section className='app__todoList'>
        <div className='todoList__head'>
          <h2 className="head__title">{title}</h2>
          <span className='head__hideCompleted'>Hide Completed</span>
        </div>
        
        <ul className="todoList__list">
          {children}
        </ul>
      </section>
    </>

  );
}

export { TodoList } 
