import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

function Home() {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    <>
    <Header/>

    <Slider {...settings}>
         
    <div className='bg-[#cccc] p-3'>

<div className='container grid grid-cols-2 mx-auto'>
    <div className='md:ml-12 mt-8'>
        <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_woman.png" width={400} alt="" />
    </div>

    <div className='mt-[100px]'>
      <div className='md:ml-[0px]  ml-[35px]'>
       <span className='md:text-[45px] text-blue-900'>
             Transfer Your Money Quickly and easily
       </span>
    </div>

       <span className='flex gap-4 mt-5'>
          <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={20} alt="" />
          <p className='text-blue-800 text-[11px] md:text-xl'>Easy Money Transfer <b> for low cost</b></p>
       </span>

       <span className='flex gap-4 mt-5'>
          <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={20} alt="" />
          <p className='text-blue-800 text-[11px] md:text-xl'>Available <b>200+</b> countries on each countient</p>
       </span>

       <span className='flex gap-4 mt-5'>
          <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={20} alt="" />
          <p className='text-blue-800 text-[11px] md:text-xl'><b>24h</b> across the world</p>
       </span>

       <button className='md:border md:mt-[50px] mt-7 mb-8 ml-4 bg-blue-800 text-white md:p-3  p-1'>
           Get more info
       </button>
    </div>
</div>
     </div>

    <div className='bg-[#cccc] p-3'>

<div className='container grid grid-cols-2 mx-auto'>

    <div className='mt-[100px]'>
       <span className='md:text-[45px] text-blue-900 text-[20px]'>
             send with your card anywhere in the world 
       </span>

        <div className='grid grid-cols-2 '>
             <span className='flex mt-[20px] md:gap-3 gap-1'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={30} alt="" />
                 <p className='text-blue-800 md:text-xl text-[12px]'>Europe</p>
             </span>

             <span className='flex mt-[20px] md:gap-3 gap-1'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={30} alt="" />
                 <p className='text-blue-800 md:text-xl text-[12px]'>Australia</p>
             </span>
        </div>

        <div className='grid grid-cols-2 '>
             <span className='flex mt-[20px] md:gap-3 gap-1'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={30} alt="" />
                 <p className='text-blue-800 md:text-xl text-[12px]'>Asia</p>
             </span>

             <span className='flex mt-[20px] md:gap-3 gap-1'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={30} alt="" />
                 <p className='text-blue-800 md:text-xl text-[12px]'>Africa</p>
             </span>
        </div>

        <div className='grid grid-cols-2 '>
             <span className='flex mt-[20px] md:gap-3 gap-1'>
                 <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide1_check.png" width={30} alt="" />
                 <p className='text-blue-800 md:text-xl text-[12px]'>America</p>
             </span>
        </div>
       
       <button className='md:border md:mt-[50px] mt-7 mb-8 ml-4 bg-blue-800 text-white md:p-3  p-1'>
           Get more info
       </button>
    </div>

    <div className='md:ml-12 mt-8'>
        <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_slider_slide2_woman.png" width={400} alt="" />
    </div>
</div>

    </div>

    </Slider>

    <div className='flex text-blue-800 mt-10 m-3'>
         <h2 className='mx-auto md:text-[27px] text-center text-[22px] md:w-[780px] w-[860px]'>
         Donec ultricies congue felis, vestibulum lobortis ex euismod non. Maecenas  <b> odio libero feugiat </b> porta auctor et tortor.
         </h2>
    </div>

    <div className='container bg-[#0032ab] mt-6 p-[50px] md:grid grid-cols-1 lg:grid-cols-4 mx-auto'>
      <div className='text-white text-[24px] pb-[10px] md:pl-[0px] md:pt-2 pl-[40px]'>
          <h2 className='flex justify-center items-center'>We will call you back</h2>
      </div>

      <div className='md:pl-[220px] md:mt-2 text-[20px] md-[10px] pb-[20px] pl-[60px] w-[20px] lg:pl-[20px]'>
          <input type="text" placeholder='your Name' className='pl-[10px]'/>
      </div>

      <div className='md:pl-[195px] mt-2 text-[20px] pl-[40px] ml-6 lg:pl-[20px]'>
          <input type="email" placeholder='your Email' className='pl-[10px]' />
      </div>   

      <button className='bg-[#ffad0f] text-white h-10 mt-[30px] md:mt-[25px] md:w-[200px] md:ml-[235px] px-[10px] ml-[100px] lg:ml-[80px] lg:w-[150px] lg:-mt-[0px]'> 
              send message
      </button>

    
    </div> 


    <div className='container mx-auto mt-[50px] p-[10px]'>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        <div className='border border-spacing-1 '>
            <div className='border border-b flex justify-center'>
               <img src="	https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_icon_1.png" alt="" />
            </div>
            <div className='m-5 text-blue-800'>
                <div className='pl-[20px] text-2xl text-blue-800 flex justify-center'>We will call you back</div>

                <p className='text-[16px] pt-4 pl-9 text-center'>Etiam venenatis eu ante in tincidunt. Donec finibus tellus posuere justo. Integer at neque</p>
                 <div className='flex justify-center'>
                <button className='bg-[orange] p-3 px-5 mt-5 text-white'>see more</button>
                </div>
            </div>
        </div>
         <div className='border border-spacing-1'>
             <div className='border border-b flex justify-center'>
               <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_icon_2.png" alt="" />
            </div>
            <div className='m-5 text-blue-800'>
                <div className='pl-[20px] text-2xl text-blue-800 flex justify-center'>Anywhere and anytime</div>

                <p className='text-[16px] pt-4 pl-9 text-center'>Etiam venenatis eu ante in tincidunt. Donec finibus tellus posuere justo. Integer at neque</p>                  <div className='flex justify-center'>
                <button className='bg-[orange] p-3 px-5 mt-5 text-white'>see more</button>                 </div>
            </div>
        </div>
        <div className='border border-spacing-1'>
            <div className='border border-b flex justify-center'>
               <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_icon_3.png" alt="" />
            </div>
            <div className='m-5 text-blue-800'>
                <div className='pl-[20px] text-2xl text-blue-800 flex justify-center'>We will call you back</div>
                 <p className='text-[16px] pt-4 pl-9 text-center'>Etiam venenatis eu ante in tincidunt. Donec finibus tellus posuere justo. Integer at neque</p>                  <div className='flex justify-center'>
                   <button className='bg-[orange] p-3 px-5 mt-5 text-white'>see more</button>                 </div>             </div>
           </div>
         </div> 
      
       </div>


       <div className='container mx-auto mt-10'> 
             <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1'> 
                  <div className='pl-[20px] md:grid grid-cols-2'>
                    <div>
                        <h2 className=' text-[25px] text-blue-800'>Our company</h2>
                        <p className='mt-[20px] text-blue-700'>Maecenas volutpat eros justo, et arcu commodo eget. Curabitur porta blandit lectus, nec interdum felis.</p>
                        <p className='mt-[20px] text-blue-700'>Curabitur lobortis, eros a ornare porttitor; lorem odio porta massa, sed consequat ipsum nisl non est. Suspendisse tempus metus faucibus varius molestie nullam.</p>

                        <div className='flex items-center'>
                            <p className='font-bold mt-4 text-blue-900'>Read more</p>
                            <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_read_more.png" className='mt-[20px] ml-[10px]' alt="" />
                        </div>
                    </div>  

                    <div className='md:ml-[50px]'>
                         <h2  className='text-[25px] text-blue-800 md:ml-7 md:mt-[0px]  mt-[40px]'>Do you know?</h2>

                         <span className='flex items-center mt-4'>
                            <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_read_more.png" className='mr-[10px] ml-[10px]' alt="" />
                            <p className='text-blue-800 md:text-[16px] text-[12px]'>Aenean sollicitudin orem qui</p>
                         </span>

                         <span className='flex items-center mt-4'>
                            <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_read_more.png" className='mr-[10px] ml-[10px]' alt="" />
                            <p className='text-blue-800 md:text-[16px] text-[12px]'>Aenean sollicitudin orem qui</p>
                         </span>

                         <span className='flex items-center mt-4'>
                            <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_read_more.png" className='mr-[10px] ml-[10px]' alt="" />
                            <p className='text-blue-800 md:text-[16px] text-[12px]'>Aenean sollicitudin orem qui</p>
                         </span>

                         <span className='flex items-center mt-4'>
                            <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_read_more.png" className='mr-[10px] ml-[10px]' alt="" />
                            <p className='text-blue-800 md:text-[16px] text-[12px]'>Aenean sollicitudin orem qui</p>
                         </span>

                         <span className='flex items-center mt-4'>
                            <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_read_more.png" className='mr-[10px] ml-[10px]' alt="" />
                            <p className='text-blue-800 md:text-[16px] text-[12px]'>Aenean sollicitudin orem qui</p>
                         </span>

                         <span className='flex items-center mt-4'>
                            <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_read_more.png" className='mr-[10px] ml-[10px]' alt="" />
                            <p className='text-blue-800 md:text-[16px] text-[12px]'>Aenean sollicitudin orem qui</p>
                         </span>
                    </div>

                  </div>

                  <div className='bg-[#f2f8ff] border border-spacing mt-6 mr-4 md:ml-5 ml-3'>

          <div className='text-blue-800 flex justify-center my-5 text-[24px] font-semibold'>
            Curabitur porta blandit lectus
          </div>

          <div className='flex justify-evenly'>

            <div className=' border-r-2 p-3'>
              <h1 className='text-blue-800 text-[36px]'>234  000</h1>

              <p className='text-blue-800'>
                <b>Pellen tesque habitant</b> morbi tristique senectus et netus et malesuada fames ac cras amet.
              </p>
            </div>

            <div className='  p-3'>
              <h1 className='text-blue-800 text-[36px]'>5 455 000</h1>

              <p className='text-blue-800'>
                Sed <b>molestie</b> dui eget ornare tincidunt. Maecenas blandit luctus elit tristique volutpat tellus.
              </p>
            </div>
            
          </div>

             </div>
      </div>
   </div>

       <Footer/>

  </>

  );
}

export default Home;
