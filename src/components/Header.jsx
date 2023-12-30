function Header() {
  return (
    <header>
      <div className="container">
        <div className="headerWrapper">
          <div className="logo">
            <img src="../images/logo.png" alt="logo" />
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>MealCard</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
