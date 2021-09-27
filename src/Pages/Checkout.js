import React, { useState } from 'react';
import ItemInCart from '../Components/checkout/ItemInCart';
import {useCart} from '../context/cart.context'; 

const Checkout = () => {
  const [addedToCart, setAddedToCart]=useCart();

  const [totalCost, setTotalCost] = useState(()=>{
    const cartTotal = addedToCart.reduce(
      (currentTotal, item) => currentTotal + item.price * item.qty,
      0
    );
     return cartTotal || 0;  
  });
 
   const calcCostWhenIncDec = () => {
    const cartTotal = addedToCart.reduce(
      (currentTotal, item1) => currentTotal + item1.price * item1.qty,
      0
    );
    setTotalCost(cartTotal);
  };

  const deleteItem = item => {
    const deletingProduct = addedToCart.filter(
      deleteThisItem => deleteThisItem.id !== item.id
    );
    setAddedToCart(deletingProduct);

    const cartTotal = deletingProduct.reduce(
      (currentTotal, item1) => currentTotal + item1.price * item1.qty,
      0
    );
    setTotalCost(cartTotal);
  };

  return (
    <>
      <div>
        {addedToCart.map(item => (
          <ItemInCart
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            calcCostWhenIncDec={calcCostWhenIncDec}
          />
        ))}
      </div>
      {totalCost === 0 ? (
        <div className="total">Cart is Empty</div>
      ) : (
        <div className="total">Total cost: {totalCost}</div>
      )}
    </>
  );
};

export default Checkout;
