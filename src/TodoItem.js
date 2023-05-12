import './TodoItem.css';


function TodoItem({text, completed, hour}) {
  return(
    <>
      <li className="todoItem">
        <input className="todoItem__input" type="checkbox" id="todoItemInput"/>

        <section className='todoItem__content'>
          <label className="content__label" htmlFor="todoItemInput">{text}</label>
          <span className='content__hour'>{hour}</span>
        </section>
      </li>
    </>
  );
}

export { TodoItem } 
