import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function About() {
  return (

    <>
        <Header/>
         <div className='bg-[#c3d8e0] h-[85px] mx-auto'>
        <div className=' container mx-auto'>
          <div className=' grid grid-cols-2 mx-auto'>
           <div className='text-[25px] text-[#0032AB] ml-8 pt-5'>
               About
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
          
          <div className='bg-[#fcfcfc]'>
         <div className='container mx-auto mt-[50px]'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
             <div className='px-4 md:w-[90%] w-[95%] md:ml-[30px]'>
                <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_about.jpg" alt="" />
             </div>

             <div className='md:mt-[50px] mt-[20px] md:text-justify text-center pl-[30px] mr-[50px] text-[#0032Ab]'>
                 <h4 className='lg:text-[24px] text-[20px] md:mb-8 mb-4 px-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>

                 <p className='lg:text-[18px] text-[16px] text-[#7384c6] md:mb-8 mb-4 px-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                 <p className='lg:text-[18px] text-[16px] text-[#7384c6] md:mb-8 mb-4 px-4'>Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</p>
             </div>
        </div>

        <div className='border-b-2 mt-[60px] mb-[40px]'></div>
      </div>
      </div>

      <div className='md:text-[32px] text-[20px] text-[#0032AB] flex justify-center gap-3 mb-10 '>For  <b> laudantium et omnia </b> vanitarum ellear</div>

      <div className='container mx-auto px-4 ml-[10px] md:ml-0'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                 <div className='md:ml-[20px] ml-[20px] mb-5'>
                     <div className='md:ml-[100px] ml-[120px]'>
                     <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_about_icon_1.png" alt=""  />
                    </div>
                     <h4 className='mt-[20px] text-[#0032ab] md:text-[22px] text-[22px] md:ml-[45px] ml-[80px]'>Great value for money</h4>
                     <p className='text-center mt-4 text-[#7384c6] mr-[20px] md:mr-[0px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                 </div>

                 <div className='md:ml-[20px] ml-[20px]'>
                     <div className='md:ml-[100px] ml-[120px]'>
                     <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_about_icon_2.png" alt=""  />
                    </div>
                     <h4 className='mt-[20px] text-[#0032ab] text-[24px] md:ml-[55px] ml-[100px]'>Any credit card</h4>
                     <p className='text-center mt-4 text-[#7384c6] mr-5 md:mr-[0]'>Praesent ornare maximus finibus. Aenean augue leo, fermentum nullam suscipit nec turpis sit amet scelerisque. Aenean augue leo, fermentum at hendrerit nec, rhoncus at risus nullam sodales.</p>
                 </div>

                 <div className='md:ml-[20px] mb-4 md:mb-0'>
                     <div className='md:ml-[100px] ml-[140px] mt-[30px]'>
                     <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_about_icon_3.png" alt=""  />
                    </div>
                     <h4 className='mt-[20px] md:mt-0 text-[#0032ab] text-[24px] md:ml-[55px] ml-[100px] mb-4 md:mb-0'>Anywhere you want</h4>
                     <p className='text-center md:mt-4 mt-0  text-[#7384c6] ml-5 md:mr-[0px] mr-[20px]'>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doxcepteur.</p>
                 </div>

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

export default About