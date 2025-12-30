import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto'>
<div className="w-full pb-12  border-t-4 border-cor5 md:pt-12 mx-auto grid grid-cols-1  gap-8 bg-cor2 pt-12  md:px-auto">
    
    <div className='md:pl-24'>
      <h1 className="font-bold text-lg mb-4 text-cor5" >Contact Information</h1>
      <p className="text-gray-400 text-sm">〒350-0851, Saitama-ken, Saitama-shi, Japan</p>
      <a href="mailto:japanpasabuy@gmail.com" className='text-gray-400 text-sm'>JapanPasaBUY@gmail.com</a>
    </div>

    <div className='md:pl-24'>
      <h1 className="font-bold text-lg mb-4 text-cor5" >Service Areas</h1>
      <ul className="text-gray-400 text-sm">
        <li>City of Vigan, Philippines</li>
        <li>Manila, Philippines</li>
        <li>Saitama, Japan</li>
      </ul>
    </div>

    <div className='md:pl-24'>
      <h1 className="font-bold text-lg mb-4 text-cor5" >Social Media</h1>
 <ul>
    <li><a href="https://instagram.com/japanpabuyan" target="_blank" className="text-gray-400 hover:text-cor-5 transition-colors">
        Instagram: @JapanPaBUYan
      </a>
      </li>
    <li>     
      <a href="https://www.facebook.com/japanpabuyan" target="_blank" className='text-gray-400 hover:text-cor-5 transition-colors'>Facebook page</a></li>
 </ul>
    </div>

  </div>
    </div>
  )
}

export default Footer
