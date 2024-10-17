function AppNav() {
  return (
    <header>
      <div className="wrapper flex items-center justify-between h-[80px] ">
        <img src="/homestay-frontend.svg" alt="logo" />
        <nav>
          <ul className="flex gap-10 items-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a href="/listings">Listings</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <button className="green-button">
              <a href="/signup">Sign up</a>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppNav;
