import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
        <Image src={assets.profile_img} alt='profile-img' className='rounded-full w-32'/>
        </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Srinjoyee Dey <Image src={assets.profile_img} alt='profile-img' className='rounded-full w-6'/></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Engineering Student  MERN Stack Developer  Java | Python | C</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                💙 Dreamer with deadlines ✨ | Code, coffee & care 💻☕💗 | Feminine urge to dream big, love small circles & glow alone 🌸 | Building, growing & coding one step at a time 🚀
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me<Image src={assets.right_arrow_white} alt='arrow' className='w-4'/></a>
                <a href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume<Image src={assets.download_icon} alt='download' className='w-4'/></a>
            </div>
    </div>
  )
}

export default Header
