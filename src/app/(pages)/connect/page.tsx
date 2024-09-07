"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

export default function Page({}: Props) {
  const [date, setDate] = React.useState<Date>();
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-start justify-center my-8 gap-8">
      <h1 className="font-light text-5xl my-4">Let&#39;s connect!</h1>
      <div className="flex w-full gap-8 mx-4 items-center justify-center">
        <div className="flex flex-1">
          <div className="flex flex-col gap-8 w-full">
            <Tabs defaultValue="today" className="w-[600px] min-h-96">
              <TabsList className="h-12 my-2">
                <TabsTrigger value="past">Past Meetings!</TabsTrigger>
                <TabsTrigger value="today">Today Schedule</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Meetings!</TabsTrigger>
              </TabsList>
              <TabsContent value="today">
                <div className="w-full cursor-pointer rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-md font-semibold">
                        Lorem ipsum dolor sit amet.
                      </h4>
                      <p className="text-sm">
                        Inventore tempore distinctio vitae placeat eligendi
                        magni iure exercitationem aspernatur aliquid
                        Consectetur!
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          September 05, 2024 | 05:45 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="upcoming">
                <div className="w-full cursor-pointer rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-md font-semibold">
                        Exercitationem aspernatur aliquid
                      </h4>
                      <p className="text-sm">
                        Aspernatur aliquid Consectetur! Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Labore, nulla?
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          October 25, 2024 | 10:15 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="today">
                <div className="w-full cursor-pointer rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-md font-semibold">
                        Lorem ipsum dolor sit amet.
                      </h4>
                      <p className="text-sm">
                        Inventore tempore distinctio vitae placeat eligendi
                        magni iure exercitationem aspernatur aliquid
                        Consectetur!
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          September 05, 2024 | 05:45 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="past">
                <div className="w-full cursor-pointer rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-md font-semibold">
                        Exercitationem aspernatur aliquid
                      </h4>
                      <p className="text-sm">
                        Aspernatur aliquid Consectetur! Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Labore, nulla?
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          October 25, 2024 | 10:15 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-72">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-12">+ Schedule Meeting</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Schedule a Meeting!</DialogTitle>
                <DialogDescription>
                  Fill the form below to schedule a meeting with mentor.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Your name goes here"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Subject
                  </Label>
                  <Input
                    id="username"
                    value="Add your subject here"
                    className="col-span-3"
                  />
                </div>
                <Textarea placeholder="Description" />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Calendar className="border rounded-md flex items-center justify-center w-full h-full" />
        </div>
      </div>
    </main>
  );
}
