import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className="bg-slate-700 w-full h-24 fixed top-0 z-10 pb-7">
    <ul className='relative' >
      <li className=' absolute top-6 left-14 text-3xl text-white '>
    <NavLink  to={''}>START FRAMEWORK</NavLink>   
      </li>
      <li className='ps-10 absolute top-6 md:right-64 text-xl text-white  '>
    <NavLink  to={'about'}>About</NavLink>   
      </li>
      <li className='ps-10 absolute top-6 right-36  text-xl text-white '>
    <NavLink  to={'protofolio'}>protofolio</NavLink>   
      </li>
      <li className=' ps-10 absolute top-6 right-10 text-xl text-white '>
    <NavLink  to={'contact'}>CONTACT</NavLink>   
      </li>
    </ul>
   </div>
   </>
  )
}
