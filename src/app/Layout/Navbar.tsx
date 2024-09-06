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
      name: "Progress",
      href: "/progress",
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
    }
  ];

  return (
    <div className="w-full h-20 flex items-center justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      {/* Nav Menu here... */}
      <div className="flex items-center justify-center gap-4">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="text-gray-800/80">
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
