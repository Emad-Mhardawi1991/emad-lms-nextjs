import Logo from "@/components/logo";

import SideBarRoutes from "./sideBar-routes";

const SideBar = () => {
  return (
    <div className="hidden md:flex flex-col bg-background w-72 fixed z-50 inset-y-0 h-full border-r shadow-md">
      <div className="p-4  flex item-center h-16 border-b ">
      <Logo/>
      </div>
      <div className="px-4 py-6 flex flex-col gap-3">
       <SideBarRoutes/>
      </div>
    </div>
  );
};

export default SideBar;


