import { NavLink, Outlet } from "react-router-dom";

function AppNav({ role }) {
  if (role === "none") {
    return (
      <>
        <header>
          <div className="wrapper flex items-center justify-between h-[80px] ">
            <img src="/homestay-frontend.svg" alt="logo" />
            <nav>
              <ul className="flex gap-10 items-center">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <NavLink to="/listings">Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/events">Events</NavLink>
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
        <Outlet />
      </>
    );
  }

  if (role === "user") {
    return (
      <>
        <header>
          <div className="wrapper flex items-center justify-between h-[80px] ">
            <img src="/homestay-frontend.svg" alt="logo" />
            <nav>
              <ul className="flex gap-10 items-center">
                <li>
                  <NavLink to="/listings">Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                  <NavLink to="/events">Bookings</NavLink>
                </li>
                <button className="green-button">
                  <a href="/signup">Log Out</a>
                </button>
              </ul>
            </nav>
          </div>
        </header>
        <Outlet />
      </>
    );
  }

  if (role === "guide") {
    return (
      <>
        <header>
          <div className="wrapper flex items-center justify-between h-[80px] ">
            <img src="/homestay-frontend.svg" alt="logo" />
            <nav>
              <ul className="flex gap-10 items-center">
                <li>
                  <NavLink to="/listings">Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/events">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/events">Bookings</NavLink>
                </li>
                <button className="green-button">
                  <a href="/signup">Log Out</a>
                </button>
              </ul>
            </nav>
          </div>
        </header>
        <Outlet />
      </>
    );
  }
}

export default AppNav;
