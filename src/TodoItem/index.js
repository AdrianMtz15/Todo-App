import React from 'react';
import { ReactComponent as TrashIconSVG } from '../assets/img/trash-solid.svg';
import './TodoItem.css';

function TodoItem({text, completed, hour, id, toggleComplete, deleteTodo}) {

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
          <TrashIconSVG onClick={() => deleteTodo(id)} className='trash__icon'/>
        </section>
      </li>
    </>
  );
}

export { TodoItem } 
