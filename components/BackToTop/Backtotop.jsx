'use client'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import style from "../BackToTop/backtotop.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'

const Backtotop = () => {
    
    const updateScrollCompletion = () => {
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
       
        if(scrollHeight) {
          
      const scrollValue= Number((currentProgress / scrollHeight).toFixed(2)) * 100

      if (scrollValue>30){
       

            window.addEventListener("scroll",()=>{
                
                document.querySelector("#bactotop").classList.remove("top-[-100%]")
                document.querySelector("#bactotop").classList.remove("hidden")
                document.querySelector("#bactotop").classList.add("bottom-0")
               
             });
   
      }else{    
            window.addEventListener("scroll",()=>{
                document.querySelector("#bactotop").classList.remove("bottom-0")
                document.querySelector("#bactotop").classList.add("top-[-100%]")
                document.querySelector("#bactotop").classList.add("hidden")
                

             });
        
      }
          
        }
      }
  useEffect(()=>{

      window.addEventListener('scroll', updateScrollCompletion);
  },[])
    function ToTOp() {
       
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // const currentProgress = window.scrollY;
        // const scrollHeight = document.body.scrollHeight - window.innerHeight;
    }
  return (
    <div id="bactotop" style={{transition:"1s"}} onClick={()=>ToTOp()} className={`${style.bactotop_bgColor} hidden cursor-pointer absolute bottom-2 right-[2%] p-[1%] text-[25px] text-center rounded-full text-white`}>
        <FontAwesomeIcon icon={faAngleUp} />
    </div>
  )
}

export default Backtotop