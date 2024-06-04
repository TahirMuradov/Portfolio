import React from 'react'
import Image from 'next/image'
import image1 from "../../public/img/1695206209137.jpg"

const AboutMe = () => {
  return (
    <section id='aboutMe' className='w-full'style={{backgroundColor:"#22252C"}}>
        <div className="w-[80%] mx-auto py-20 ">

        <div className="grid lg:grid-cols-2 md:grid-rows-2 lg:gap-4 md:after:hidden lg:after:block ">
<div className="img_box">
<Image width={365} height={385} src={image1} />
</div>
<div>
    <div className="title">

    <h2 style={{color:"#06F6F1",fontSize:"45px"}}>About Me</h2>
    </div>
    <p className='py-6 text-white text-[14.5px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veritatis enim reiciendis, omnis architecto dicta aperiam tenetur. Laborum doloribus itaque incidunt vel, inventore reprehenderit quod consequuntur nulla nostrum atque mollitia.</p>
<ul>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>Name</span>Muradov Tahir</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>DATE OF BIRTH</span>17 Aug 2001</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>NATIONALITY</span>Azerbaijan</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>ADDRESS</span>Baku M.Hadi street 41</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>PHONE</span>0552784344</li>
    <li style={{color:"white",fontSize:"17.5px"}}><span style={{color:"#00d7bb",fontWeight:"700",textTransform:"uppercase"}} className='px-4'>E-MAIL</span>muradovtahir01@gmail.com</li>

</ul>
</div>
        </div>
        </div>
    </section>
  )
}

export default AboutMe