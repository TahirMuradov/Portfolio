import React from 'react'

const layout = ({children }) => {

  return (
    <html lang="en">
      <body className={`antialiased`}> 
     
      { 
         children
     }
   </body>
    </html>
  
  
    
  
      

  )
}

export default layout