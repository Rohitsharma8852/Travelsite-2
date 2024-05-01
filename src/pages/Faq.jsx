import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Faq() {
  return (
    <>
       <Header/>

       <div className='bg-[#c3d8e0] h-[85px] mx-auto'>
        <div className=' container mx-auto'>
          <div className=' grid grid-cols-2 mx-auto'>
           <div className='text-[25px] text-[#0032AB] ml-8 pt-5'>
             Faq
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
           <div className='grid grid-cols-1 md:grid-cols-3 mt-[20px]'>
               <div className='grid grid-cols-1 mt-[20px] md:mt-[70px] border-r-2'>
                     <h1 className='flex justify-center md:justify-end text-[32px] text-[#0032ab] pr-[20px]'>Sending money</h1>
               </div>

               <div className='col-span-2 px-10 mt-10'>
               <div id="accordion-open" data-accordion="open">


        <h2 id="accordion-open-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>1</p>
        Consectetur interdum augus penatibus et?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
         </h2>
        <div
    id="accordion-open-body-1"
    className="hidden"
    aria-labelledby="accordion-open-heading-1"
  >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
        </div>


       <h2 id="accordion-open-heading-2">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-2"
      aria-expanded="false"
      aria-controls="accordion-open-body-2"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>2</p>
       Donec vestibulum justo interdum augue diam?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
          </h2>
          <div
    id="accordion-open-body-2"
    className="hidden"
    aria-labelledby="accordion-open-heading-2"
  >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is first conceptualized and designed using the Figma software
        so everything you see in the library has a design equivalent in our
        Figma file.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out the{" "}
        <a
          href="https://flowbite.com/figma/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Figma design system
        </a>{" "}
        based on the utility classes from Tailwind CSS and components from
        Flowbite.
      </p>
    </div>
          </div>


        <h2 id="accordion-open-heading-3">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-3"
      aria-expanded="false"
      aria-controls="accordion-open-body-3"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>3</p>
       Mauris facilisis sed metus?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
         </h2>
           <div
    id="accordion-open-body-3"
    className="hidden"
    aria-labelledby="accordion-open-heading-3"
  >
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The main difference is that the core components from Flowbite are open
        source under the MIT license, whereas Tailwind UI is a paid product.
        Another difference is that Flowbite relies on smaller and standalone
        components, whereas Tailwind UI offers sections of pages.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        However, we actually recommend using both Flowbite, Flowbite Pro, and
        even Tailwind UI as there is no technical reason stopping you from using
        the best of two worlds.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li>
          <a
            href="https://flowbite.com/pro/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Flowbite Pro
          </a>
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            rel="nofollow"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Tailwind UI
          </a>
        </li>
      </ul>
    </div>
            </div>

            <h2 id="accordion-open-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>4</p>
        Consectetur interdum augus?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
           </h2>
           <div
              id="accordion-open-body-1"
               className="hidden"
                aria-labelledby="accordion-open-heading-1"
              >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
          </div>

          <h2 id="accordion-open-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>5</p>
        Integer lorem non enim fringilla?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
           </h2>
           <div
              id="accordion-open-body-1"
               className="hidden"
                aria-labelledby="accordion-open-heading-1"
              >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
          </div>
          

             </div>

               </div>


           </div>

         
           <div className='grid grid-cols-1 md:grid-cols-3 mt-[40px]'>
               <div className='grid grid-cols-1 mt-[20px] md:mt-[70px] border-r-2'>
                     <h1 className='flex justify-center md:justify-end text-[32px] text-[#0032ab] pr-[20px]'>Payment</h1>
               </div>

               <div className='col-span-2 px-10 mt-10'>
               <div id="accordion-open" data-accordion="open">


        <h2 id="accordion-open-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>1</p>
        Donec vestibulum justo interdum augue diam?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
         </h2>
        <div
    id="accordion-open-body-1"
    className="hidden"
    aria-labelledby="accordion-open-heading-1"
  >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
        </div>


       <h2 id="accordion-open-heading-2">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-2"
      aria-expanded="false"
      aria-controls="accordion-open-body-2"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>2</p>
        Integer lorem non enim fringilla?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
          </h2>
          <div
    id="accordion-open-body-2"
    className="hidden"
    aria-labelledby="accordion-open-heading-2"
  >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is first conceptualized and designed using the Figma software
        so everything you see in the library has a design equivalent in our
        Figma file.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out the{" "}
        <a
          href="https://flowbite.com/figma/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Figma design system
        </a>{" "}
        based on the utility classes from Tailwind CSS and components from
        Flowbite.
      </p>
    </div>
          </div>


        <h2 id="accordion-open-heading-3">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-3"
      aria-expanded="false"
      aria-controls="accordion-open-body-3"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>3</p>
        Consectetur interdum augus penatibus et?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
         </h2>
           <div
    id="accordion-open-body-3"
    className="hidden"
    aria-labelledby="accordion-open-heading-3"
  >
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The main difference is that the core components from Flowbite are open
        source under the MIT license, whereas Tailwind UI is a paid product.
        Another difference is that Flowbite relies on smaller and standalone
        components, whereas Tailwind UI offers sections of pages.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        However, we actually recommend using both Flowbite, Flowbite Pro, and
        even Tailwind UI as there is no technical reason stopping you from using
        the best of two worlds.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li>
          <a
            href="https://flowbite.com/pro/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Flowbite Pro
          </a>
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            rel="nofollow"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Tailwind UI
          </a>
        </li>
      </ul>
    </div>
            </div>

            <h2 id="accordion-open-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>4</p>
        Mauris facilisis sed metus?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
           </h2>
           <div
              id="accordion-open-body-1"
               className="hidden"
                aria-labelledby="accordion-open-heading-1"
              >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
                        </div>
                   </div>
               </div> 
           </div>


           <div className='grid grid-cols-1 md:grid-cols-3 mt-[40px]'>
               <div className='grid grid-cols-1 mt-[20px] md:mt-[70px] border-r-2 '>
                     <h1 className='flex justify-center md:justify-end text-[32px] text-[#0032ab] pr-[20px]'>Others</h1>
               </div>

               <div className='col-span-2 px-10 mt-10'>
               <div id="accordion-open" data-accordion="open">


        <h2 id="accordion-open-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>1</p>
        Integer lorem non enim fringilla?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
         </h2>
        <div
    id="accordion-open-body-1"
    className="hidden"
    aria-labelledby="accordion-open-heading-1"
  >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
        </div>


       <h2 id="accordion-open-heading-2">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-2"
      aria-expanded="false"
      aria-controls="accordion-open-body-2"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>2</p>
        Donec vestibulum justo interdum augue diam?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
          </h2>
          <div
    id="accordion-open-body-2"
    className="hidden"
    aria-labelledby="accordion-open-heading-2"
  >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is first conceptualized and designed using the Figma software
        so everything you see in the library has a design equivalent in our
        Figma file.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out the{" "}
        <a
          href="https://flowbite.com/figma/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Figma design system
        </a>{" "}
        based on the utility classes from Tailwind CSS and components from
        Flowbite.
      </p>
    </div>
          </div>


        <h2 id="accordion-open-heading-3">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-3"
      aria-expanded="false"
      aria-controls="accordion-open-body-3"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>3</p>
        Consectetur interdum augus?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
         </h2>
           <div
    id="accordion-open-body-3"
    className="hidden"
    aria-labelledby="accordion-open-heading-3"
  >
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The main difference is that the core components from Flowbite are open
        source under the MIT license, whereas Tailwind UI is a paid product.
        Another difference is that Flowbite relies on smaller and standalone
        components, whereas Tailwind UI offers sections of pages.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        However, we actually recommend using both Flowbite, Flowbite Pro, and
        even Tailwind UI as there is no technical reason stopping you from using
        the best of two worlds.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li>
          <a
            href="https://flowbite.com/pro/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Flowbite Pro
          </a>
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            rel="nofollow"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Tailwind UI
          </a>
        </li>
      </ul>
    </div>
            </div>

            <h2 id="accordion-open-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span className="flex items-center">
        <p className='pr-[20px]'>4</p>
        Mauris facilisis sed metus?
      </span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
           </h2>
           <div
              id="accordion-open-body-1"
               className="hidden"
                aria-labelledby="accordion-open-heading-1"
              >

    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
                        </div>
                   </div>
               </div> 
           </div>

      </div>

      <div className='container mx-auto mt-14'>
              <div className='border-b-2'></div>
       </div>

       <div className='container mx-auto md:mt-11'>
           <div className='grid grid-cols-1 md:grid-cols-3'>
           <div className='lg:my-9 col-span-2 order-2 md:order-1'>
             <div className=' mx-auto p-10 '>
                  <div className='text-[#0032ab] text-[25px] lg:text-[32px] text-center pt-7'>
                  Our experts will answer your questions
                  noreply@envato.com +61 (0) 7 9180 3458
                  </div>

                  <div className='mt-9'>
                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Your Name' className='p-2 pl-[20px] bg-slate-200 rounded' /></div>
                           <div className='grid grid-cols-1'><input type="email" placeholder='Your E-Mail' className='p-2 pl-[20px]  bg-slate-200 rounded' /></div>
                       </div>

                       <div className='mt-5 grid grid-cols-1'>
                            <input type="text" placeholder='Subject' className='p-2  bg-slate-200 rounded' />
                       </div>

                       <div className='mt-5 grid grid-cols-1'>
                            <textarea name="" id="" cols="30" rows="4" placeholder='Message' className='p-2  bg-slate-200 rounded'></textarea>
                       </div>

                       <div className='mt-[20px] text-center'>
                          <button className='bg-[orange] text-white p-2'>Send a Message</button>
                       </div>
                  </div>
             </div>


        </div>
         
         <div className='lg:mt-3 mt-8 order-1 md:order-2 md:mt-[80px] lg:pl-[30px] flex justify-center items-center col-span-1'>
             <img src="https://themes.muffingroup.com/be/transfer/wp-content/uploads/2015/06/home_transfer_faq.jpg" alt="" />
         </div>

           </div>
       </div>

       <Footer/>

    </>
  )
}

export default Faq