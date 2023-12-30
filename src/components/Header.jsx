import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="headerWrapper">
          <div className="logo">
            <img src="../images/logo.png" alt="logo" />
          </div>
          <nav>
            <ul className="headerUl">
              <li>Home</li>
              <li>MealCard</li>
              <li>Details</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
