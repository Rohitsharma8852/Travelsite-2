import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Works() {
  return (
    <>
    <Header/>

    <div className='bg-[#c3d8e0] h-[85px] mx-auto'>
        <div className=' container mx-auto'>
          <div className=' grid grid-cols-2 mx-auto'>
           <div className='text-[25px] text-[#0032AB] ml-8 pt-5'>
              How it Works
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

      <div className='container mx-auto mt-[80px]'>
           <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='flex flex-col justify-center items-center'>
                     <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_howitworks_icon_1.png" alt="" />

                     <div className='border-b-2 w-[200px] mt-[50px] relative'>
                           <span className='absolute bottom-[-13px] left-[90px] text-white font-medium bg-[#ffad0f] px-3 py-1'>1</span>
                     </div>

                     <h4 className='mt-[40px] text-[25px] text-[#0032ab]'>Step 1</h4>
                         
                   <div className='mt-[20px] text-[16px] text-[#7384c6] flex justify-center items-center pl-[40px] text-center'>
                     Suspendisse non turpis quis mi consequat placerat. Vestibulum blandit aliquet lacus
                      
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-[60px] md:mt-0'>
                     <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_howitworks_icon_2.png" alt="" />

                     <div className='border-b-2 w-[200px] mt-[50px] relative'>
                           <span className='absolute bottom-[-13px] left-[90px] text-white font-medium bg-[#ffad0f] px-3 py-1'>2</span>
                     </div>

                     <h4 className='mt-[40px] text-[25px] text-[#0032ab]'>Step 2</h4>
                         
                   <div className='mt-[20px] text-[14px] text-[#7384c6] flex justify-center items-center pl-[40px] text-center'>
                      Nullam sed imperdiet odio. Sed facilisis libero tortor. Curabitur ut tempus erat, non iaculis
                   </div>
               </div>

                <div className='flex flex-col justify-center items-center mt-[60px] md:mt-0'>
                     <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_howitworks_icon_3.png" alt="" />

                     <div className='border-b-2 w-[200px] mt-[50px] relative'>
                           <span className='absolute bottom-[-13px] left-[90px] text-white font-medium bg-[#ffad0f] px-3 py-1'>3</span>
                     </div>

                     <h4 className='mt-[40px] text-[25px] text-[#0032ab]'>Step 3</h4>
                         
                   <div className='mt-[20px] text-[14px] text-[#7384c6] flex justify-center items-center pl-[40px] text-center'>
                   Integer cursus purus eu dolor eleifend, sed luctus enim semper. Ut dictum, erat sit amet
                   </div>
              </div>
           </div>
      </div>

       <div className='container mx-auto mt-14'>
              <div className='border-b-2'></div>
       </div>

       <div className='container grid md:grid-cols-2 px-10'>
             <div className='flex justify-center items-center mt-[70px]'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_icon_big_1.png" alt="" />
             </div>
 
              <div className='mt-[50px] md:mt-[100px] text-center'>

             <div className='flex justify-center items-center'>
                 <h2 className='text-[#0032ab] text-[25px] lg:text-[32px]'>Works on every device</h2>
             </div>

             <div className='flex justify-center items-center mt-10'>
                 <h4 className='text-[#0032ab] text-[20px] lg:text-[24px]'>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</h4>
             </div>

             <p className='text-[#7384c6] text-[18px] lg:text-[16px] mt-7'>Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.</p>

             </div>

       </div>

       <div className='container mx-auto mt-14'>
              <div className='border-b-2'></div>
       </div>


       <div className='container grid md:grid-cols-2 px-10'>
 
              <div className='mt-[50px] md:mt-[100px] text-center'>

             <div className='flex justify-center items-center'>
                 <h2 className='text-[#0032ab] text-[25px] lg:text-[32px]'>Extremely quick and easy</h2>
             </div>

             <div className='flex justify-center items-center mt-10'>
                 <h4 className='text-[#0032ab] text-[20px] lg:text-[24px]'>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</h4>
             </div>

             <p className='text-[#7384c6] text-[18px] lg:text-[16px] mt-7'>Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer.</p>

             </div>

             <div className='flex justify-center items-center mt-[70px]'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_icon_big_2.png" alt="" />
             </div>

       </div>

       <div className='container mx-auto mt-14'>
              <div className='border-b-2'></div>
       </div>


       <div className='container grid md:grid-cols-2 px-10'>
             <div className='flex justify-center items-center mt-[70px]'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_icon_big_3.png" alt="" />
             </div>
 
              <div className='mt-[50px] md:mt-[100px] text-center'>

             <div className='flex justify-center items-center'>
                 <h2 className='text-[#0032ab] text-[25px] lg:text-[32px]'>Send money and win a car</h2>
             </div>

             <div className='flex justify-center items-center mt-10'>
                 <h4 className='text-[#0032ab] text-[20px] lg:text-[24px]'>Curabitur et ligula. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</h4>
             </div>

             <p className='text-[#7384c6] text-[18px] lg:text-[16px] mt-7'>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.</p>

             </div>

       </div>

       <div className='container mx-auto mt-[50px]'>
            <div className='bg-[#0032ab] mx-[20px] mt-5 flex flex-col lg:flex-row gap-5 text-center justify-center py-9'>
                <div className='text-white text-[32px]'>Send your money quickly and easily</div>
                <button className='bg-[orange] w-[120px] mx-auto text-white justify-center lg:mx-0 p-2 lg:[20%]'>send money</button>
            </div> 
      </div>

        <Footer/>

    </>
  )
}

export default Works