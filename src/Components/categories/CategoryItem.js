import React, { useEffect, useState } from 'react';
import { Button } from 'rsuite';

const CategoryItem = ({ product }) => {
  const { id, name, price, currency, thumbnail, inStock } = product;

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




  const addToCart = () => {
    const datas = JSON.parse(localStorage.getItem('addedToCart'));
    const costTillNow = parseInt(localStorage.getItem('totalCost'), 10);
    const data = datas.find(d => d.id === id);
    if (data) {
      data.qty += 1;
    } else {
      product.qty = 1;
      datas.push(product);
    }

    setAddedToCart(datas);
    const cost = costTillNow + product.price;
    setTotalCost(cost);
  };


  
  return (
    <div style={{ margin: '2rem' }}>
      <img
        src={thumbnail}
        alt="img"
        style={{ width: '150px', borderRadius: '50px' }}
      />
      <h4>{name}</h4>
      <h6>
        {currency} {price}
      </h6>
      {inStock ? (
        <h5 style={{ color: 'green' }}> inStock </h5>
      ) : (
        <h5 style={{ color: 'red' }}> Out of Stock </h5>
      )}

      <Button disabled={!inStock} onClick={addToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default CategoryItem;
