import React from 'react'
import refokus_logo from "../assets/refokus_logo.svg"
import Button from './Button'

function Navbar() {
    // CSS style me 2 {} lagte hai bcoz ek hai jsx ka and doosra hai object pass karne ke liye
    // In case I wanna add a "|" then I can use the link.length === 0 with a "" emprty string along with nav link array elements 
  return (
    <>
    <div className='max-w-screen-2xl mx-auto flex items-center justify-between pl-16 pr-20'>
          <div className='nleft flex py-6 p-3 items-center' >
            <img className='w-20' src={refokus_logo} alt="" />
            <div className="links flex gap-12 ml-24">
                {["Home","Work","About","News","Careers"].map((link,index) => link.length === 0 ? <span className='text-zinc-600'>|</span> :
                <a className='text-sm flex items-center gap-1' href="#">
                    {index === 1 && (<span style={{boxShadow: "0 0 0.25em #00ff19"}} className='bg-[#00ff19] inline-block w-1 h-1 rounded-full -translate-y-0.5'></span>)}
                    {index===1?(<span className='text-glow-gradient'>{link}</span>):<span className='font-normal'>{link}</span>}
                </a>)}
            </div>
          </div>
          <div className='nright flex items-center align-middle gap-10'>
            <div className='lang text-xs flex uppercase gap-3 font-normal'>
              <span>en</span>
              <span className='text-zinc-500'>de</span>
            </div>
            <Button/>
          </div>
        </div>
    </>
  )
}

export default Navbar