import React, { useState } from 'react';
import ItemInCart from '../Components/checkout/ItemInCart';
import { useAddToCart } from '../Components/context/addToCart.context';

const Checkout = () => {
      const [addedToCart, setAddedToCart] = useAddToCart();
      let deletingProduct=[];


  const initialCostCalc=(qty=1)=>{
      let cost= 0;
     addedToCart.forEach(element => {
            cost =qty * element.price +cost;
     });
     return cost;
}
  const [totalCost, setTotalCost]=useState(initialCostCalc());


  const calcTotalCost=(qty, price)=>{
      const cost = qty*price;
      setTotalCost(totalCost+ cost);
   }

  const deleteItem = (item, price) => {
      deletingProduct =addedToCart.filter(
        deleteThisItem => deleteThisItem.id !== item.id
      );
      calcTotalCost(1,-price);
      setAddedToCart(deletingProduct);
    };

  return (
        <>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {addedToCart.map(item => (
        <ItemInCart
          item={item}
          key={item.id}
          deleteItem={deleteItem}
          calcTotalCost={calcTotalCost}
        />
      ))}
    </div>
    <h2>Total cost: {totalCost}</h2>
    </>
  );
};

export default Checkout;
