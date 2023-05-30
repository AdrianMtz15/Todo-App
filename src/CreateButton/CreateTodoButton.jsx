import React from 'react';

import './CreateButton.css';
import { ReactComponent as AddSVG } from '../assets/img/Vector.svg';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateButton() {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return(
    <button className='createBtn' onClick={()=>setOpenModal(!openModal)}>
      <AddSVG></AddSVG>
    </button>
  );
}

export { CreateButton } 
