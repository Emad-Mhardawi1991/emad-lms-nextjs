import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet";
  
  import { RiMenuLine } from "react-icons/ri";
  import SideBarRoutes from "./sideBar-routes";
  import Logo from "@/components/logo";
  import SideBar from "./sideBar";
  import { Button } from "@/components/ui/button";
  
  const MobileSideBar = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button aria-label="menuBtn" size='icon' variant='ghost' className="md:hidden">
            <RiMenuLine size={22}  />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SideBar />
        </SheetContent>
      </Sheet>
    );
  };
  
  export default MobileSideBar;
  