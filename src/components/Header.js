import logo from '../lentils.svg';
import './Header.css';

function Header() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Create</p>
      </header>
    </>
  );
}

export default Header;
