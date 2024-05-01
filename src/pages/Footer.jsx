import React from 'react'

function Footer() {
  return (
    <>
       <div className='bg-[#F1eeee] mt-9'>
           <div className='container mx-auto'>
               <div className='flex flex-col justify-center items-center pt-[70px]'>
                  <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_logo_footer.png" alt="" />

                  <p className='md:w-[50%] w-[70%] mx-auto pt-10 text-[#6a7cc3] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate quaerat, amet autem illo dolor sapiente laborum exercitationem consectetur debitis sequi odio cum rerum obcaecati cupiditate placeat itaque velit culpa.</p>

                  <p className='pt-[20px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-[#0032ab]'>
                    <a href="/">Consequat</a>
                    <a href="/"> Donec</a>
                    <a href="/">Faucibus</a>
                    <a href="/"> Odio porta</a>
                    <a href="/"> Integer</a>
                 </p>

                 <div className='pt-[35px] md:w-[100%] w-[75%] flex justify-center items-center pb-5'>
                    <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_payment.png" alt="" />
                 </div>

               </div>

               <div className='border-b-2'></div>

               <div className='flex justify-center items-center mt-4 text-blue-900 pb-8 tracking-wider'>© 2021 Betheme by <b> Muffin group </b> | All Rights Reserved | Powered by  <b> WordPress </b></div>

           </div>
       </div>
    </>
  )
}

export default Footer