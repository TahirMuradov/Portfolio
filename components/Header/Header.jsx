'use client'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import style from "../Header/header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  let nav =useRef(null)
useEffect(()=>{

    nav.current.classList.add("Tahir")
},[])


useEffect(()=>{

    window.addEventListener("scroll",()=>{
        document.querySelector("header").classList.add(style.bg_header_color)
     });
},[])
const navBar_Toggle=()=>{
nav.current.classList.toggle('hidden')

}
  return (
    <React.Fragment>
    <header  className={`bg-transparent fixed w-full `}>
<div className="container mx-auto">
    <div className="flex justify-between ">
        <div className="social-networks col-4">
            <ul className='flex items-center'>
            <li> <FontAwesomeIcon icon={faLinkedin} className='p-4 text-[23px] text-white' /></li>
                <li> <FontAwesomeIcon icon={faGithub} className='p-4 text-[23px] text-white'/></li>
            </ul>
        </div>
      <div className="navbar_icon cursor-pointer" onClick={()=>navBar_Toggle()}>
      <FontAwesomeIcon  icon={faBars} className='p-4 text-[23px] text-white'/>
      </div>
    </div>
</div>
    </header>
<nav ref={nav} className='fixed w-full hidden h-[100vh] bg-[#000] opacity-[0.9] z-[999] top-0'>   
<div onClick={()=>navBar_Toggle()} className='w-[80%] cursor-pointer h-[10%] flex justify-end text-white items-center'><FontAwesomeIcon  className='p-4 text-[23px]' icon={faXmark} /></div>
<div className='w-full h-full flex items-center justify-center'>

    <ul className='text-white'>
        <li className='py-5'>Home</li>
        <li className='py-5'>About</li>
        <li className='py-5'>Education</li>
        <li className='py-5'>PROFESSIONAL SKILLS</li>
        <li className='py-5'>WORK EXPERIENCE</li>
        <li className='py-5'>Contact Me</li>
    </ul>

</div>
</nav>
    </React.Fragment>
  )
}

export default Header