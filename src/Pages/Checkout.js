import React, { useState } from 'react';
import ItemInCart from '../Components/checkout/ItemInCart';
import { useAddToCart } from '../Components/context/addToCart.context';

const Checkout = () => {
  let addedToCart = useAddToCart();

  const initialCostCalc=(qty=1)=>{
      let cost= 0;
     addedToCart.forEach(element => {
            cost =qty * element.price +cost;
     });
     return cost;
}
  const [totalCost, setTotalCost]=useState(initialCostCalc());


  const deleteItem = item => {
      addedToCart = addedToCart.filter(
        deleteThisItem => deleteThisItem.id !== item.id
      );
    };

    const calcTotalCost=(qty, price)=>{
       const cost = qty*price;
       setTotalCost(totalCost+ cost);
    }

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
