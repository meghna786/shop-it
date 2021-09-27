import React from 'react';
import ItemInCart from '../Components/checkout/ItemInCart';
import {useCart} from '../context/cart.context'; 

const Checkout = () => {
  const [addedToCart, setAddedToCart]=useCart();

  const cartTotal = addedToCart.reduce(
    (currentTotal, item) => currentTotal + item.price * item.qty,
    0
  );
  

  const deleteItem = item => {
    const deletingProduct = addedToCart.filter(
      deleteThisItem => deleteThisItem.id !== item.id
    );
    setAddedToCart(deletingProduct);
  };


  return (
    <>
      <div>
        {addedToCart.map(item => (
          <ItemInCart
            item={item}
            key={item.id}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      {cartTotal === 0 ? (
        <div className="total">Cart is Empty</div>
      ) : (
        <div className="total">Total cost: {cartTotal}</div>
      )}
    </>
  );
};

export default Checkout;
