import './TodoList.css';

function TodoList({children, title}) {
  return(
    <>
      <section className='todoList__head'>
        <h2 className="head__title">{title}</h2>
        <span className='head__hideCompleted'>Hide Completed</span>
      </section>
      
      <ul className="todoList__list">
        {children}
      </ul>
    </>

  );
}

export { TodoList } 
