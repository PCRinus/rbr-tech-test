import RbrLogo from "../../../assets/rbr_2024_logo.webp";

export const Header = () => {
  return (
    <header className="bg-rbrBlue">
      <picture className="flex items-center aspect-auto p-6">
        <img src={RbrLogo} alt="RBR Logo" className="w-24" />
      </picture>
    </header>
  );
};
