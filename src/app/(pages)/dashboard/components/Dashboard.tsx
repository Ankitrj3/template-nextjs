import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div className="flex items-start justify-start gap-4 w-full h-auto">
      {/* Container 1 */}
      <div className="h-full flex flex-col gap-6 flex-1">
        <Alert className="border border-black/25">
          <Calendar className="h-4 w-4" />
          <AlertTitle>You have meeting scheduled Today!!</AlertTitle>
          <AlertDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nisi similique facilis perspiciatis quasi?
          </AlertDescription>
        </Alert>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-2xl">Activity</h1>
          <div className="min-h-48 w-full rounded-md grid grid-cols-2 gap-4 ">
            <Card className="h-40 w-full hover:bg-black hover:text-white">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
            <Card className="h-40 w-full hover:bg-black hover:text-white">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-2xl">Forum</h1>
          <div className="min-h-40 w-full px-2 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[16px]">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
                  <Link
                    href="https://example.com"
                    className="text-blue-950 font-medium underline"
                  >
                    Learn More
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {/* Container 2 */}
      <div className="h-full w-80 flex flex-col items-center justify-center rounded-xl py-4 gap-8 bg-zinc-300/20">
        <Avatar className="h-40 w-40">
          <AvatarImage src="user.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* user info */}
        <div className="flex w-full flex-auto flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold gap-2">John Doe</h2>
            <h2 className="text-xl font-base gap-2">Univ</h2>
            <Badge className="gap-2">Student</Badge>
          </div>
          {/* social */}
          <div className="min-w-48 w-auto px-4 py-2 h-14 rounded-md flex items-center justify-center gap-5 bg-slate-400/30">
            <a href="https://example.com/profile1" className="hover:opacity-80">
              <Avatar className="">
                <AvatarImage src="link.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </a>

            <a href="https://github.com/username" className="hover:opacity-80">
              <Avatar className="">
                <AvatarImage src="github.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </a>

            <a
              href="https://discord.com/users/username"
              className="hover:opacity-80"
            >
              <Avatar className="">
                <AvatarImage src="discord.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </a>
          </div>

          {/* Following List */}
          <div className="flex flex-row items-center justify-center gap-4">
            <span className="font-medium">Following : </span>
            <span className="font-medium"> | </span>
            <span className="font-medium">Followers : </span>
          </div>
        </div>
      </div>
    </div>
  );
}
