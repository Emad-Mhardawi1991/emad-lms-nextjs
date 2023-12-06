"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconType } from "react-icons";

interface SidebarItemProps {
  Icon: IconType;
  label: string;
  href: string;
}

const SidebarItem = ({ label, href, Icon }: SidebarItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center   gap-2 hover:bg-muted hover:text-black py-3 px-2 rounded-md ease-in-out duration-150",
        isActive && "bg-muted text-black"
      )}
    >
      <Icon size={22} />
      <span className="font-semibold">{label}</span>
    </Link>
  );
};

export default SidebarItem;
