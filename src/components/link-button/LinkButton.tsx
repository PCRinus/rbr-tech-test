import { Link } from "react-router-dom";

type LinkButtonProps = {
  to: string;
  text: string;
};

export const LinkButton = ({ to, text }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className="rounded-full bg-rbrRed-500 px-6 py-2 text-sm text-white hover:bg-rbrRed-600"
    >
      {text}
    </Link>
  );
};
