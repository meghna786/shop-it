import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import { useAddToCart } from '../context/addToCart.context';

const CategoryItem = ({ product }) => {
  const { id, name, price, currency, thumbnail, inStock } = product;

  const [addedToCart, setAddedToCart] = useAddToCart();
  const [isNotInCart, setIsNotInCart] = useState(true);

  const addToCart = () => {
    addedToCart.push(product);
    setAddedToCart(addedToCart);
  };

  const checkIfInCart=() =>{
    addedToCart.forEach(element => {
      if (element.id === id) {
        setIsNotInCart(false);
      }
    });
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

      {checkIfInCart()}
      {isNotInCart && (
        <Button disabled={!inStock} onClick={addToCart}>
          Add To Cart
        </Button>
      )}

      {!isNotInCart && (
        <Button disabled={!inStock} componentClass={Link} to="/checkout">
          Go To Cart
        </Button>
      )}
    </div>
  );
};

export default CategoryItem;
