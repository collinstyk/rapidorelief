import React from 'react'
import Cutting from '../../assets/images/Cutting.svg'
import Userfriendly from '../../assets/images/Userfriendly.svg'
import Personlized from '../../assets/images/Personlized.svg'
import Healthcare from '../../assets/images/Healthcare.svg'
import Secure from '../../assets/images/Secure.svg'
import Ecosystem from '../../assets/images/Ecosystem.svg'

export default function 
() {
  return (
    <div className='bg-grey-light'>
        <div className='w-11/12 mx-auto 2xl:max-w-[1154px] py-[60px]'>
          <h1 className='f-f-m text-8xl sm:text-10xl md:text-11xl text-green-dark text-center'>
            Super Feature with the Benefit</h1>

            <div className="grid grid-cols-12 gap-6 mt-9 items-center">
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8">
                  <div className="bg-parrot-vlight w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Cutting} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Cutting-Edge AI Technology</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark leading-5 mt-1'>Rapido Relief AI has the potential to enhance mental health care by providing personalized support, early intervention, and accessible resources to individuals in need especially in remote or underserved areas .</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8">
                  <div className="bg-red w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Userfriendly} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Cutting-Edge AI Technology</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark leading-5 mt-1'>Rapido Relief AI has the potential to enhance mental health care by providing personalized support, early intervention, and accessible resources to individuals in need especially in remote or underserved areas .</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8">
                  <div className="bg-blue w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Personlized} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Cutting-Edge AI Technology</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark leading-5 mt-1'>Rapido Relief AI has the potential to enhance mental health care by providing personalized support, early intervention, and accessible resources to individuals in need especially in remote or underserved areas .</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8">
                  <div className="bg-blue-light w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Healthcare} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Cutting-Edge AI Technology</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark leading-5 mt-1'>Rapido Relief AI has the potential to enhance mental health care by providing personalized support, early intervention, and accessible resources to individuals in need especially in remote or underserved areas .</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8">
                  <div className="bg-white-dark w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Secure} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Cutting-Edge AI Technology</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark leading-5 mt-1'>Rapido Relief AI has the potential to enhance mental health care by providing personalized support, early intervention, and accessible resources to individuals in need especially in remote or underserved areas .</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8">
                  <div className="bg-parrot-vlight w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Ecosystem} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Cutting-Edge AI Technology</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark leading-5 mt-1'>Rapido Relief AI has the potential to enhance mental health care by providing personalized support, early intervention, and accessible resources to individuals in need especially in remote or underserved areas .</p>
                  

                </div>
              </div>

            </div>
        </div>
    </div>
  )
}
