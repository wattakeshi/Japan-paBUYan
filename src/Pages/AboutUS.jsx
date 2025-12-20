import React from 'react'
import NavBar from "../Components/Layout/NavBar"
const AboutUS = () => {
  return (
    <div>
      <div className=''>
      <NavBar />
      </div>
    <div className='border-4 rounded-xl m-4 border-cor5 px-4 mx-4 md:w-3/4 md:mx-auto py-12'>
      {/* need to ask the client details about how it works, writing examples in portuguese for faster typing/ */}
      <h1 className=" w-3/4 mx-auto font-bold text-cor3 text-center text-[20px]">Como funciona a importação pela pabuyan?</h1>
        <p className=' text-cor3 opacity-97 text-[16px] md:text-center'>IDK Lorem ipsum dolor sit amet,  tincidunt. Proin placerat, ex a pellentesque finibus, leo ipsum fermentum tortor, ac consectetur nulla eros porta est. Sed eget tincidunt tellus. Maecenas consequatLorem ipsum dolor sit amet,  tincidunt. Proin placerat, ex a pellentesque finibus, leo ipsum fermentum tortor, ac consectetur nulla eros porta est. Sed eget tincidunt tellus. Maecenas consequatLorem ipsum dolor sit amet,  tincidunt. Proin placerat, ex a pellentesque finibus, leo ipsum fermentum tortor, ac consectetur nulla eros porta est. Sed eget tincidunt tellus. Maecenas consequat id nulla efficitur cursus.</p>
           </div>

   
      {/* PAYMENT TERMS */}
      <div className='border-4 rounded-xl m-4 border-cor5 px-4 mx-4 md:w-3/4 md:mx-auto'>
      <h1 className="pt-4 w-3/4 mx-auto font-bold text-cor3 text-center text-[20px]">PAYMENT TERMS</h1>
      <ul className='list-inside list-disc pt-4'>
        <li className='pb-1 text-cor3 opacity-97 text-[16px] md:text-center'><strong>Full payment</strong> is required before shipment.</li>
        <li className='pb-1 text-cor3 opacity-97 text-[16px] md:text-center'>For <strong>pre-orders</strong> or <strong>reserved slots</strong>, a <strong>50% down payment</strong> is required to confirm your slot.</li>
        <li className='pb-1 text-cor3 opacity-97 text-[16px] md:text-center'>The remaining balance must be paid <strong>once items arrive in the Philippines</strong> before delivery or pickup.</li>
        <li className='pb-1 text-cor3 opacity-97 text-[16px] md:text-center'>All payments are <strong>non-refundable</strong> once the order has been purchased in Japan.</li>
        <li className='text-cor3 opacity-97 text-[16px] md:text-center'>Prices already include Japan purchase cost and service fee. <strong>Shipping fee is not included yet</strong>.</li>
        <br></br>
                <p className='text-cor3 opacity-97 text-[16px] md:text-center '><strong>Note:</strong> Prices may change depending on forex rates, Japan shop prices or shipping adjustments.</p>

      </ul>
    </div>
    </div>
  )
}

export default AboutUS
