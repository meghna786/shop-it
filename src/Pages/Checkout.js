import React from 'react';
import ItemInCart from '../Components/checkout/ItemInCart';
import { useCart} from '../context/cart.context'; 

const Checkout = () => {
  const [addedToCart, dispatch]=useCart();

  const cartTotal = addedToCart.reduce(
    (currentTotal, item) => currentTotal + item.price * item.qty,
    0
  );
 

  const deleteItem = item => {
    dispatch({
      type:'DELETE_FROM_CART',
      item
    });
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
