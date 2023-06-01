import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import styles from "../styles/SomeProjects.module.css"
import Eachproject from './Eachproject'

const SomeProjects = () => {
  return (
    <div className={styles.somprojectW} id='work'>
        <Headings
          num={'03.'}
          text={'Some of my projects'}
          position={'start'}
          width={"w-2"}
          />
          <div className='h-auto w-full flex flex-col gap-20 '>
          <Eachproject
          img={"/media/rolex.png"}
          name={"Rolex Wristwatch"}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias, est dolore non rerum commodi, doloremque ullam minima corrupti consequuntur officiis cum! Sint error optio in dignissimos velit voluptas eaque.'}
          abs_pos={'right-[2rem]'}
          text_pos={'text-right'}
          lang1={'Html'}
          lang2={'CSS'}
          lang3={'Vanilla Js'}
          lang4={"Netlify"}
          lang5={""}
          end={'justify-end'}
          flex_Dir={'lg:flex-row flex-col-reverse'}
          />
            <Eachproject
            img={"/media/Short3.png"}
          name={"Weather App"}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias, est dolore non rerum commodi, doloremque ullam minima corrupti consequuntur officiis cum! Sint error optio in dignissimos velit voluptas eaque.'}
          text_pos={'text-left'}
          lang1={'React'}
          lang3={'Chart.js'}
          lang4={"API"}
          lang5={"Netlify"}
          flex_Dir={'lg:flex-row-reverse flex-col-reverse '}

          />

<Eachproject
          img={"/media/rolex.png"}
          name={"Rolex Wristwatch"}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias, est dolore non rerum commodi, doloremque ullam minima corrupti consequuntur officiis cum! Sint error optio in dignissimos velit voluptas eaque.'}
          abs_pos={'right-[2rem]'}
          text_pos={'text-right'}
          lang1={'Html'}
          lang2={'CSS'}
          lang3={'Vanilla Js'}
          lang4={"Netlify"}
          lang5={""}
        end={'justify-end'}
        flex_Dir={'lg:flex-row flex-col-reverse'}
          />
       
          </div>
    <p className={styles.learnMore}></p>
    </div>
  )
}

export default SomeProjects