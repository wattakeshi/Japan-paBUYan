import React from 'react'
import { motion } from 'framer-motion'
import AboutUS from './AboutUS'
import Footer from '../Components/Layout/Footer'
import ClientForm from '../Components/ClientForm'

const SignUP = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <div className='min-h-screen w-full bg-[url("/sakurabg.png")] bg-[length:400px]  bg-fixed pt-[20px] '>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className='border-4 rounded-2xl m-4 border-cor5 px-6 mx-4 md:w-3/4 md:mx-auto py-12 bg-cor2/90 backdrop-blur-md shadow-2xl'
      >
        <h1 className="w-3/4 mx-auto font-black text-[#F3F4F6] text-center text-[28px] mb-6">
          Welcome to <span className="text-[#F3F4F6]">PaBUYan!</span>
        </h1>

        <p className='text-cor5 text-center text-[16px] leading-relaxed mb-10'>
          We make your shopping experience in Japan easier, cheaper, and more personal.
        </p>

        <div className='grid md:grid-cols-3 gap-6'>
          {[
            { title: "Wishlist", text: "Build your list. We personally discuss details and prices with you." },
            { title: "Sourcing", text: "We find exactly what you need in-store and show you the best options." },
            { title: "Privacy", text: "No credit cards needed. We use social media for safe contact." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-cor3 border border-cor5/20 text-center"
            >
              <h3 className='font-bold text-[#F3F4F6] text-[18px] mb-2'>{item.title}</h3>
              <p className='text-[14px] text-cor5/80'>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5, margin: "0px 0px -100px 0px" }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className='border-4 rounded-2xl m-4 border-cor5 px-6 mx-4 md:w-3/4 md:mx-auto bg-cor2/90 backdrop-blur-md shadow-xl relative overflow-hidden'
      >
        <div className="absolute top-0 right-0 bg-cor5 text-white px-6 py-1 rounded-bl-xl font-bold text-xs uppercase tracking-widest">
          Terms
        </div>

        <h1 className="pt-8 font-bold text-cor5 text-center text-[22px]">PAYMENT TERMS</h1>

        <ul className='grid md:grid-cols-2 gap-4 py-8'>
          {[
            "Full payment before shipment.",
            "50% down payment for pre-orders.",
            "Non-refundable after purchase.",
            "Service fee included in price."
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-2 text-cor5 text-sm font-medium">
              <span className="text-cor5">◈</span> {text}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-center text-cor5 font-bold text-sm my-8"
      >
        START YOUR WISHLIST BELOW ↓
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ClientForm />
      </motion.div>

      <Footer />
    </div>
  )
}

export default SignUP