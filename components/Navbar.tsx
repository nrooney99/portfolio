import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)

  return (
    <div className='fixed w-full h-20 shadow-xl z-50'>
        <div className='flex justify-between items-center w-full h-full px-2'>
          <Logo width={125} height={50}/>
          <div>
            <ul className='hidden md:flex'>
              {/* <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
              </Link>
              <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
              </Link>
              <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
              </Link> */}
            </ul>
          </div>
          <div className='md:hidden' onClick={handleNav}>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
        <div className={nav?'md:hidden h-screen fixed left-0 top-0 w-full bg-black/70':''}>
          <div className={nav?
            'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500 h-screen':
            'fixed top-0 left-[-100%] p-10 ease-in duration-500 h-screen w-[75%] sm:w-[60%] md:w-[45%]'}>
            <div className='flex w-full items-center justify-between border-b border-gray-300 pb-3'>
              <Logo width={100} height={50} showText color='black' />
              <div className='cursor-pointer' onClick={handleNav}>
                <AiOutlineClose/>
              </div>
            </div>

            <div className='py-4 flex flex-col' >
              <ul>
              {/* <Link href='/'>
                <li className='text-md uppercase py-4'>Home</li>
              </Link>
              <Link href='/'>
                <li className='text-md uppercase py-4'>About</li>
              </Link>
              <Link href='/'>
                <li className='text-md uppercase py-4'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='text-md uppercase py-4'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='text-md uppercase py-4'>Contact</li>
              </Link> */}
              </ul>
            </div>

            <div className='mt-40'>
              <p className='tracking-widest uppercase'>Let&apos;s connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <FaLinkedin size='25' className='hover:scale-110 cursor-pointer'/>
                  <FaGithub size='25' className='hover:scale-110 cursor-pointer'/>
                  <AiOutlineMail size='25' className='hover:scale-110 cursor-pointer'/>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Navbar