import Vector from '../images/Vector.svg';

function Header() {
 return (
  <header className="header">
    <img src={Vector} alt="Логотип заголовка" className="header__logo" />
  </header>
 )
}

export default Header;