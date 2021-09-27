import React from 'react';
import { Alert, Button } from 'rsuite';
import { useCart } from '../../context/cart.context';
import './category-item.scss';

const CategoryItem = ({ product }) => {
  const { id, name, price, currency, thumbnail, inStock } = product;
 
  const [addedToCart, setAddedToCart]=useCart();
 
  const addToCart = () => {
    const datas = [...addedToCart];
    const data = datas.find(d => d.id === id);
    if (data) {
      data.qty += 1;
      Alert.success('Added To Cart', 2000);
    } else {
      product.qty = 1;
      datas.push(product);
      Alert.success('Added To Cart', 2000);
    }

    setAddedToCart(datas);
  };

  return (
    <div className="container-item">
      <img src={thumbnail} alt="img" className="category-item-img" />
      <h4>{name}</h4>
      <h6>
        {currency} {price}
      </h6>
      {inStock ? (
        <h5 style={{ color: 'green' }}> inStock </h5>
      ) : (
        <h5 style={{ color: 'red' }}> Out of Stock </h5>
      )}

      <Button disabled={!inStock} onClick={addToCart} appearance='ghost' color='violet' size='md'>
        Add To Cart
      </Button>
    </div>
  );
};

export default CategoryItem;
