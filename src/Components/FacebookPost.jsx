import React, { useEffect, useState } from 'react'

const FacebookPost =  () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const POSTURL = `https://pabuyanbackend.onrender.com/api/facebook-posts?sort=createdAt:desc`

        const fetchData = async () => {
             try{
            const res = await fetch(POSTURL)
            const result = await res.json()
           if ( result.data) {
                    setPosts(result.data);}
        }finally{
          setLoading(false)
        }       
           
      
        }

      fetchData();
    },[])
   
    if(loading){
      return <p>Loading...</p>
    }

  return (

    
<div className='flex flex-wrap justify-center gap-6 p-4'>

    {/* TESTE */}
    {posts.map(post => (
      <div key={post.id} className="relative overflow-hidden border-4 border-cor5 rounded-xl 
                  w-[320px] h-[450px] 
                  sm:w-[500px] sm:h-[700px] "> 
    <div className="absolute top-0 left-1/2 -translate-x-1/2 origin-top bg-white
                    scale-[0.64] sm:scale-100 w-[500px] h-[700px]">
      <iframe 
        src={post.URL}
        className="w-full h-[700px]"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
      />
    </div>
  </div>
    ))  }
      
        
     

  

</div>
  )
}

export default FacebookPost