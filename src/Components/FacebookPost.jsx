import React, { useEffect, useState } from 'react'

const FacebookPost =  () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const POSTURL = `urlAPIpostFacebook`

        const fetchData = async () => {
             try{
            const res = await fetch(POSTURL)
            const result = await res.json()
            setPosts(result.data || [])
        }
        

        catch(error){
            console.error("fetch error", error);
             }fetchData();
        }
    },[])


  return (
<div className='flex flex-wrap justify-center gap-6 p-4'>

  
  <div className="relative overflow-hidden border-4 border-cor5 rounded-xl 
                  w-[320px] h-[450px] 
                  sm:w-[500px] sm:h-[700px] "> 
    <div className="absolute top-0 left-1/2 -translate-x-1/2 origin-top bg-white
                    scale-[0.64] sm:scale-100 w-[500px] h-full">
      <iframe 
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjapanpabuyan%2Fposts%2Fpfbid027iux72CXPwyBR7i9HxzbiPfTYaUjKaDHrsaMd8MktDuUUTCrDuq71Ak6KEeTGSfBl&show_text=true&width=500"
        className="w-full min-h-[700px]"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
      />
    </div>
  </div>

   
    {/* teste */}
    
</div>
  )
}

export default FacebookPost