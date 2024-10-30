import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

   return (
     <nav className="bg-blue-900 text-white p-4 fixed w-full z-50">
       <div className="container mx-auto px-4 flex justify-between items-center">
         <div className="text-lg font-bold">
           <Link href="#home" scroll={false}>
             <Image
               src="/icons/StareNds.png"
               width={50}
               height={50}
               alt="Stanreds"
               className="size-[80px] max-xl:size-14"
             />
           </Link>
         </div>
         <ul className="flex space-x-4">
           <li>
             <a
               href="#home"
               className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
             >
               Home
             </a>
           </li>
           <li>
             <a
               href="#about"
               className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
             >
               About
             </a>
           </li>
           <li>
             <a
               href="#services"
               className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
             >
               Services
             </a>
           </li>
           <li>
             <a
               href="#projects"
               className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
             >
               Projects
             </a>
           </li>
           <li>
             <a
               href="#contact"
               className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
             >
               Contact
             </a>
           </li>
         </ul>
       </div>
     </nav>
   );
}

export default Navbar
