import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'rsuite';
import './item-in-cart.scss';

const ItemInCart = ({ item, deleteItem, calcCostWhenIncDec }) => {
  const { id, name, price, currency, thumbnail } = item;

  const [addedToCart, setAddedToCart] = useState(() => {
    return JSON.parse(localStorage.getItem('addedToCart') || '[]');
  });

  const [qty, setQty] = useState(() => {
    const datas = JSON.parse(localStorage.getItem('addedToCart'));
    const data = datas.find(d => d.id === id);
    return data.qty;
  });

  useEffect(() => {
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
  }, [addedToCart]);

  const increaseQty = () => {
    const datas = JSON.parse(localStorage.getItem('addedToCart'));
    const data = datas.find(d => d.id === id);
    if (data) {
      data.qty += 1;
    }
    localStorage.setItem('addedToCart', JSON.stringify(datas));
    setQty(data.qty);
    setAddedToCart(datas);
    calcCostWhenIncDec(data, 1);
  };

  const decreaseQty = () => {
    const datas = JSON.parse(localStorage.getItem('addedToCart'));
    const data = datas.find(d => d.id === id);
    if (data) {
      if (data.qty === 1) {
        deleteItem(item);
        return;
      }
      data.qty -= 1;
    }
    localStorage.setItem('addedToCart', JSON.stringify(datas));
    setQty(data.qty);
    setAddedToCart(datas);
    calcCostWhenIncDec(data, -1);
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
