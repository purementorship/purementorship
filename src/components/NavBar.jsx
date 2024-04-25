import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
const NavBar = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2" href="#">
            <img src="./src/assets/logo.svg" className="h-6 w-6" />
            <span className="font-semibold">PURE MENTORSHIP</span>
          </Link>
          <div className="mt-6 grid gap-4">
            <Link className="flex items-center gap-2 font-medium" to="/">
              Home
            </Link>
            <Link className="flex items-center gap-2 font-medium" to="/">
              About
            </Link>
            <Link className="flex items-center gap-2 font-medium" to="/">
              Services
            </Link>
            <Link className="flex items-center gap-2 font-medium" to="/">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/*Desktop Navbar*/}
      <div className="flex items-center gap-5 hidden lg:flex pl-10">
          <img src="./src/assets/logo.svg"/>
          <div className = "flex flex-col">
            <span className="text-pmpurple font-bold text-lg">PURE MENTORSHIP</span>
            <p className="text-sm font-light">The path to success is not discovered alone but set ablaze together.</p>
          </div>
      </div>
      <div className="ml-auto hidden space-x-6 lg:flex font-normal gap-7 pr-10">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/About">
          About Us
        </Link>
        <Link className="hover:underline" to="/Team">
          Our Team
        </Link>
        <Link className="hover:underline" to="/Blog">
          Blog
        </Link>
        <Link className="hover:underline" to="/Join">
          Join Us
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
