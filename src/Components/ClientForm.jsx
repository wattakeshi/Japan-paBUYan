import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ClientForm = () => {
    const [name, setName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const API_URL = "https://pabuyanbackend.onrender.com/api/costumers"
    const handleSubmit = async (e) =>{
      e.preventDefault();

      if (!name.trim() || !familyName.trim() || !address.trim() || !contact.trim()) {
    alert("Please, fill in all fields before signing up!"); return;} 
    
      {  const newCostumer = {data:{
        name: name,
        familyName: familyName,
        address: address,
        contact: contact
        }}
        if (loading) return;
        setLoading(true);

      try{
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {"Content-type" : "application/json"},
          body: JSON.stringify(newCostumer),
        });
        const resJSON = await res.json();

        if(res.ok){
         localStorage.setItem("pabuyan_user_id", resJSON.data.documentId);
         localStorage.setItem("pabuyan_user_name", name);
         navigate("/");
         window.scrollTo(0, 0);
        }else{
          alert("failed to save data.")
        }
      }catch (error){
        console.error("Failure to connect", error)
      }finally{
        setLoading(false);
      }

      }


    };
  return (
     <div className='border-4 rounded-xl m-4 border-cor5 px-4 mx-4 md:w-3/4 md:mx-auto py-12 bg-cor2 opacity-80'>
       <h1 className='py-8 w-3/4 mx-auto font-bold text-cor5 text-center text-[45px]'> Get Started!</h1>
       
      <p className='pb-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'> Fill out the form to create your wishlist, or if you prefer, 
            reach out to us directly through our social media!</p>
    
            <div className='mx-auto text-center'>
                <a href="https://www.facebook.com/japanpabuyan" target="_blank"  
               className='text-cor2 font-bold hover:text-cor4 transition-colors '>
               <span className='text-center rounded-sm border-4 bg-cor5'>Facebook</span>
            </a>
               <span className='text-cor2'>   / /   </span>
                <a href="https://www.instagram.com/japanpabuyan" target="_blank"  
               className='text-cor2 font-bold hover:text-cor4 transition-colors '>
               <span className='text-center rounded-sm border-4 bg-cor5'>Instagram</span>
            </a>
              </div>
         
     
            <form  onSubmit={handleSubmit}>

                <p className='pt-4 pb-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Name</p>
                <input type="text" placeholder='Name' value={name} onChange={((e)=>{setName(e.target.value)})}
                 className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2 justify-center'/>

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Family name</p>
                <input type="text" placeholder='Family Name' value={familyName} onChange={((e)=>{setFamilyName(e.target.value)})}
                className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Address</p>
                <input type="text" placeholder='Country / Region/Province / City / Barangay' required
  minLength={15} value={address} onChange={((e)=>{setAddress(e.target.value)})}
                className='px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Contact</p> 
                <input type="text" placeholder='Instagram @ or Facebook URL' value={contact} onChange={((e)=>{setContact(e.target.value)})}
                className=' px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2'/>            

                <input type="submit" className=' mt-8 bg-cor4 border  mx-auto block font-bold bg-cor2  ' value={loading ? "Saving..." : "Sign Up"}/>
            </form>
    </div>
  )
}

export default ClientForm
