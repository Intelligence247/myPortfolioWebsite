'use client'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import About from '@/Components/About'
import Socios from '@/Components/Socios'
import SomeProjects from '@/Components/SomeProjects'
import OtherProject from '@/Components/OtherProject'
import Contact from '@/Components/Contact'
import Expertise from '@/Components/Expertise/Expertise'
import PopUp from '@/Components/PopUp'
import Nav from '@/Components/Nav'
import Intro from '@/Components/Intro'
import { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })
import Aos from 'aos'
import 'aos/dist/aos.css';
import { motion, useAnimation, useScroll, useDragControls } from "framer-motion";

export default function Home() {
  const controls = useDragControls()


  useEffect(() => {
    Aos.init({
      disable:false,
      duration: 600,
      offset: 135,
  
    })
  }, [])

  return (
 <div className="body">
  
  <Nav/>
<PopUp/>
{/* <motion.div 
drag
 dragControls={controls}
 dragListener={true}
 dragConstraints={{left: 0, right: 200, bottom: 300, top:200}}
 >
 <p className='bg-red-900 text-white text-2xl'>Drag if you can</p>
</motion.div> */}
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
  <div>
    
  </div>
    <p
     className='hover:text-primary1 text-[13px] cursor-pointer'> <a href="https://github.com/intelligence247" target='_blank' rel="noopener noreferrer"npm>Designed & Built by Usman Abdullahi</a></p>
  </footer>
  </div>
</main>
 </div>
        

  )
}

