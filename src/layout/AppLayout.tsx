import { Outlet } from "react-router";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="max-w-[1920px] mx-auto h-screen flex flex-col overflow-y-hidden overflow-x-hidden   ">
      <Header />
      <main className=" min-h-screen  ">
        <Outlet />
      </main>
    </div>
  );
}
