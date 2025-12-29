import React from 'react'

const AddProductForm = () => {
  return (
<div className="flex flex-col items-center w-full max-w-lg mx-auto gap-6 mt-10">
  
<div className="w-full flex flex-col sm:flex-row items-center gap-4">
     <label className="w-full sm:w-32 text-center sm:text-right font-bold text-cor5/80">Product </label>
     <input 
      type="text"
      placeholder="Product name"
      className="w-full flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white outline-none focus:border-cor5 transition-all"
    />
</div>

<div className="w-full flex flex-col sm:flex-row items-center gap-4">
     <label className="w-full sm:w-32 text-center sm:text-right font-bold text-cor5/80">Details </label>
     <input 
      type="text"
      placeholder="Color / Size / Flavor / Brand"
      className="w-full flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white outline-none focus:border-cor5"
    />
</div>
<div className="w-full flex flex-col sm:flex-row ">
    <div className=" flex items-center">
       <p className="sm:w-32 mx-auto text-center sm:text-right font-bold text-cor5/80">Qty</p>
       </div>
        <input 
        type="number"
        className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white"
      />
    
</div>

<div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-2">
    <div className="sm:w-32"></div> 
     <label className="flex-1 cursor-pointer bg-cor5 hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full text-center transition-all">
      <span>Upload image 📸</span>
      <input type="file" className="hidden" />
    </label>
</div>

  {/* Botão Adicionar à Lista */}
  <button className="mt-4 w-full bg-white text-cor1 font-black py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
    ADD TO LIST
  </button>

</div>


  )
}

export default AddProductForm
