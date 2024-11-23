import React from 'react'
import logo from '../../assets/boy.svg' 
export default function Home() {
  return (
<>
<div className="bg-teal-500 h-svh mt-24 flex justify-center   relative">
<img src={logo} className='w-56 h-2/4 absolute top-16  ' alt="" />
<h1 className=' text-slate-800 absolute bottom-64 font-black text-4xl '>START FRAMEWORK</h1>
<div className="flex  relative content-center">
<div className="h-1.5 w-28 bg-slate-800 absolute bottom-52 left-10 ">
</div>
<div className="h-1.5 w-28 bg-slate-800 absolute bottom-52   right-12   ">
<i className="fa-solid fa-star absolute bottom-0  left-36 "></i>
</div>
</div>
<p className='absolute bottom-40'>Graphic Artist - Web Designer - Illustrator</p>
</div>
</>
  )
}
