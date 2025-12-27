import React from 'react'
import AboutUS from './AboutUS'
import Footer from '../Components/Layout/Footer'
import ClientForm from '../Components/ClientForm'

const SignUP = () => {
  return (
    <div className='min-h-screen w-full bg-[url("../../src/assets/images/sakurabg.png")] pt-[20px]'>
     <div className='border-4 rounded-xl m-4 border-cor5 px-4 mx-4 md:w-3/4 md:mx-auto py-12 bg-cor2 opacity-80'>
      {/* need to ask the client details about how it works, writing examples in portuguese for faster typing/ */}
      <h1 className=" w-3/4 mx-auto font-bold text-cor5 text-center text-[20px]">Welcome to PaBUYan! </h1>
        <p className=' text-cor5 opacity-97 text-[16px] md:text-center'>We are here to make your shopping experience in Japan easier, cheaper, and more personal. Our goal is to bring the best Japanese products directly to your doorstep in the Philippines. </p>

            
        <ul>
          
        <li className='pb-1 text-cor5 opacity-97 text-[20px] md:text-center pt-8'><strong>Create Your Wishlist</strong></li>
                <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-center'> The website is designed for you to build and consult your personal wishlist. Think of it as a starting point. Since our process is <strong>manual and highly personalized</strong>, once you submit your list, our owner will personally get in touch with you to discuss product details, current prices, and shipping options. </li>

        <li className='pb-1 text-cor5 opacity-97 text-[20px] md:text-center pt-8'><strong>Personalized Sourcing</strong></li>     
                <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-center'> After you select your desired items and specify your preferences (such as sizes, colors, or specific brands), a <strong>PaBUYan</strong> representative will head out to find exactly what you are looking for. We will then contact you to show the best options found in-stores. </li>

        <li className='pb-1 text-cor5 opacity-97 text-[20px] md:text-center pt-8'><strong>Smart Shopping & Privacy</strong></li>
                <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-center'> Our priority is your satisfaction and your wallet. <strong>PaBUYan</strong> always hunts for the best deals, looking for where your product is most affordable before finalizing the quote. </li>

        </ul>
                  <ul className='list-inside list-disc pt-4'>
                <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-left'> <strong>Safe & Simple:</strong> We do not require sensitive payment info (like credit card numbers) or phone numbers on our site. </li>
                <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-left'> <strong>Easy Contact:</strong> We only ask for your Facebook or Instagram handle so we can reach out to you with the results of our search and proceed with your purchase safely and personally. </li>

                  </ul>
           </div>

   
      {/* PAYMENT TERMS */}
      <div className='border-4 rounded-xl m-4 border-cor5 px-4 mx-4 md:w-3/4 md:mx-auto bg-cor2  opacity-80'>
      <h1 className="pt-4 w-3/4 mx-auto font-bold text-cor5 text-center text-[20px]">PAYMENT TERMS</h1>
      <ul className='list-inside list-disc pt-4'>
        <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-center'><strong>Full payment</strong> is required before shipment.</li>
        <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-center'>For <strong>pre-orders</strong> or <strong>reserved slots</strong>, a <strong>50% down payment</strong> is required to confirm your slot.</li>
        <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-center'>The remaining balance must be paid <strong>once items arrive in the Philippines</strong> before delivery or pickup.</li>
        <li className='pb-1 text-cor5 opacity-97 text-[16px] md:text-center'>All payments are <strong>non-refundable</strong> once the order has been purchased in Japan.</li>
        <li className='text-cor5 opacity-97 text-[16px] md:text-center'>Prices already include Japan purchase cost and service fee. <strong>Shipping fee is not included yet</strong>.</li>
        <br></br>
                <p className='text-cor5 opacity-97 text-[16px] md:text-center '><strong>Note:</strong> Prices may change depending on forex rates, Japan shop prices or shipping adjustments.</p>

      </ul>
    </div>
      <ClientForm/>
      <Footer />
    </div>
  )
}

export default SignUP
