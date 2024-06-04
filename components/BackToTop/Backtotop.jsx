'use client'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import style from "../BackToTop/backtotop.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'

const Backtotop = () => {
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            updateScrollCompletion("#bactotop")
        })
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