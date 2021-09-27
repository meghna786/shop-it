import React, { useState } from 'react';
import { Button, Icon } from 'rsuite';
import { useCart } from '../../context/cart.context';
import './item-in-cart.scss';

const ItemInCart = ({ item, deleteItem }) => {
  const { id, name, price, currency, thumbnail } = item;

  const [addedToCart, setAddedToCart]=useCart();

  const [qty, setQty] = useState(() => {
    const datas = [...addedToCart];
    const data = datas.find(d => d.id === id);
    return data.qty;
  });


  const increaseQty = () => {
    const datas = [...addedToCart];
    const data = datas.find(d => d.id === id);
    if (data) {
      data.qty += 1;
    }
    setQty(data.qty);
    setAddedToCart(datas);
  };

  const decreaseQty = () => {
    const datas = [...addedToCart];
    const data = datas.find(d => d.id === id);
    if (data) {
      if (data.qty === 1) {
        deleteItem(item);
        return;
      }
      data.qty -= 1;
    }
    setQty(data.qty);
    setAddedToCart(datas);
  };

  return (
    <div className='cart-item-container'>
      <div className='img'>
      <img
        src={thumbnail}
        alt="img"
        className='img-in-cart'
      />
      </div>
    <div className='info'>
      <h5 className='info-name'>{name}</h5>
      <div className='info-price'>
        {currency} {price}
      </div>
      <Button onClick={decreaseQty} className='btn-icon'>
        <Icon icon="minus-circle" />
      </Button>
      <Button onClick={increaseQty} className='btn-icon'>
        <Icon icon="plus-circle" />
      </Button>
      <Button onClick={() => deleteItem(item)} className='btn-icon'>
        <Icon icon="close-circle" />
      </Button>
      <span className='info-qty'>{qty}</span>
      </div>
    </div>
  );
};

export default ItemInCart;
