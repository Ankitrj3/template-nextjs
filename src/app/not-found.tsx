import React from 'react'

type Props = {}

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
    title: "Not Found!",
    description: "Next Gen AWS Amplify",
  };
  

export default function NotFound({}: Props) {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl">Errror!</h1>
    </main>
  )
}