import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <h1 className="text-xl text-rbrBlue">
        This is the technical test for Red Bull Racing
      </h1>
      <h2 className="text-lg text-rbrGrey">
        To view the technical assignments, choose one of the links from below
      </h2>
      <div className="flex gap-4">
        <Link
          to="/tech-test-01"
          className="rounded-full bg-rbrRed-500 px-6 py-2 text-sm text-white hover:bg-rbrRed-600"
        >
          Tech Test 01
        </Link>
        <Link
          to="/tech-test-02"
          className="rounded-full bg-rbrRed-500 px-6 py-2 text-sm text-white hover:bg-rbrRed-600"
        >
          Tech Test 02
        </Link>
      </div>
    </>
  );
};
