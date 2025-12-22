import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ClientForm = () => {
    const [name, setName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const API_URL = "http://localhost:1337/api/costumers"
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
         localStorage.setItem("pabuyan_user_id", resJSON.data.id);
         localStorage.setItem("pabuyan_user_name", name);
         navigate("/");
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
    <div className=' bg-cor2 h-[740px] w-full py-12 mt-20'>
       <h1 className='py-8 w-3/4 mx-auto font-bold text-cor5 text-center text-[45px]'> Get Started!</h1>
       
      <p className='pb-8 w-4/5 mx-auto text-cor5 text-center text-[16px]'> asedasoeijdasioejasioedjasiodejasioedjasiojedioasjeoisajedoisaejaiosjeoiasjeoias</p>
            <form onSubmit={handleSubmit}>

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Name</p>
                <input type="text" placeholder='Name' value={name} onChange={((e)=>{setName(e.target.value)})}
                 className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2 justify-center'/>

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Family name</p>
                <input type="text" placeholder='Family Name' value={familyName} onChange={((e)=>{setFamilyName(e.target.value)})}
                className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Address</p>
                <input type="text" placeholder='Country / Region/Province / City / Barangay' required
  minLength={15} value={address} onChange={((e)=>{setAddress(e.target.value)})}
                className='px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Contact</p> 
                <input type="text" placeholder='Instagram @ or Facebook URL' value={contact} onChange={((e)=>{setContact(e.target.value)})}
                className=' px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2'/>            

                <input type="submit" className=' mt-8 bg-cor4 border rounded-full mx-auto block font-bold bg-cor2  ' value={loading ? "Saving..." : "Sign Up"}/>
            </form>
    </div>
  )
}

export default ClientForm
