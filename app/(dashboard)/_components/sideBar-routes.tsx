"use client"

import {usePathname } from 'next/navigation'

import { MdDashboard } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import SidebarItem from "./sideBarItem";

const guestRoutes = [
  {
    icon: MdDashboard,
    labe: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: FaCompass,
    labe: "Browse",
    href: "/search",
  },
];


const teacherRoutes = [
  {
    icon: MdDashboard,
    labe: "Courses",
    href: "/dashboard/teacher/courses",
  },
  {
    icon: FaCompass,
    labe: "Analytics",
    href: "/analytics",
  },
];

const SideBarRoutes = () => {
  const pathName = usePathname()
  const isTeacher = pathName.includes("/teacher")
  const routes = isTeacher? teacherRoutes  : guestRoutes;

  return (
    <div className="flex flex-col gap-3">
      {routes.map((route) => (
        <SidebarItem key={route.href} Icon={route.icon} href={route.href} label={route.labe} />
      ))}
    </div>
  );
};

export default SideBarRoutes;
