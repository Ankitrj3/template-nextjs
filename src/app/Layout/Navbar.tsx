import ProjectLogo from "@/app/custom-components/ProjectLogo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Connect",
      href: "/connect",
    },
    {
      name: "Forum",
      href: "/forum",
    },
    {
      name: "Directory",
      href: "/directory",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <div className="w-full h-20 flex items-center justify-between gap-4 bg-white sticky top-0 z-50 rounded-[12px]">
      <ProjectLogo onlyProjectLogo />
      <div className="flex items-center justify-center gap-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-black px-4 py-2 rounded-3xl hover:bg-black hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
        <Link href="/dashboard">
          {/* <Button>Sign In</Button> */}
        </Link>
      </div>
    </div>
  );
}
