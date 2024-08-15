import React from 'react'

function Background() {
  return (
    <div>
      <>
        <div className='fixed z-[2] w-full h-screen'>
          <div className='w-full py-4 text-[15px] text-zinc-600 flex justify-center'>Documents.</div>
          <h1 className='absolute text-[15vw] tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900'>Docs.</h1>
        </div>
      </>
    </div>
  )
}

export default Background
