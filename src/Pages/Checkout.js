import React, { useEffect, useState } from 'react';
import ItemInCart from '../Components/checkout/ItemInCart';

const Checkout = () => {
  const [totalCost, setTotalCost] = useState(() => {
    const cost = parseInt(localStorage.getItem('totalCost'), 10);
    if (cost) {
      return cost;
    }
    return 0;
  });

  const [addedToCart, setAddedToCart] = useState(() => {
    return JSON.parse(localStorage.getItem('addedToCart') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('totalCost', JSON.stringify(totalCost));
  }, [totalCost]);

  useEffect(() => {
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
  }, [addedToCart]);

  const calcCostWhenIncDec = (element, qty = 1) => {
    const cost = totalCost + qty * element.price;
    setTotalCost(cost);
  };

  const deleteItem = item => {
    let cost = 0;
    const datas = JSON.parse(localStorage.getItem('addedToCart'));
    const data = datas.find(d => d.id === item.id);
    if (data) {
      cost = totalCost - data.price * data.qty;
    }
    setTotalCost(cost);
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
