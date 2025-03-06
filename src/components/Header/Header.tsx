import { Link } from "react-router-dom";
import { Logo } from "../icons/Logo";
import { HEADER_CONTENT, ROUTES } from "@/lib/constants";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white text-center py-2 px-4">
      <Link to={ROUTES.HOME} className="flex items-center space-x-2 hover:text-gray-300 active:text-gray-400">
        <Logo />
        <h1 className="text-xl">{HEADER_CONTENT.title}</h1>
      </Link>
      <Button asChild className="bg-gray-600 hover:bg-gray-700 active:bg-gray-900">
        <Link to={ROUTES.ADD_BOOK}>{HEADER_CONTENT.addNewBook}</Link>
      </Button>
    </header>
  );
};

export { Header };
