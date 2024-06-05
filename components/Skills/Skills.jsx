import React from 'react'


const Skills = () => {
  return (
    <section id="skills" className='w-full bg-[#22252C] h-auto'>
<div className="title text-center">
    <h2>Skills</h2>
</div>
<div className="skills_content w-[80%] mx-auto bg-[#313741]">
<div className="grid grid-cols-2 gap-2">
<div className="front text-center">
<h2>Front</h2>

<p className='text-white'>
    <ul>
        <li>Html Css (SCSS,SASS)</li>
        <li>BOOTSTRAP, TAIlWINDCSS </li>
        <li> JAVASCRIPT</li>
        <li> REACTJS  (COMPONENT,HOOK,ROUTER,REDUX,REDUX TOOLKIT)</li>
        <li> NextJs</li>
        <li> GIT,GITHUB</li>
    </ul>
 <br />
 






</p>
</div>
<div className="backend grid-cols-2 gap-2 text-center ">
<h2>Backend</h2>
<p className='text-white'>

<ul>
 <li>c#</li>
 <li>asp.net MVC</li>
 <li>RestFullApi(swaggerUI)</li>
 <li>MsSql</li>
 <li> ORM(ENTITY FRAMEWORK)</li>
</ul>
</p>
</div>
</div>
</div>
    </section>
  )
}

export default Skills