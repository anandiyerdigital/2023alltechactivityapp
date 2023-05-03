import Image from 'next/image'
import { Inter } from 'next/font/google'
import GetPosts from '@/components/GetPosts'
import Navbar from '@/components/navigation/navbar'
import Homepage from '../components/Homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      
      <Homepage />
      {/* <h1>Next.js + TypeScript + Tailwind CSS + Supabase</h1>
      <GetPosts /> */}
    </div>
  )
}
