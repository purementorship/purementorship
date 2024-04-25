import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
const NavBar = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
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
      <div className="ml-auto hidden space-x-6 lg:flex">
        <Link className="font-medium hover:underline" href="#">
          Home
        </Link>
        <Link className="font-medium hover:underline" href="#">
          About
        </Link>
        <Link className="font-medium hover:underline" href="#">
          Services
        </Link>
        <Link className="font-medium hover:underline" href="#">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
