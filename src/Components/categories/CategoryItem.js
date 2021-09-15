/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import { useAddToCart } from '../context/addToCart.context';

const CategoryItem = ({ product }) => {
  const [productItem, setProduct] = useState({});
  useEffect(() => {
    setProduct(product);
  }, [product]);
  const {
    id,
    name,
    price,
    currency,
    delivery,
    thumbnail,
    inStock,
    categoryId,
  } = productItem;

  const addedToCart = useAddToCart();
  const [addToCartArr, setAddToCart] = useState([]);

  useEffect(() => {
    setAddToCart(addedToCart);
  }, [addedToCart]);

  // const isNotInCart = () => {
  //   if (product && addToCartArr) {
  //     addToCartArr.forEach(item => {
  //       console.log(`is is ${id} and item.id is ${item.id}`);
  //       if (id === item.id) return false;
  //     });
  //   }
  // };

  const addToCart = () => {
    addToCartArr.push(productItem);
  };

  // const itsNotInCart = isNotInCart();

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

      {/* {itsNotInCart && (
        <Button disabled={!inStock} onClick={addToCart}>
          Add To Cart
        </Button>
      )}
      {!itsNotInCart && (
        <Button componentClass={Link} to="/checkout">
          Go To Cart
        </Button>
      )} */}
    </div>
  );
};

export default CategoryItem;
