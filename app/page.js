
import AboutMe from '@/components/AboutMe/AboutMe'
import Education from '@/components/Education/Education'
import Main from '@/components/Main/Main'
import Skills from '@/components/Skills/Skills'
import Workexperience from '@/components/Workexperience/Workexperience'
import React from 'react'


  export default  function page  ()  {

  return (
    <React.Fragment>
<Main />
<AboutMe/>
<Education/>
<Workexperience/>
<Skills/>
    </React.Fragment>
  )
}

