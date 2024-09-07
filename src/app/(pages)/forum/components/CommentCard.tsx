import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { EyeIcon, ThumbsUp } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function CommentCard({}: Props) {
  return (
    <div className="p-2 bg-zinc-200/20 rounded-md flex flex-col gap-2">
      <div className="border border-l-4 p-2 border-l-zinc-600 flex items-center justify-between">
        <div className="">
          <div className="flex items-center justify-start gap-2 text-sm font-medium">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Link href="/user/56498cd5">John Doe</Link>
          </div>
          <span className="text-xs font-base opacity-45">
            Lovely Professional University
          </span>
        </div>
        <div className="flex font-medium">
          <span className="text-xs w-8 text-muted-foreground">
            <ThumbsUp className="mr-2 h-4 w-4 opacity-70" /> 10
          </span>
          <span className="text-xs w-8 text-muted-foreground">
            <EyeIcon className="mr-2 h-4 w-4 opacity-70" /> 10k
          </span>
        </div>
      </div>
        <p className="min-h-20 p-2">This is my comment!</p>
    </div>
  );
}
