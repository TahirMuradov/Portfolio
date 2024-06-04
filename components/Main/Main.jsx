'use client';
import React, { useEffect } from 'react'
import Image from 'next/image';
import foto1 from "../../public/img/124434370.jpeg"
import style from "../Main/main.module.scss"

const Main = () => {
 
//   let text=document.getElementById('text');
//   const text_load =()=>{
//     setTimeout(()=>{
// text.textContent="Salam.Xos gelmisiniz.Menim adim Tahirdir"
// },0)
// setTimeout(()=>{
// text.textContent="Men Full-Stack Devoploperəm"
// },4000)
// setTimeout(()=>{
// text.textContent="Hər Cür Veb səhiflərin yazilmasi"
// },8000)
// }
// text_load();

  return (
    <> 
    <style>
      
    </style>
<section style={{backgroundImage:`url(${foto1.src})`,backgroundRepeat:`no-repeat`,backgroundPosition:"center" ,backgroundSize:"cover"}} className={`${style.bg_mainColor} z-10 bg-no-repeat w-full h-[100vh]`}>
<div className={`${style.bg_mainColor} opacity-85 overlay w-full h-full flex justify-start items-center`}>
<div className='w-full'>
  <div  className='text-white ps-5'> 

<h1  className='text-[120px]'>Hello</h1>
<h5 className='text-[84px]'> My Name Is Tahir Muradov <br />
</h5>
<p className='text-[25px]'>
  Full Stack Web Developer (c#)
  </p> 
  </div>
</div>
</div>

</section>
   </>
  )
}

export default Main