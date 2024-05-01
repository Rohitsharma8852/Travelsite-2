import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    
  return (
    <div className='bg-[#ffc027]'>
    
    <div className='container border border-spacing-2  mx-auto' >

     <header className=' md:pt-7 pt-4 sticky top-0 z-[999999]'>
       
       <div className='cursor-pointer md:flex md:justify-between  justify-center items-center '>
         
         <div className='flex justify-between'>
           <img className='px-6 pb-6' src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/retina-transfer.png" width={200} alt="" />
             <button onClick={() => setToggle(!toggle)}>
           <IoMdMenu className='md:hidden text-3xl' />
           </button>
         </div>
            <div className='hidden md:block'>
         <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_banner.png" alt="" />
         </div>
       </div>

       <div className='md:grid grid-cols-2  hidden'>
         
         <ul className='flex justify-around text-[16px] cursor-pointer'>
         <Link to={"/"}>
         <li className='text-blue-800'>
             <FaHome />
           </li>
         </Link>

           <Link to={"/about"}>
           <li className='text-blue-800'>
                About
           </li>
           </Link>

           <Link to={"/faq"}>
           <li className='text-blue-800'>
                Faq
           </li>
           </Link>


           <Link to={"/works"}>
           <li className='text-blue-800'>
               How it Works
           </li>
           </Link>

           <Link to={"/contact"}>
           <li className='text-blue-800'>
                Contact
           </li>
           </Link>


           <li className='text-blue-800'>
             Buy
           </li>
         </ul>

           <div className='flex justify-end pr-[20px] mt-[10px] mb-2'>
           <button onClick={() => setShowSearch(!showSearch)}>
              <CiSearch className='relative gap-8 cursor-pointer' />
            </button>
         </div>

      </div>

      {toggle && (
            <div className='flex flex-col pl-5 md:hidden'>
         
            <ul className='flex flex-col gap-5 text-[16px] cursor-pointer'>
            <Link to={"/"}>
            <li className='text-blue-800'>
                <FaHome />
              </li>
            </Link>
   
              <Link to={"/about"}>
              <li className='text-blue-800'>
                   About
              </li>
              </Link>
   
             
              <Link to={"/faq"}>
              <li className='text-blue-800'>
                   Faq
              </li>
              </Link>
   
              <li>
                How its works
              </li>
   
              <li>
                Contact
              </li>
   
              <li className='text-blue-800 mb-5'>
                Buy
              </li>
            </ul>
         </div>
      )
    }

<div className='block md:hidden'>
         <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_banner.png" alt="" />
         </div>

     </header>

     {showSearch && (
          <div className='absolute bg-[#ffad0f] h-[70px] text-black z-[9999] hidden md:block md:w-[600px] lg:w-[800px] ml-[100px]'>
            <input type="text" placeholder="Enter your Search" className='mt-[20px] md:w-[600px] lg:w-[800px] text-black mx-auto px-4 py-2 bg-[#ffad0f] border-b outline-none' />
          </div>
        )}
   
   </div>
    
 </div>
  )
}

export default Header