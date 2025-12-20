import React, { useState } from 'react'

const ClientForm = () => {
    const [name, setName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [user, setUser] = useState([])
  return (
    <div className=' bg-cor2 h-[740px] w-full py-12 mt-20'>
       <h1 className='py-8 w-3/4 mx-auto font-bold text-cor5 text-center text-[45px]'> Get Started!</h1>
       
      <p className='pb-8 w-4/5 mx-auto text-cor5 text-center text-[16px]'> asedasoeijdasioejasioedjasiodejasioedjasiojedioasjeoisajedoisaejaiosjeoiasjeoias</p>
            <form>
                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Name</p>
                <input type="text" placeholder='Name'  className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2 justify-center'/>
                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Family name</p>
                <input type="text" placeholder='Family Name' className='px-4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />
                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Address</p>
                <input type="text" placeholder='Address' className='px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2' />
                <p className='py-4 w-4/5 mx-auto text-cor5 text-center text-[16px]'>Contact</p> 
                <input type="text" placeholder='Instagram @ or Facebook URL' className=' px-4 w-3/4 font-bold text-cor1 bg-cor4 border rounded-full mx-auto block border-cor2'/>             
                <input type="submit" className=' mt-8 bg-cor4 border rounded-full mx-auto block font-bold bg-cor2  ' value="sign up"/>
            </form>
    </div>
  )
}

export default ClientForm
