import './Header.css';
import profileImg from './img/profile.png'

function Header() {
  return(
    <div className='app__header'>
      <h1 className='header__title'>TO-PROD-APP</h1>
      <img className='header__photo' src={profileImg} alt='profile'/>
    </div>
  );
}

export { Header } 
