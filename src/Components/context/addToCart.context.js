/* eslint-disable prefer-const */
import React, { createContext, useContext } from "react";


const AddToCartContext=createContext();

export const AddToCartProvider=({children})=>{
      let addedToCart=[];
      
      return <AddToCartContext.Provider value={addedToCart}>{children}</AddToCartContext.Provider>
}

export const useAddToCart=()=>useContext(AddToCartContext);