import React from "react";

type Props = {};

export default function Forum({}: Props) {
  return (
    <div className="min-h-96 w-full">
      <div className="h-56 w-full bg-slate-600 rounded-lg flex items-center justify-center">
        <div className=" text-center text-white flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl">Forum</h1>
          <p className="text-lg font-medium w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptates, doloremque, quidem, quas doloribus quos quia
            necessitatibus tempore atque quod
          </p>
        </div>
      </div>
    </div>
  );
}
