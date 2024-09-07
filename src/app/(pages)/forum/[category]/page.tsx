"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CalendarIcon, MessageCircle, SearchIcon, ThumbsUp } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Props = {};

export default function Forum({}: Props) {
  const businessPosts = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description:
        "Inventore tempore distinctio vitae placeat eligendi magni iure exercitationem aspernatur aliquid Consectetur!",
      date: "September 05, 2024 | 05:45 PM",
      likes: 18,
      comments: 8,
    },
    {
      title: "adipisicing elit. Quam voluptates, doloremque, quidem.",
      description:
        "Inventore tempore distinctio vitae placeat eligendi magni iure exercitationem aspernatur aliquid Consectetur!",
      date: "October 25, 2020 | 10:25 PM",
      likes: 456,
      comments: 348,
    },
  ];

  return (
    <div className="min-h-96 w-full flex flex-col gap-12">
      <div className="h-56 w-full bg-slate-200/35 text-center text-zinc-600 gap-4 rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-3xl">Category</h1>
        <p className="text-lg font-medium w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptates, doloremque, quidem, quas doloribus quos quia
          necessitatibus tempore atque quod
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between px-2">
          <div className="flex w-72 max-w-sm items-center space-x-2 border border-gray-400 hover:border-black/90 px-2 rounded-md">
            <SearchIcon className="h-6 w-6 opacity-70" />
            <input type="search" placeholder="Search..." className="w-full h-12 border-none outline-none" />
          </div>
          <div className="">
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
        </div>
        <div className="min-h-96 flex flex-col gap-4">
            {businessPosts.map((post, index) => (
              <Link key={index} href="forum/business/8979dfsg">
                <Alert className="border flex items-center h-20 border-black/10 shadow-md gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="w-full">
                    <AlertTitle>{post.title}</AlertTitle>
                    <AlertDescription>{post.description}</AlertDescription>
                  </div>
                  <AlertDescription className="flex flex-col gap-2">
                    <div className="flex w-56">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <div className="flex w-56 items-center justify-center gap-4">
                      <div className="flex">
                        <ThumbsUp className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          {post.likes}
                        </span>
                      </div>
                      <div className="flex">
                        <MessageCircle className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
