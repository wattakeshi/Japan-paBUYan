import React, { useState, useEffect } from 'react'

const AddProductForm = () => {

  const costumerUsername = localStorage.getItem("pabuyan_user_name")
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
      qty: productQty,
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
     <label className="w-full sm:w-32 text-center sm:text-right font-bold text-cor5/80">Details (optional)</label>
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

          <div className='border-4 rounded-[2rem] border-cor5 p-6 w-full bg-cor1/40 backdrop-blur-sm shadow-2xl mt-10'>
  <h2 className='text-center text-cor5 font-black uppercase tracking-widest mb-6'>
    {costumerUsername}'s Wish List
  </h2>

  <div className="space-y-3">
    {wishList.length > 0 ? (
      wishList.map((product) => (
        <div 
          key={product.id} 
          className="flex items-center justify-between bg-cor2 border border-cor3 p-4 rounded-full hover:border-cor5 transition-colors group"  >
          <div className="flex items-center gap-4 ml-2">
            <div className="w-10 h-10 rounded-full bg-cor5 flex items-center justify-center text-cor1 font-bold">
              {product.qty}x
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold leading-none">{product.name}</span>
              <span className="text-cor4 text-xs italic">{product.details || "No details"}</span>
           </div>
          </div>

          <button 
            onClick={() => setWishList(wishList.filter(p => p.id !== product.id))}
            className="mr-4 text-cor4 hover:text-red-400 font-bold transition-colors"
          >
            X
          </button>
        </div>
      ))
    ) : (
      <div className="bg-cor2/50 border border-dashed border-cor3 rounded-full py-8">
        <p className='text-cor5 text-center font-medium '>
         The list is empty! 
        </p>

      </div>
    )}
    <div className='w-full flex'>
    <button className="mt-8 bg-cor5 mx-auto hover:bg-cor4 text-white font-black py-4  rounded-full transition-all transform hover:scale-110">
    SEND REQUEST 
  </button>
  </div>
  </div>
</div>


</div>


  )
}

export default AddProductForm
