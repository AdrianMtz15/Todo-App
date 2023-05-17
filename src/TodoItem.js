import React from 'react';
import './TodoItem.css';
import trashIcon from './img/trash-solid.svg';


function TodoItem({text, completed, hour, id, toggleComplete}) {

  return(
    <>
      <li className={`todoItem`}>
        <input 
          className="todoItem__input" 
          type="checkbox" 
          checked={completed}
          onChange={event => toggleComplete(id, event.target.checked)}
        />

        <section className='todoItem__content'>
          <label className={`${completed ? 'completed' : 'no-completed'} content__label`}>{text}</label>
          <span className='content__hour'>{hour}</span>
        </section>

        <section className='todoItem__trash'>
          <img className='trash__icon' alt='trash icon' src={trashIcon}/>
        </section>
      </li>
    </>
  );
}

export { TodoItem } 
