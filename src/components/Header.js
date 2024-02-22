import logo from '../lentils.svg';
import './Header.css';

function Header() {
  return (
    <>
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <div className="Header-options">
          <p>Create</p>
          <p>View</p>
          <p>Play</p>
        </div>
      </header>
    </>
  );
}

export default Header;
