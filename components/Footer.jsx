'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='mt-20 relative'>
      {/* Main Footer */}
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          deysrinjoyee28@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; {new Date().getFullYear()} Srinjoyee Dey. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://github.com/SrinjoyeeDey'>Github</a></li>
          <li><a target='_blank' href='https://x.com/Tinnii_dey'>Twitter</a></li>
          <li><a target='_blank' href='https://www.linkedin.com/in/srinjoyee-dey'>Linkedin</a></li>
        </ul>
      </div>

      {/* Floating Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-pink-400 text-white shadow-lg hover:bg-pink-500 transition animate-bounce"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}

export default Footer