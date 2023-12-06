import UserMenu from "./userMenu";
import Link from 'next/link'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import MobileSideBar from "./mobileSideBar";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="h-16 border-b shadow-sm bg-background  md:pl-72 ">
      <div className="px-2 md:px-4 h-full flex items-center justify-between" >
      <MobileSideBar/>
      <div className=" bg-red-100 ">search placeholders</div>

      <div className=" h-full flex justify-center items-center gap-6 ">
        <Link href='/dashboard/teacher'>
          <Button size='sm' variant='outline'>

            <span>Teacher Mode</span> 
          </Button>
        </Link>
        <FaRegMessage className="w-4 h-4" />
        <IoIosNotificationsOutline className="w-6 h-6" />
        <UserMenu />
      </div>
      </div>
    
    </div>
  );
};

export default NavBar;
