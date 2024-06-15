import React from 'react'


const Skills = () => {
  return (
    <section id="skills" className='w-full bg-[#22252C] h-auto'>
<div className="title text-center">
    <h2>Skills</h2>
</div>
<div className="skills_content w-[80%] mx-auto bg-[#313741]">
<div className="grid lg:grid-cols-2 gap-2">
<div className="front text-center">
<h2>Front</h2>

<div className='text-white'>
    <ul className='list-inside'>
        <li>Html Css (SCSS,SASS)</li>
        <li>BOOTSTRAP, TAIlWINDCSS </li>
        <li> JAVASCRIPT</li>
        <li> REACTJS  (COMPONENT,HOOK,ROUTER,REDUX,REDUX TOOLKIT)</li>
        <li> NextJs</li>
        <li> GIT,GITHUB</li>
    </ul>
 <br />
 






</div>
</div>
<div className="backend grid-cols-2 gap-2 text-center ">
<h2>Backend</h2>
<div className='text-white'>

<ul className='list-inside'>
 <li> <p>
  c#
  </p>
  </li>
 <li> <p>
  asp.net MVC
  </p>
  </li>
 <li> <p>
  RestFullApi(swaggerUI)
  </p>
  </li>
 <li> <p>
  MsSql
  </p>
  </li>
 <li>
   <p>
    
   ORM(ENTITY FRAMEWORK)
  </p>
   </li>
</ul>
</div>
</div>
</div>
</div>
    </section>
  )
}

export default Skills