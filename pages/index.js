import { Inter } from 'next/font/google'
import EQbeats from '@/Components/EQBeats'
import Footer from '@/Components/Footer'
import FirstAnimation from '@/Components/FirstAnimation'
import CardSlider from '@/Components/CardSlider'
import SelfImprovement from '@/Components/SelfImprovement'
import OtherThink from '@/Components/OtherThink'
import VacancySection from '@/Components/VacancySection'
import StaticText2 from '@/Components/StaticText2'
import AuthorDetails from '@/Components/AuthorDetails'
import AppDemo from '@/Components/AppDemo'


export default function Home() {
  return (
    <>
     <AppDemo/>
     <AuthorDetails/>
     <FirstAnimation/>
     <EQbeats/>
     <CardSlider/>
     <SelfImprovement/>
     <StaticText2/>
     <OtherThink/>
     <VacancySection/>
     <Footer/>
    </>
  )
}