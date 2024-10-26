import { LinkButton } from "@@components/linkButton/LinkButton";

export const Homepage = () => {
  return (
    <>
      <h1 className="text-xl text-rbrBlue">RBR Technical Test</h1>
      <h2 className="text-lg text-rbrGrey">
        To view the technical assignments, choose one of the links from below
      </h2>
      <div className="flex gap-4">
        <LinkButton to="/tech-test-01" text="Tech Test 01" />
        <LinkButton to="/tech-test-02" text="Tech Test 02" />
      </div>
    </>
  );
};
