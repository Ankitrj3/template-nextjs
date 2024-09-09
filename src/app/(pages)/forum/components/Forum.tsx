"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarIcon, MessageCircle, ThumbsUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="min-h-96 w-full flex flex-col gap-8">
      <div className="h-56 w-full bg-black text-center  text-white hover:bg-[#c4ad88]/80 hover:text-black gap-4 rounded-lg flex flex-col items-center justify-center transition-all hover:duration-700 ease-in-out">
        <h1 className="text-3xl">Forum</h1>
        <p className="text-lg font-medium w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptates, doloremque, quidem, quas doloribus quos quia
          necessitatibus tempore atque quod
        </p>
        <Link href="/forum/post">
          <Button variant="outline" className="hover:bg-black hover:text-white rounded-3xl">Create Post</Button>
        </Link>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="my-4">
          <TabsTrigger value="all">All Post</TabsTrigger>
          <TabsTrigger value="my-post">My Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="h-auto flex items-center justify-between py-4 border-l-4 px-2 border-l-zinc-900">
              <h1 className="text-xl font-medium ">Business</h1>
              <Link
                href="/forum/business"
                className="bg-gray-200/80 p-2 px-4 rounded-3xl  hover:bg-black hover:text-white transition-colors"
              
              >
                View All
              </Link>
            </div>
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
          <div className="flex flex-col gap-4">
            <div className="h-auto flex items-center justify-between py-4 border-l-4 px-2 border-l-zinc-900">
              <h1 className="text-xl font-medium ">Innovation</h1>
              <Link
                href="/forum/business"
                className="bg-gray-200/80 p-2 px-4 rounded-3xl hover:bg-black hover:text-white transition-colors"
              >
                View All
              </Link>
            </div>
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
          <div className="flex flex-col gap-4">
            <div className="h-auto flex items-center justify-between py-4 border-l-4 px-2 border-l-zinc-900">
              <h1 className="text-xl font-medium ">Technical</h1>
              <Link
                href="/forum/business"
                className="bg-gray-200/80 p-2 px-4 rounded-3xl  hover:bg-black hover:text-white transition-colors"
              >
                View All
              </Link>
            </div>
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
        </TabsContent>
        <TabsContent value="my-post">
          <div className="w-full h-12 text-xl text-gray-800/40 font-medium flex items-center justify-center">
            No Post to show
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
