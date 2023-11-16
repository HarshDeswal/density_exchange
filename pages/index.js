import { Inter } from 'next/font/google'
import EQbeats from '@/Components/EQBeats'
import Footer from '@/Components/Footer'
import AnimationOne from '@/Components/FirstAnimation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <AnimationOne/>
     <EQbeats/>
     <Footer/>
    </>
  )
}