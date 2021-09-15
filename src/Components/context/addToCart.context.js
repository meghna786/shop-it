import React, { createContext, useContext, useState } from "react";


const AddToCartContext=createContext();

export const AddToCartProvider=({children})=>{
      const [addedToCart, setAddedToCart]=useState([]);
      
      return <AddToCartContext.Provider value={[addedToCart, setAddedToCart]}>{children}</AddToCartContext.Provider>
}

export const useAddToCart=()=>useContext(AddToCartContext);