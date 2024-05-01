import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Contact() {
  return (
    <>
         <Header/>

         <div className='bg-[#c3d8e0] h-[85px] mx-auto'>
        <div className=' container mx-auto'>
          <div className=' grid grid-cols-2 mx-auto'>
           <div className='text-[25px] text-[#0032AB] ml-8 pt-5'>
              Contact
           </div>
           <div className='mr-[40px] pt-7 text-[#0032AB99] lg:flex gap-4 justify-end hidden'>
              <Link to={"/"}>Home</Link> >  
              <p>
              About
               </p>
           </div>
           </div>
        </div>
        </div>

        <div className='container mx-auto'>
           <div className='mt-[40px] px-4'>
              <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_map.png" alt="" />
           </div>
           <div className='border-b-2 mt-10'></div>
        </div>

        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  px-5 mt-[60px]'>
                <div className='px-[10px]'>
                     <h4 className='font-bold text-[#0032ab] mb-[10px] lg:mb-[12px]'>EU Centre</h4>
                     <p className='text-[#7384c6] text-[14px] mb-[10px] lg:mb-[12px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt</p>
                     <p className='text-[#0032ab]'>noreply@envato.com <br />
                     +61 (0) 7 9180 3458</p>
                </div>

                <div className='px-[10px] mt-10 md:mt-0'>
                     <h4 className='font-bold text-[#0032ab] mb-[10px] lg:mb-[12px]'>Assian Centre</h4>
                     <p className='text-[#7384c6] text-[14px] mb-[10px] lg:mb-[12px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt</p>
                     <p className='text-[#0032ab]'>noreply@envato.com <br />
                     +61 (0) 7 9180 3458</p>
                </div>

                <div className='px-[10px] mt-10  md:mt-[50px] lg:mt-0'>
                     <h4 className='font-bold text-[#0032ab] mb-[10px] lg:mb-[12px]'>North America Centre</h4>
                     <p className='text-[#7384c6] text-[14px] mb-[10px] lg:mb-[12px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt</p>
                     <p className='text-[#0032ab]'>noreply@envato.com <br />
                     +61 (0) 7 9180 3458</p>
                </div>

                <div className='px-[10px] mt-10 md:mt-[50px] lg:mt-0'>
                     <h4 className='font-bold text-[#0032ab] mb-[10px] lg:mb-[12px]'>South America Centre</h4>
                     <p className='text-[#7384c6] text-[14px] mb-[10px] lg:mb-[12px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt</p>
                     <p className='text-[#0032ab]'>noreply@envato.com <br />
                     +61 (0) 7 9180 3458</p>
                </div>
            </div>
        </div>

        <div className='container mx-auto my-9'>
             <div className='bg-[#f2faff] md:w-[65%] w-[89%] mx-auto border border-spacing-3 p-10'>
                  <div className='text-[#0032ab] text-[25px] lg:text-[32px] text-center pt-7'>
                  Our experts will answer your questions
                  noreply@envato.com +61 (0) 7 9180 3458
                  </div>

                  <div className='mt-9'>
                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Your Name' className='p-2 pl-[20px]' /></div>
                           <div className='grid grid-cols-1'><input type="email" placeholder='Your E-Mail' className='p-2 pl-[20px]' /></div>
                       </div>

                       <div className='mt-5 grid grid-cols-1'>
                            <input type="text" placeholder='Subject' className='p-2' />
                       </div>

                       <div className='mt-5 grid grid-cols-1'>
                            <textarea name="" id="" cols="30" rows="4" placeholder='Message' className='p-2'></textarea>
                       </div>

                       <div className='mt-[20px] text-center'>
                          <button className='bg-[orange] text-white p-2'>Send a Message</button>
                       </div>
                  </div>
             </div>

             <div className='md:w-[65%] w-[89%] mx-auto'>
             <div className='mt-[40px] text-center text-[#0032ab] md:text-[20px] lg:text-[24px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</div>
             </div>

        </div>

        <div className='container mx-auto'>
            <div className='bg-[#0032ab] mx-[20px] mt-5 flex flex-col lg:flex-row gap-5 text-center justify-center py-9'>
                <div className='text-white text-[32px]'>Send your money quickly and easily</div>
                <button className='bg-[orange] w-[120px] mx-auto text-white justify-center lg:mx-0 p-2 lg:[20%]'>send money</button>
            </div> 
      </div>

     <Footer/>

    </>
  )
}

export default Contact