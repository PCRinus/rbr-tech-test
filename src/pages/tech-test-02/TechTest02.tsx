import { LinkButton } from "@@components/linkButton/LinkButton";

export const TechTest02 = () => {
  return (
    <>
      <h1 className="text-xl text-rbrBlue">Tech Test 02</h1>

      <div className="flex gap-4">
        <LinkButton to="/card-rail" text="Card rail" />
        <LinkButton to="/hero-element" text="Hero element" />
      </div>
    </>
  );
};
