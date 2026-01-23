import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ClientForm = () => {
  const [name, setName] = useState("")
  const [familyName, setFamilyName] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const API_URL = "http://localhost:3000/customers"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !familyName.trim() || !address.trim() || !contact.trim()) {
      alert("Please, fill in all fields before signing up!"); return;
    }
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, familyName, address, contact }),
      });
      const resJSON = await res.json();
      if (res.ok) {
        localStorage.setItem("pabuyan_user_id", resJSON.costumer.id);
        localStorage.setItem("pabuyan_user_name", name);
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        alert("Failed to save data.")
      }
    } catch (error) {
      console.error("Failure to connect", error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='border-4 rounded-3xl m-4 border-cor5 px-6 mx-4 md:w-3/4 md:mx-auto py-12 bg-cor2/90 backdrop-blur-md shadow-2xl mb-20'
    >
      <h1 className='py-4 w-full mx-auto font-black text-cor5 text-center text-[40px] md:text-[50px] leading-tight'>
        Get Started!
      </h1>

      <p className='pb-8 w-4/5 mx-auto text-cor5/80 text-center text-[16px] font-medium'>
        Fill out the form to create your wishlist, or reach out to us directly through our social media!
      </p>

      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-12'>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.facebook.com/japanpabuyan"
          target="_blank"
          className='flex items-center justify-center gap-2 bg-[#1877F2] text-white font-bold py-3 px-8 rounded-full shadow-lg w-full md:w-auto'
        >
          <span className='text-lg'>Facebook</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.instagram.com/japanpabuyan"
          target="_blank"
          className='flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-bold py-3 px-8 rounded-full shadow-lg w-full md:w-auto'
        >
          <span className='text-lg'>Instagram</span>
        </motion.a>
      </div>

      <div className="flex items-center gap-4 mb-10">
        <div className="h-[1px] bg-cor5/20 flex-grow"></div>
        <span className="text-cor5/40 font-bold text-xs uppercase tracking-widest">OR USE THE FORM</span>
        <div className="h-[1px] bg-cor5/20 flex-grow"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-cor5 font-bold ml-4 text-sm uppercase">First Name</label>
            <input
              type="text"
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-6 py-4 font-bold text-cor5 bg-white border-2 border-cor5/10 rounded-2xl focus:border-cor4 outline-none transition-all shadow-inner'
            />
          </div>
          <div className="space-y-2">
            <label className="text-cor5 font-bold ml-4 text-sm uppercase">Family Name</label>
            <input
              type="text"
              placeholder='Family Name'
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              className='w-full px-6 py-4 font-bold text-cor5 bg-white border-2 border-cor5/10 rounded-2xl focus:border-cor4 outline-none transition-all shadow-inner'
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-cor5 font-bold ml-4 text-sm uppercase">Full Address</label>
          <input
            type="text"
            placeholder='Region, City, Barangay, Street...'
            required
            minLength={15}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='w-full px-6 py-4 font-bold text-cor5 bg-white border-2 border-cor5/10 rounded-2xl focus:border-cor4 outline-none transition-all shadow-inner'
          />
        </div>

        <div className="space-y-2">
          <label className="text-cor5 font-bold ml-4 text-sm uppercase">Social Media Contact</label>
          <input
            type="text"
            placeholder='Instagram @handle or FB link'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className='w-full px-6 py-4 font-bold text-cor5 bg-white border-2 border-cor5/10 rounded-2xl focus:border-cor4 outline-none transition-all shadow-inner'
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`w-full mt-8 py-5 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all
            ${loading ? 'bg-gray-400' : 'bg-cor5 text-white hover:bg-cor4'}`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
              Saving...
            </span>
          ) : "Sign Up Now"}
        </motion.button>
      </form>
    </motion.div>
  )
}

export default ClientForm