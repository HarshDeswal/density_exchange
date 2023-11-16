import { Inter } from 'next/font/google'
import EQbeats from '@/Components/EQBeats'
import Footer from '@/Components/Footer'
import FirstAnimation from '@/Components/FirstAnimation'
import CardSlider from '@/Components/CardSlider'
import SelfImprovement from '@/Components/SelfImprovement'
import OtherThink from '@/Components/OtherThink'
import VacancySection from '@/Components/VacancySection'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <FirstAnimation/>
     <EQbeats/>
     <CardSlider/>
     <SelfImprovement/>
     <OtherThink/>
     <VacancySection/>
     <Footer/>
    </>
  )
}