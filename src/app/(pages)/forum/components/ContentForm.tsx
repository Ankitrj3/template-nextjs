"use client";

import React, { useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Editor from "@/components/editor/editor";

type Props = {};

export const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: 'Type "/" to get started',
        },
      ],
    },
  ],
};

export default function ContentForm({}: Props) {
  const [title, SetTitle] = React.useState("");
  const [slug, SetSlug] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleClick = () => {
    console.log({ title, slug, content });
  };

  useEffect(() => {
    const name = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    SetSlug(name);
  }, [title]);

  return (
    <div className="mt-6 flex min-w-[600px] flex-col gap-4">
      <div className="flex w-full flex-col gap-4">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => SetSlug(e.target.value)}
        />
        <Editor initialValue={defaultValue} onChange={setContent} />
        <Button onClick={handleClick}>Create</Button>
      </div>
    </div>
  );
}
