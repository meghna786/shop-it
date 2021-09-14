/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'rsuite';

const CategoryItem = ({ product, addedToCart }) => {
  const {
    id,
    name,
    price,
    currency,
    delivery,
    thumbnail,
    inStock,
    categoryId,
  } = product;

const addToCart=()=>{
  addedToCart.push(product);
}

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

      <Button disabled={!inStock} onClick={addToCart}>Add To Cart</Button>
    </div>
  );
};

export default CategoryItem;
