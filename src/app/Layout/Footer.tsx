import ProjectLogo from "@/app/components/ProjectLogo";
import React from "react";

type Props = {};

export default function Footer({}: Props) {

  const year = new Date().getFullYear();

  return (
    <div className="w-full h-20 flex flex-col md:flex-row items-center justify-between gap-4">
      <ProjectLogo />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-lg md:text-2xl">Custom ML App</h3>
        <p className="text-sm md:text-xs text-center">
          &copy; {year}, Xander Billa and Tanmaya Darisi.
        </p>
      </div>
    </div>
  );
}
