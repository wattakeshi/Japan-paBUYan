import React from 'react'
import AboutUS from './AboutUS'
import Footer from '../Components/Layout/Footer'
import ClientForm from '../Components/ClientForm'

const SignUP = () => {
  return (
    <div className='min-h-screen w-full bg-[url("/sakurabg.png")] bg-[length:400px] pt-[20px] bg-fixed'>
      <div className='animate-in fade-in slide-in-from-bottom-4 duration-1000 border-4 rounded-2xl m-4 border-cor5 px-6 mx-4 md:w-3/4 md:mx-auto py-12 bg-cor2/90 backdrop-blur-sm shadow-2xl'>

        <h1 className="w-3/4 mx-auto font-black text-cor5 text-center text-[28px] tracking-tight mb-4">
          Welcome to <span className="text-cor5">PaBUYan!</span>
        </h1>

        <p className='text-cor5 font-medium text-[16px] md:text-center leading-relaxed'>
          We are here to make your shopping experience in Japan easier, cheaper, and more personal.
        </p>
        <div className='grid md:grid-cols-3 gap-6 mt-12'>

          <div className="hover:scale-105 transition-transform p-4 rounded-lg bg-cor4/50 border border-cor5/20">
            <h3 className='font-bold text-cor5 text-[18px] mb-2 text-center'>1. Wishlist</h3>
            <p className='text-[14px] text-cor5/80 text-center'>Build your list. We personally discuss details and prices with you.</p>
          </div>

          <div className="hover:scale-105 transition-transform p-4 rounded-lg bg-cor4/50 border border-cor5/20">
            <h3 className='font-bold text-cor5 text-[18px] mb-2 text-center'>2. Sourcing</h3>
            <p className='text-[14px] text-cor5/80 text-center'>We find exactly what you need in-store and show you the best options.</p>
          </div>

          <div className="hover:scale-105 transition-transform p-4 rounded-lg bg-cor4/50 border border-cor5/20">
            <h3 className='font-bold text-cor5 text-[18px] mb-2 text-center'>3. Privacy</h3>
            <p className='text-[14px] text-cor5/80 text-center'>No credit cards needed. We use social media for safe, personal contact.</p>
          </div>

        </div>
      </div>
      <div className='animate-in fade-in slide-in-from-bottom-8 duration-1000 border-4 rounded-2xl m-4 border-cor5 px-6 mx-4 md:w-3/4 md:mx-auto bg-cor2/90 backdrop-blur-sm shadow-xl relative overflow-hidden'>
        <div className="absolute top-0 right-0 bg-cor5 text-white px-4 py-1 rounded-bl-lg font-bold text-xs">
          MUST READ
        </div>

        <h1 className="pt-8 font-bold text-cor5 text-center text-[22px]">PAYMENT TERMS</h1>

        <ul className='space-y-4 py-8'>
          {[
            "Full payment required before shipment.",
            "50% down payment for reserved slots.",
            "Non-refundable once purchased in Japan.",
            "Prices include service fee. Shipping extra."
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-cor5 font-medium border-b border-cor5/10 pb-2">
              <span className="text-green-600">✔</span> {item}
            </li>
          ))}
        </ul>

        <div className='bg-cor5/10 p-4 rounded-lg mb-6'>
          <p className='text-cor5 italic text-sm text-center'>
            <strong>Note:</strong> Prices may change depending on forex rates or shipping adjustments.
          </p>
        </div>
      </div>

      <div className="animate-bounce mt-8 flex justify-center text-cor5 opacity-50 text-xs uppercase tracking-widest">
        Fill the form below to start ↓
      </div>

      <ClientForm />
      <Footer />
    </div>
  )
}

export default SignUP
