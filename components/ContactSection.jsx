'use client'
import React, { useState } from 'react'
import { assets } from "@/assets/assets";
import Image from 'next/image'

const ContactSection = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b3fb2d7-ae19-43b2-b823-d2af6f7c4cb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact' className='py-24 px-6 md:px-24 relative bg-gradient-to-br from-pink-50 to-purple-50'>
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-purple-600'>Touch</span>
        </h2>
        <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
          Got an idea, opportunity, or just want to say hi? ✨  
          Let’s create something amazing together — your message could be the start of something big 🌸🚀
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Image src={assets.mail_icon} alt='email' className='h-5 w-5' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a href='mailto:deysrinjoyee28@gmail.com' className='text-gray-600 hover:text-purple-600 transition-colors'>
                    deysrinjoyee28@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Image src={assets.mobile_icon} alt='phone' className='h-5 w-5' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a href='tel:+91********' className='text-gray-600 hover:text-purple-600 transition-colors'>
                    +91 **********
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Image src={assets.location} alt='location' className='h-5 w-5' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='text-gray-600'>India</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8">
              <h4 className='font-medium mb-4'>Connect with me</h4>
              <div className="flex space-x-4">
                <a href='https://www.linkedin.com/in/srinjoyee-dey' target='_blank' rel="noreferrer">
                  <Image src={assets.Linkedin} alt='LinkedIn' className='w-8 h-8 hover:scale-110 transition-transform' />
                </a>
                <a href='https://x.com/Tinnii_dey' target='_blank' rel="noreferrer">
                  <Image src={assets.Twitter} alt='Twitter' className='w-8 h-8 hover:scale-110 transition-transform' />
                </a>
                <a href='https://github.com/SrinjoyeeDey' target='_blank' rel="noreferrer">
                  <Image src={assets.github} alt='GitHub' className='w-8 h-8 hover:scale-110 transition-transform' />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

            <form onSubmit={onSubmit} className='space-y-6'>
              {/* Name */}
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>Your name</label>
                <input 
                  type='text' id='name' name='name' required 
                  className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500' 
                  placeholder='Enter your name...' 
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>Your email</label>
                <input 
                  type='email' id='email' name='email' required 
                  className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500' 
                  placeholder='hello@gmail.com...' 
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>Type your message</label>
                <textarea 
                  id='message' name='message' rows='4' required 
                  className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none' 
                  placeholder='Hi! I’d love to connect...' 
                />
              </div>

              {/* Button */}
              <button 
                type='submit' 
                className='py-3 px-8 flex items-center justify-center gap-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300'
              >
                Submit now 
                <Image src={assets.right_arrow_white} alt='' className='w-4'/>
              </button>

              <p className='mt-4'>{result}</p>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default ContactSection