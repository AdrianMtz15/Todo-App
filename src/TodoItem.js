import './TodoItem.css';



function TodoItem({text, completed, hour, id, todos, setTodos}) {
  return(
    <>
      <li className={`todoItem`}>
        <input className="todoItem__input" type="checkbox"/>

        <section className='todoItem__content'>
          <label className={`${completed ? 'completed' : 'no-completed'} content__label`}>{text}</label>
          <span className='content__hour'>{hour}</span>
        </section>
      </li>
    </>
  );
}

export { TodoItem } 
