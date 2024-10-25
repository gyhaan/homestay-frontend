import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu06Icon, CancelCircleIcon } from "hugeicons-react";

function AppNav({ role }) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (role === "none") {
    return (
      <>
        <header>
          <div className="wrapper flex items-center justify-between h-[80px] ">
            <img src="/homestay-frontend.svg" alt="logo" />
            <nav>
              <Menu06Icon
                className="mid:hidden"
                onClick={() => setIsOpen(true)}
              />
              <ul
                className={`gap-10 items-center bg-white fixed flex flex-col z-50 py-[3vh] px-4 top-0 min-w-full min-h-full mid:p-0 mid:flex-row mid:static trans`}
                style={{ right: isOpen ? "0%" : "-100%" }}
              >
                <CancelCircleIcon
                  className="ml-auto mid:hidden"
                  onClick={() => setIsOpen(false)}
                />
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
              <Menu06Icon
                className="mid:hidden"
                onClick={() => setIsOpen(true)}
              />
              <ul
                className={`gap-10 items-center bg-white fixed flex flex-col z-50 py-[3vh] px-4 top-0 h-full w-full mid:p-0 mid:flex-row mid:static trans`}
                style={{ right: isOpen ? "0%" : "-100%" }}
              >
                <CancelCircleIcon
                  className="ml-auto mid:hidden"
                  onClick={() => setIsOpen(false)}
                />
                <li>
                  <NavLink to="/listings">Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                  <NavLink to="/users/myBookings">Bookings</NavLink>
                </li>
                <button className="green-button">
                  <a href="/signup">Log Out</a>
                </button>
              </ul>
            </nav>
          </div>
        </header>
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
              <Menu06Icon
                className="mid:hidden"
                onClick={() => setIsOpen(true)}
              />
              <ul
                className={`gap-10 items-center bg-white fixed flex flex-col z-50 py-[3vh] px-4 top-0 h-full w-full mid:p-0 mid:flex-row mid:static trans`}
                style={{ right: isOpen ? "0%" : "-100%" }}
              >
                <CancelCircleIcon
                  className="ml-auto mid:hidden"
                  onClick={() => setIsOpen(false)}
                />
                <li>
                  <NavLink to="/listings">Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/guides/mylistings">My Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/guides/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/guides/myBookings">Bookings</NavLink>
                </li>
                <button className="green-button">
                  <a href="/signup">Log Out</a>
                </button>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default AppNav;
