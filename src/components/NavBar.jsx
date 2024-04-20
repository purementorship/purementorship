import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold" to="/">
          <h1>Pure Mentorship</h1>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            className="text-sm font-medium hover:underline hover:underline-offset-4"
            to="/Home"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:underline-offset-4"
            to="/About"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:underline-offset-4"
            to="/Mentors"
          >
            Mentors
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:underline-offset-4"
            to="/Contact"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Outlet />
    </header>
  );
};

export default NavBar;
