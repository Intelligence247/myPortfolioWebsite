import React from 'react'

const Headings = (props) => {
  return (
    <div className={`flex justify-${props.position} items-center gap-4 mb-10 w-full`}>
        <div className='flex items-baseline gap-4 w-max'>
        <span className='text-primary1'>{props.num}</span>
        <p className="text-var_color lg:text-4xl text-xl font-[700]">{props.text}</p>
        </div>
      <p className={`lg:w-[18rem] ${props.width} h-[1px] bg-blur_texts`}></p>
    </div>
  )
}

export default Headings