import React from 'react'
import styles from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <div className={`flex flex-col items-center mt-40 gap-6 ${styles.contactW}`}>
        <p className='text-primary1 text-[13px]'><span className='text-primary1'>04.</span> What's Next?</p>
        <h1 className='text-[2rem] font-bold text-var_color'>Get In Touch</h1>
        <p className='w-[60%] text-center'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <p className={`${styles.sayHello}`}></p>
        
    </div>
  )
}

export default Contact