import NavBar from "./_components/navBar";
import SideBar from "./_components/sideBar";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div className="h-full bg-muted flex flex-col">
      <SideBar />
      <NavBar />
      <div className=" md:pl-72 flex flex-col h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
