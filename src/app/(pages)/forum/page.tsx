import React from 'react'
import Forum from './components/Forum'

type Props = {}

export default function page({}: Props) {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-start justify-start my-8 gap-8">
    <Forum/>
  </main>
  )
}