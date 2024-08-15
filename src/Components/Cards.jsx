import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

function Cards({data , reference}) {
  return (
  <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.1}} dragElastic={.5} dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
  className='relative px-6 py-7 h-52 w-[15vw] bg-zinc-900/90 rounded-[30px] text-white overflow-hidden flex-shrink-0'>
    <FaRegFileLines/>
    <p className='mt-3 text-xs leading-tight'>{data.desc}</p>
    <div className='footer absolute w-full left-0 bottom-0'>
    <div className='flex items-center justify-between mb-4 px-6'>  
      <h5 className='text-[14px]'>{data.fileSize}</h5>
      <span className='w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-center'>
        {data.close ? <IoIosClose /> : <LuDownload size='.6em' color='#fff'/>} 
      </span>
    </div>
      {
        data.tag.isOpen && (
          <div className={`tag flex justify-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} w-full px-6 py-2`}>
            <h3 className='text-[12px] text-black font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )
      }
    </div>
  </motion.div>
  )
}

export default Cards
