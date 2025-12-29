import React, { useState, useEffect } from 'react'

const AddProductForm = () => {

  const [wishList, setWishList] = useState(()=>{
    const saved = localStorage.getItem("pabuyan_wishList")
    return saved? JSON.parse(saved) : []
  })

  useEffect(() => {
  localStorage.setItem('pabuyan_wishList', JSON.stringify(wishList));
}, [wishList]);
  

  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productQty, setProductQty] = useState(1);
  const [productReference, setProductReference] = useState(null); 


  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: productName,
      details: productDetail,
      qyt: productQty,
      reference: productReference
    }
    setWishList([...wishList, newProduct])
    
    setProductName("")
    setProductDetail("")
    setProductQty(1)
    setProductReference(null)
  }
  return (
<div className="flex flex-col items-center w-full max-w-lg mx-auto gap-6 mt-10">
  
<div className="w-full flex flex-col sm:flex-row items-center gap-4">
     <label className="w-full sm:w-32 text-center sm:text-right font-bold text-cor5/80">Product </label>
     <input 
      type="text" value={productName} onChange={(e)=>setProductName(e.target.value)}
      placeholder="Product name"
      className="w-full flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white outline-none focus:border-cor5 transition-all"
    />
</div>

<div className="w-full flex flex-col sm:flex-row items-center gap-4">
     <label className="w-full sm:w-32 text-center sm:text-right font-bold text-cor5/80">Details </label>
     <input 
      type="text" value={productDetail} onChange={(e)=>setProductDetail(e.target.value)}
      placeholder="Color / Size / Flavor / Brand"
      className="w-full flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white outline-none focus:border-cor5"
    />
</div>
<div className="w-full flex flex-col sm:flex-row ">
    <div className=" flex items-center">
       <p className="sm:w-32 mx-auto text-center sm:text-right font-bold text-cor5/80">Qty</p>
       </div>
        <input 
        type="number" value={productQty} onChange={(e)=>setProductQty(e.target.value)}
        className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white"
      />
    
</div>

<div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-2">
    <div className="sm:w-32"></div> 
     <label className="flex-1 cursor-pointer bg-cor5 hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full text-center transition-all">
     <span>{productReference ? "Image Selected!" : "Upload image 📸"}</span>
          <input 
            type="file" 
            className="hidden" 
            onChange={(e) => setProductReference(e.target.files[0])} 
          />
    </label>
</div>

  <button className="mt-4 w-full bg-white text-cor1 font-black py-4 rounded-full shadow-xl hover:scale-105 transition-transform"
  onClick={handleAddProduct}
  >
    ADD TO LIST
  </button>

</div>


  )
}

export default AddProductForm
