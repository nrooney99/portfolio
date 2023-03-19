import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Main() {
    const [mailCopied, setMailCopied] = useState(false)
    const handleCopyMail = () => {
      navigator.clipboard.writeText("nrooney@itba.edu.ar")
      setMailCopied(true)
      setTimeout(()=>{setMailCopied(false)},5000)
    }
    return (
        <div className='bg-slate-50 w-full h-screen' id='home'>
            <div className='flex flex-col justify-center items-center h-full space-y-5'>
              {/* <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together</p> */}
              <h1 className='text-gray-800'>Hi, I&apos;m <span className='text-indigo-600'>Nico Rooney</span></h1>
              <h2 className='text-gray-800 text-center'>Software Developer & <span className='inline-block'>Industrial Engineering Student</span></h2>
              <p className='py-2 text-gray-600 max-w-[80%] sm:max-w-[70%] m-auto'>
                I am a final year student of Industrial Engineering with a passion for technology and software development. 
                My academic background has provided me with a solid foundation in process planning, analysis, and improvement, 
                while my programming experience allows me to design and develop effective technological solutions. 
              </p>
              <div className='flex items-center justify-between space-x-10 my-4 '>
                <a href='https://www.linkedin.com/in/nicolas-rooney/'><FaLinkedin size='32' className='hover:scale-110 cursor-pointer'/></a>
                <a href='https://github.com/nrooney99'><FaGithub size='32' className='hover:scale-110 cursor-pointer'/></a>
                <div className='group flex flex-row items-center space-x-2 cursor-pointer w-[32px]' onClick={handleCopyMail}>
                  <div className='w-[30px]'><AiOutlineMail size='32' className='hover:scale-110 cursor-pointer'/></div>
                  {!mailCopied && <p className='text-xs text-gray-600 font-bold whitespace-nowrap hidden group-hover:inline'>Copy address</p>}
                  <p className={`text-xs text-gray-600 font-bold whitespace-nowrap transition-all duration-100 ${mailCopied ? "inline" : "hidden"}`}>Copied to clipboard!</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Main