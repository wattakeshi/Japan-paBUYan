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
    <div>FacebookPost</div>
  )
}

export default FacebookPost