import { Inter } from 'next/font/google'
import EQbeats from '@/Components/EQBeats'
import Footer from '@/Components/Footer'
import AnimationOne from '@/Components/FirstAnimation'
import CardSlider from '@/Components/CardSlider'
import SelfImprovement from '@/Components/SelfImprovement'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <AnimationOne/>
     <EQbeats/>
     <CardSlider/>
     <SelfImprovement/>
     <Footer/>
    </>
  )
}