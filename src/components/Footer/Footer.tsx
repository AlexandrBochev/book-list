import { FOOTER_CONTENT } from "@/lib/constants";
import { Link } from "react-router-dom";
import { GithubIcon } from "../icons/GithubIcon";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-800 text-white py-2 px-4">
      <Link
        to={FOOTER_CONTENT.githubUrl}
        target="blank"
        className="flex items-center space-x-2 hover:text-gray-300 active:text-gray-400"
      >
        <GithubIcon />
        <p>{FOOTER_CONTENT.title}</p>
      </Link>
    </footer>
  );
};

export { Footer };
