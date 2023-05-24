import './CreateButton.css';
import { ReactComponent as AddSVG } from '../assets/img/Vector.svg';

function CreateButton() {
  return(
    <button className='createBtn'>
      <AddSVG></AddSVG>
    </button>
  );
}

export { CreateButton } 
