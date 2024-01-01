import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="headerWrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul className="headerUl">
              <Link to="/home">Home</Link>
              <Link to="/meals">Meals</Link>
              <Link to="/detail">Details</Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
