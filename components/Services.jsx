import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
👩‍💻 I’m a passionate developer & problem-solver who loves building interactive, user-friendly, and impactful digital solutions. My focus lies in web development (React & Next.js), Python programming, and exploring the exciting world of AI-powered applications.

💡 What I bring:

🚀 Clean, modern, and scalable web applications

🤖 Smart integrations with AI & automation tools

🎨 A balance of technical precision and creative design


I believe in continuous learning and delivering work that doesn’t just function — it inspires, engages, and creates real value. Every project I take on is an opportunity to grow, innovate, and bring fresh ideas to the table.

✨ If you’re looking for someone who’s dedicated, curious, and ready to turn ideas into powerful digital experiences — that’s me.
      </p>

      <div className="grid gap-6 my-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {serviceData.map(({icon,title,description,link},index)=>(
            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-pink-100 hover:shadow-lg shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>
                    {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                </a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
