import React, { useState } from 'react';
import Individual from '../../../assets/images/Pindividual.svg'

import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import Joiningdlg from './Joining' 

export default function DialogDefault({open,setOpen,handleOpen}) {

  const [activeTab, setActiveTab] = useState('Individual');

  const [joiningbox, setjoiningbox] = useState(false)

  const handleOpenjoin = () => {
    setOpen(false)
    setjoiningbox(!joiningbox);
  } 
  return (
    <>
   
      <Dialog open={open} handler={()=>handleOpen()} className=" bg-green-light 2xl:min-w-[1200px] relative p-5 md:p-9 " >
      
        <DialogBody className="  overflow-y-scroll  "  style={{ height: "80vh" }} >
    <div className="grid grid-cols-12 gap-4 items-center">
      <div className="col-span-12 2xl:col-span-7">
        <img src={Individual} className="w-auto  2xl:w-[325px] h-auto 2xl:h-[385px] mx-auto" alt="" />

      </div>
      <div className="col-span-12 2xl:col-span-5">
        <h1 className="f-f-b-t text-green-dark text-6xl ">Obtenha acesso antecipado
 <br />antes o público em geral.
</h1>

<div className="w-full text-center">
<div className="w-[251px] h-[41px] border-[2px] border-green-dark rounded-md mt-[70px] p-[6px]  inline-flex space-x-4 items-center  ">

    <button 
        className={`w-[104px] h-[30px] bg-${activeTab === 'Individual' ? 'green-dark' : 'transparent'} rounded-[5px] f-f-r text-${activeTab === 'Individual' ? 'white' : 'green-dark'} text-2xl`} 
        onClick={() => setActiveTab('Individual')}
      >
        Individual
      </button>
      <button 
        className={`w-[130px] h-[30px] bg-${activeTab === 'Professional' ? 'green-dark' : 'transparent'} rounded-[5px] f-f-r text-${activeTab === 'Professional' ? 'white' : 'green-dark'} text-2xl`} 
        onClick={() => setActiveTab('Professional')}
      >
        Professional
      </button>
  </div>

</div>

    {activeTab === 'Individual' && (
        <>
          <div className="w-full text-center">
            <input type="text" className="w-full sm:w-[300px] h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4 mt-[17px] mx-auto uppercase" placeholder="Seu nome" name="" id="" />
          </div>
          <div className="w-full text-center">
            <input type="text" className="w-full sm:w-[300px] h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4 mt-[17px] mx-auto uppercase" placeholder="Seu email" name="" id="" />
          </div>
          <div className="w-full text-center">
            <button onClick={handleOpenjoin} className="w-full sm:w-[300px] h-[50px] bg-green-dark rounded-[5px] f-f-m text-white text-5xl mt-[26px] uppercase">se inscrever</button>
          </div>
        </>
      )}



{activeTab === 'Professional' && (
        <>
   <div className="w-full text-center">
<input type="text" className="w-full sm:w-[300px] h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4 mt-[17px] mx-auto uppercase " placeholder="Seu nome" name="" id="" />
</div>
<div className="w-full text-center">
<input type="text" className="w-full sm:w-[300px] h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4 mt-[17px] mx-auto uppercase " placeholder="Seu email" name="" id="" />
</div>
<div className="w-full text-center">
<input type="text" className="w-full sm:w-[300px] h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4 mt-[17px] mx-auto uppercase " placeholder="área de profissão" name="" id="" />
</div>
<div className="w-full text-center">
<button onClick={handleOpenjoin} className=" w-full sm:w-[300px] h-[50px] bg-green-dark rounded-[5px] f-f-m text-white text-5xl mt-[26px] uppercase ">se inscrever</button>
</div>
        </>
      )}



       
      </div>
    </div>


        </DialogBody>

        <button   onClick={()=>handleOpen() } className="  absolute top-[5px] right-[5px] " >
        <svg  className=" w-[25px] md:w-[30px] h-[25px] md:h-[30px] "  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z" fill="#1A4402"/>
</svg>

        </button>
      
      </Dialog>

 
      <Joiningdlg joiningbox={joiningbox}  setjoiningbox={setjoiningbox} handleOpenjoin={handleOpenjoin}  />
    </>
  );
}