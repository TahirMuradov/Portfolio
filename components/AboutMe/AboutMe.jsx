'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import image1 from "../../public/img/1695206209137.jpg"
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const AboutMe = () => {

  return (
    <section id='aboutMe' className='w-full'style={{backgroundColor:"#22252C"}}>
        <div className="w-[80%] mx-auto py-20 ">

        <div className="grid lg:grid-cols-2 grid-rows-2 lg:gap-4 ">


<div className="img_box after:hidden lg:after:block">
<Image className='static lg:absolute' width={365} height={385} src={image1} />
</div>

<div>
    <div className="title">

    <h2>About Me</h2>
    </div>
    <span className='py-6 text-white text-[14.5px]'>
   2018-ci ildə V.Mirzəliyev adına 281 nömrəli tam orta məktəbi bitirib, Azərbaycan Texniki Universitetinin Kompüter Elmləri
 ixtisasına qəbul olmuşam. 2022-ci ildə Kompüter Elmləri üzrə Bakalavr təhsilimi başa
 vurduqdan sonra,.Həmin universitetin Kompüter Mühəndisliyi üzrə Magistratura proqramına qəbul oldum. Mən həmçinin Compar
 Academy-də Full-Stack Web Developer təhsili almışam.WebConsole studioda backend developer təcrübəçi kimi 1 ay fəaliyyət göstərərək zmt.az lahiyəsinin backendini tamamlayaraq təhvil vermişəm
    </span>
<ul>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>Name</span>Muradov Tahir</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>DATE OF BIRTH</span>17 Aug 2001</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>NATIONALITY</span>Azerbaijan</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>ADDRESS</span>Baku M.Hadi street 41</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>PHONE</span>0552784344</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>E-MAIL</span>muradovtahir01@gmail.com</li>

</ul>
</div>
        <div className='flex justify-center items-center lg:col-span-2'>
        <a href={"/img/M.TahirCV.png"} className='customBtn' download={"cv"}><FontAwesomeIcon icon={faDownload} /> Download Cv</a>
        </div>
        </div>
        </div>
    </section>
  )
}

export default AboutMe