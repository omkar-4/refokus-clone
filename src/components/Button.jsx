import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button() {
  return (
    <>
    <div className='min-w-40 px-5 py-1.5 bg-zinc-100 text-black rounded-full flex justify-between gap-4 items-center'>
        <span className='text-zinc-700 tracking-tight align-middle items-center justify-center flex font-normal text-md'>Start a Project</span>
        <span className='text-[12px] translate-y-0.5'><BsArrowReturnRight /></span>
    </div>
    </>
  )
}

export default Button