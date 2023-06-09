import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Nav from '@/Components/Nav'
import Intro from '@/Components/Intro'
import About from '@/Components/About'
import Socios from '@/Components/Socios'
import SomeProjects from '@/Components/SomeProjects'
import OtherProject from '@/Components/OtherProject'
import Contact from '@/Components/Contact'
import Expertise from '@/Components/Expertise'
import PopUp from '@/Components/PopUp'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  return (
 <div className="body">
  
<Nav/>
<PopUp/>
<main>
  <div className="Wrapper">
  <Intro/>
  <About/>
  <Expertise/>
  <SomeProjects/>
  <OtherProject/>
  <Contact/>
  <footer className='w-full text-center mt-[8rem] mb-6 flex flex-col lg:gap-0  space-y-10'>
  <Socios/>

    <p
     className='hover:text-primary1 text-[13px] cursor-pointer'> <a href="https://github.com/intelligence247" target='_blank' rel="noopener noreferrer"npm>Designed & Built by Usman Abdullahi</a></p>
  </footer>
  </div>
</main>
 </div>
        

  )
}

