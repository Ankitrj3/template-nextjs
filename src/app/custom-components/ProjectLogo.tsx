import Image from "next/image";
import React from "react";

interface Props {
  onlyProjectLogo?: boolean;
}

export default function ProjectLogo({ onlyProjectLogo }: Props) {
  return (
    <div className="flex items-center justify-center gap-4">
      {onlyProjectLogo ? null : (
        <>
          {/* <Image src="/logo.png" alt="Undefined-Logo" width={50} height={100} className="flex *:flex"/> */}
          {/* <Image
            src="/icons/v_bar.png"
            alt="Vertical bar"
            width={50}
            height={30}
          /> */}
        </>
      )}
      <Image
        src="/logo.png"
        alt="Undefined logo"
        width={150}
        height={40}
      />
    </div>
  );
}
