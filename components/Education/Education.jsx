'use client';
import { faCircleDot, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


const Education = () => {
  return (
    <>
    <section id="education" className='bg-[#313741] w-full h-auto'>

  <div className="edu w-[80%] mx-auto py-28">
<div id='title' className="w-full text-center">
    <h2>Təhsİl</h2>
</div>
<div className="content w-full h-auto">
<div className="cd-timeline w-full h-auto">
    <div className="cd-timeline-block w-full h-auto">
        <div className="grid grid-cols-1 text-center py-10">
<div className="dot_start">
<FontAwesomeIcon icon={faGraduationCap} />
</div>
        </div>
<div className="grid lg:grid-cols-5">
<div className="title lg:col-span-2 lg:text-end">
    <h2 className='text-[20px] block'>Bakalavr</h2>
    <h2 className='text-[10px]'>2018-2022</h2>
</div>
<div className="dot lg:col-span-1 hidden lg:block text-center relative">
<div className='big'>
    <div className=''></div>
</div>
</div>
<div className="content lg:col-span-2 text-white font-serif text-[14px]">
  Kompüter Elmləri
</div>
</div>
<div className="grid lg:grid-cols-5">
<div className="title lg:col-span-2 lg:text-end">
    <h2 className='text-[20px] block'>Magistr</h2>
    <h2 className='text-[10px]'>2022-2024</h2>
</div>
<div className="dot lg:col-span-1 hidden lg:block text-center relative">
<div className='big'>
    <div className=''></div>
</div>
</div>
<div className="content lg:col-span-2 text-white text-[14px]">
Kompüter Mühəndisliyi
</div>
</div>
<div className="grid lg:grid-cols-5">
<div className="title lg:col-span-2 lg:text-end">
    <h2 className='text-[20px] block'>Compar Academy</h2>
    <h2 className='text-[10px]'>2023-2024</h2>
</div>
<div className="dot lg:col-span-1 hidden lg:block text-center relative">
<div className='big'>
    <div className=''></div>
</div>
</div>
<div className="content lg:col-span-2 text-white text-[14px]">
Full Stack Web Developer
</div>
</div>
    </div>
</div>
</div>
  </div>
    </section>
    </>
  )
}

export default Education
