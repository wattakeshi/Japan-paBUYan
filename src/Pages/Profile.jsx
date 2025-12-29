import React, { useState, useEffect } from 'react'
import NavBar from '../Components/Layout/NavBar'
import Footer from '../Components/Layout/Footer'
import { useNavigate } from 'react-router'

const Profile = () => {
    const [costumerData, setCostumerData] = useState({ 
    name: "",
    familyName: "",
    address: "",
    contact: "",});
    const navigate = useNavigate();
    
        const [loading, setLoading] = useState(true)
        const [isUpdating, setIsUpdating] = useState(false);

        useEffect(() => {
            const ID = localStorage.getItem("pabuyan_user_id")
            const costumerURL = `https://pabuyanbackend.onrender.com/api/costumers/${ID}`
    
            const fetchCostumers = async () => {
                 try{
                const res = await fetch(costumerURL)
                const result = await res.json()
               if ( result.data) {
                        setCostumerData(result.data);}
            }finally{
              setLoading(false)
            }       
               
          
            }
    
          fetchCostumers();
        },[])
       
        if(loading){
          return <p>Loading...</p>
        }


        const handeEditProfile = async (e) =>{
            e.preventDefault()
            setIsUpdating(true);
            const editedData = {
            name: costumerData.name,
            familyName: costumerData.familyName,
            address: costumerData.address,
            contact: costumerData.contact,                
            }
            const ID = localStorage.getItem("pabuyan_user_id")
            const costumerURL = `https://pabuyanbackend.onrender.com/api/costumers/${ID}`

            try{
                const res = await fetch(costumerURL,{
                    method: "PUT",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify({data: editedData})
                });
                if(res.ok){
                    alert("Profile Updated")
                }} catch (error) {
      console.error("Error:", error);
    } finally {
      setIsUpdating(false); 
            }     }


            const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    
    if (confirmDelete) {
        const ID = localStorage.getItem("pabuyan_user_id");
        const costumerURL = `https://pabuyanbackend.onrender.com/api/costumers/${ID}`;

        try {
            const res = await fetch(costumerURL, {
                method: "DELETE",
            });

            if (res.ok) {
                alert("Account deleted successfully.");
                localStorage.clear(); // Limpa os dados para não sobrar rastro
                navigate('/'); // Manda para a Home
            }
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    }
};
    
  return (
    <div>
      <NavBar />
          <div className='min-h-screen w-full bg-[url("/sakurabg.png")] bg-[length:400px] md:py-16 py-8 pb-20 '>

  <div className='border-4 rounded-xl m-4 border-cor5 px-4 mx-4 md:w-3/4 md:mx-auto py-12 bg-cor2 opacity-80'>
       <h1 className='hidden md:block py-8 w-3/4 mx-auto font-bold text-cor5 text-center text-[45px]'> Welcome {costumerData.name}!</h1>
       
      <p className='pb-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'> <strong>EDIT</strong> or <strong>DELETE</strong> your profile settings here, or if you prefer, 
            reach out to us directly through our social media!</p>
    
           <form onSubmit={handeEditProfile}>
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

              <p className='pt-4 pb-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Name</p>
               <input type="text" placeholder='Edit your Name'  value={costumerData.name} onChange={((e)=> setCostumerData({...costumerData, name:e.target.value}))}
                 className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2 justify-center'/>
            
                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Family Name</p>
                <input type="text" placeholder='Edit your Family Name'  value={costumerData.familyName} onChange={((e)=> setCostumerData({...costumerData, familyName:e.target.value}))}
                className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Address</p>
                <input type="text" placeholder='Edit your Country/Region/Province/City/Barangay' required value={costumerData.address} onChange={((e)=> setCostumerData({...costumerData, address:e.target.value}))}
  minLength={15} 
                className='px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />

                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[20px]'>Contact (Facebook or Instagram @)</p> 
                <input type="text" placeholder='Edit your Instagram @ or Facebook URL'  value={costumerData.contact} onChange={((e)=> setCostumerData({...costumerData, contact:e.target.value}))}
                className=' px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2'/>      
                
                <input type="submit" value="Edit profile" className=' mt-8 mx-auto block font-bold text-cor2 border-cor2 border-4 bg-cor5 hover:text-cor4 transition-colors hover:border-4 hover:border-cor4 '
                />
           </form>

              </div>
              <div className='flex px-auto justify-center pt-8 '>
                <button onClick={handleDeleteAccount} className=" px-8 py-2  bg-cor5 text-white font-bold  hover:bg-red-800 transition-all"> DELETE PROFILE </button>
              </div>
              
</div>
      <Footer />
      
    </div>
  )
}

export default Profile
