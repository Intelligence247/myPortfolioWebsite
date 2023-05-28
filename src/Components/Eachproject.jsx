import React from 'react'
import styles from "../styles/SomeProjects.module.css"
import Image from 'next/image'
const Eachproject = ({
    name,
    description,
    lang1,
    lang2,
    lang3,
    lang4,
    lang5,
    flex_Dir,
    abs_pos,
    end,
    text_pos,
    img,
}) => {
  return (
            <div className={`projectW flex justify-between w-full gap-10 h-[26rem] items-center ${flex_Dir}`}>
            <div className={styles.projectImg}>
                <Image 
                src={img}
                width={400}
                height={300}
                alt={'Project view'}
                />
            </div>

            <div className='w-[45%] relative h-full flex flex-col justify-between p-10 '>
                <div className="projectTitle">
                <p className={`${text_pos} text-primary1 text-[13px] mb-2`}>Feautured Project</p>
                <h1 className={`text-var_color font-[700] ${text_pos} text-[1.5rem]`}>{name}</h1>
                </div>
                <div className={`description w-[110%] bg-primary_bg2 absolute ${abs_pos} top-[30%] text-[15px] p-4 rounded-lg `}> {description}    
                </div>
                <div className='flex flex-col gap-4'>
                <div className="materialUsed text-[13px] flex justify-between">
                    <p>{lang1}</p>
                    <p>{lang2}</p>
                    <p>{lang3}</p>
                    <p>{lang4}</p>
                    <p>{lang5}</p>
                </div>
                <div className={`clickales flex gap-4 ${end}`}>
                    <a href="">
                    <Image
                    src={"/github-fill.png"}
                    height={25}
                    width={25}
                    alt='icon1'
                    />
                    </a>
                    <a href="">
                     <Image
                    src={"/github-fill.png"}
                    height={25}
                    width={25}
                    alt='icon2'
                    />
                    </a>
                </div>
                </div>
            </div>
            </div>
  )
}

export default Eachproject