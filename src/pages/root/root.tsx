import { Link } from "react-router-dom";
import RbrLogo from "../../assets/rbr_2024_logo.webp";

export const Root = () => {
  return (
    <>
      <header>
        <picture className="flex items-center aspect-auto p-6">
          <img src={RbrLogo} alt="RBR Logo" className="w-48" />
        </picture>
      </header>

      <div className="flex gap-12 justify-center px-24">
        <Link to="/tech-test-01" className="hover:underline text-blue-600">
          Tech Test 01
        </Link>
        <Link to="/tech-test-02" className="hover:underline text-blue-600">
          Tech Test 02
        </Link>
      </div>
    </>
  );
};
