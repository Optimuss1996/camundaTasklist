import SidebarHeader from "./SidebarHeader";
import FilterItems from "./FilterItems";
export default function Sidebar() {
  return (
    <div className=" h-screen w-full  md:w-64 px-2 py-1  shadow-[-11px_0px_6px_-10px_rgba(0,_0,_0,_0.1)] ">
      <SidebarHeader />
      <FilterItems />
    </div>
  );
}
