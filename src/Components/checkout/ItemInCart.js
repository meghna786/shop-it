import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'rsuite';

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
    <div style={{ margin: '2rem' }}>
      <img
        src={thumbnail}
        alt="img"
        style={{ width: '150px', borderRadius: '50px' }}
      />
      <h5>{name}</h5>
      <h5>
        {currency} {price}
      </h5>
      <Button onClick={decreaseQty}>
        <Icon icon="minus-circle" />
      </Button>
      <Button onClick={increaseQty}>
        <Icon icon="plus-circle" />
      </Button>
      <Button onClick={() => deleteItem(item)}>
        <Icon icon="close-circle" />
      </Button>
      <span>{qty}</span>
    </div>
  );
};

export default ItemInCart;
