import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const Root = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-4 px-20 py-8">
        <Outlet />
      </main>
    </>
  );
};
