import React from 'react'
import x from '../../assets/one.png'
import y from '../../assets/two.png'
import z from '../../assets/three.png'

"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";


export default function Protofolio() {
  const [openModal, setOpenModal] = useState(false);

  
  return (
    <> 
<div className="min-h-screen relative top-7">
<div className="flex fa-align-center justify-center relative top-24  ">
<div className="text-center flex fa-align-center justify-center"><h2 className=' text-slate-800
 font-bold text-4xl text-center  '>PORTOFOLIO COMPONENT</h2></div>
<div className="flex  relative content-center">

<div className="h-1.5 w-28 bg-slate-800 absolute top-14 right-64 ">
</div>
  <div className="h-1.5 w-28 bg-slate-800 absolute top-14 right-24 ">
  <i className="fa-solid fa-star absolute bottom-0 right-32 "></i>

</div>
</div>
</div>
<div className="flex flex-wrap py-3 gap-y-4  px-4 ml-6 justify-center relative top-32 ">
<div className="basis-1/3 "onClick={() => setOpenModal(true)}>
<img  className='w-4/5 border-r-2 rounded ' src={x} alt="" />


</div>
<div className="basis-1/3"onClick={() => setOpenModal(true)}>
<img id='y' className='w-4/5 border-r-2 rounded ' src={y} alt="" />
</div>
<div className="basis-1/3"onClick={() => setOpenModal(true)}>
<img id='z' className='w-4/5 border-r-2 rounded ' src={z} alt="" />

</div>
<div className="basis-1/3"onClick={() => setOpenModal(true)}>
<img className='w-4/5 border-r-2 rounded ' src={x} alt="" />
</div>
<div className="basis-1/3"onClick={() => setOpenModal(true)}>
<img className='w-4/5 border-r-2 rounded ' src={y} alt="" />

</div>
<div className="basis-1/3"onClick={() => setOpenModal(true)}>
<img className='w-4/5 border-r-2 rounded ' src={z} alt="" />

</div>
</div>
</div>
    <Modal show={openModal  } onClose={() => setOpenModal(false)}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
      <img className='w-full rounded' src={x} />
      </Modal.Body>
    </Modal>
    

    </>
  )
}
