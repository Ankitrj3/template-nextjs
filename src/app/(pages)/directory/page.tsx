import React from 'react'
import { Directory } from './components/Directory'

type Props = {}

export default function page({}: Props) {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex my-8 flex-col items-center justify-center my-8 gap-8">
    <Directory/>
  </main>
  )
}