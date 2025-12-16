import React, { useEffect, useState } from 'react'


const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const API_URL = "http://localhost:1337/api/categories?populate=*"
    const fetchCategories = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setCategories(json.data)
      }catch (error){
        console.log("Fetch error",error)
      }finally{
        setLoading(false)
      }};

                      fetchCategories();
            console.log("terminou o fetch")
    },[])



    //


    if(loading){
      return <div>Loading Categories...</div>
    }

  return (
    <div className='  h-[780px] w-full pt-8 md:pt-16'>
                 <div className='flex justify-between'>
         <h1 className='pb-8 w-3/4 mx-auto text-cor3 text-center text-[40px] font-bold'> categoriadeprodutos </h1>
         <p className='hidden md:block pb-8 w-3/4 mx-auto text-cor3 text-center text-[16]'>veja nossos produtos, separados por kaeporjasjeopsajeopasjeaospejaoskeoapskeopsasoeihasioeas</p>
                 </div>
       <div className='grid grid-cols-2 '>
          {categories.map((category)=>(
            <div key={category.id} className='bg-cor2 items-center md:w-2/3 md:h-[400px] h-[400px] justify-center mb-8 md:mx-auto rounded-4xl hover:bg-cor4 mx-2

            '> 
            <p className='text-cor5 font-bold text-[28px] text-center pt-8'>{category.name}</p>
            </div>)
          )}

       </div>
    </div>
  )
}

export default Categories
