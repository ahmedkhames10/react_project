import React from 'react'

export default function Footer() {
  return (
<>
<div className="absolute  left-0  right-0 h-72 bg-slate-700   -bottom-1/2">
 <div className="flex sm:flex-col md:flex-row  flex-wrap ">
  <div className="sm:basis-10/12  text-center md:basis-1/3 relative top-24 ">
  <h1 className= ' font-black text-3xl text-white'>location</h1>
  <p className='text-white leading-loose'>2215 John Daniel Drive</p>
  <p className='text-white leading-loose'>Clark, MO 65243</p>
  </div>
  <div className="md:basis-1/3 sm:basis-10/12  sm:flex-col md:flex-row relative top-24 left-20">
<h1 className=' font-black text-3xl text-white '>Around the web</h1>
<div className="px-9 flex wrap font-black p-3  pt-6 text-white   gap-4 ">
<i class="fa-brands fa-facebook fa-2xl pt-2"></i>
<i class="fa-brands fa-twitter fa-2xl pt-2"></i>
<i class="fa-brands fa-linkedin-in fa-2xl pt-2"></i>
<i class="fa-solid fa-globe fa-2xl pt-2"></i>
</div>
  </div>
  <div className="md:basis-1/3 sm:basis-10/12 sm:flex-col  md:flex-row relative top-24 ">
<h1 className='font-black text-3xl text-white'>About freelancer</h1>
<p className='text-white leading-loose text-xl'> Freelance is a free to use, licensed Bootstrap theme created by Route</p>
  </div>
 </div>

</div>
<div className=" bg-slate-900 h-20 absolute -bottom-96 w-full">
  <p className='text-white text-center relative top-7 '>Copyright © Your Website 2021</p>
 </div>
</>
  )
}
