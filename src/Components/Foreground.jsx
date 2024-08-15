import React, { useRef, useState } from 'react'
import Cards from './Cards'

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
    desc: "This is a Card on the Foreground.",
    fileSize: ".09mb",
    close: true,
    tag: {
      isOpen: false,
      tagTitle: "Download Now!",
      tagColor: "green"
    }
    },
    {
      desc: "Hello World!.",
      fileSize: ".09mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now!",
        tagColor: "blue"
      }
    },
    {
      desc: "lorem picsum odor strwe kri forum.",
      fileSize: ".09mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload!",
        tagColor: "green"
        }
    }
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-5 flex-wrap'>
      {data.map((e, i)=>(
        <Cards data={e} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
