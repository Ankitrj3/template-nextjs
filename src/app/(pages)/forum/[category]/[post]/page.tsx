import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SearchIcon } from "lucide-react";
import React from "react";
import CommentCard from "../../components/CommentCard";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-start justify-start my-8 gap-8">
      <div className="w-full min-h-72 flex flex-col gap-4">
        <div className="">
          <h1 className="text-4xl">This is title</h1>
          <div className="flex items-center justify-start gap-2 text-md">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="">Author</span>
            {" | "}
            <span className="">Date</span>
          </div>
        </div>
        <article className="w-full prose lg:prose-xl">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between px-2">
          <h1 className="text-xl font-medium ">Comments</h1>
          <Button className="bg-gray-800/80 p-2 px-4 rounded-md">
            Add Comment
          </Button>
        </div>
        {/* <div className="min-h-48 text-lg flex items-center justify-center text-gray-600/50 font-semibold ">No Comments to show</div> */}
        <div className="w-full flex flex-col gap-4">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
}
