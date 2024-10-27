import RbrLogo from "@@assets/rbr_2024_logo.webp";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-rbrBlue">
      <Link to="/">
        <picture className="flex aspect-auto items-center p-6">
          <img src={RbrLogo} alt="RBR Logo" className="w-24" />
        </picture>
      </Link>
    </header>
  );
};
