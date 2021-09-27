import React from 'react';
import { Button, Icon } from 'rsuite';
import { useCart } from '../../context/cart.context';
import './item-in-cart.scss';

const ItemInCart = ({ item, deleteItem }) => {
  const { id, name, price, currency, thumbnail } = item;

  const [addedToCart, dispatch] = useCart();

  const data = addedToCart.find(d => d.id === id);
  const { qty } = data;

  const increaseQty = () => {
    dispatch({
      type: 'INCREASE_QTY',
      id,
    });
  };

  const decreaseQty = () => {
    dispatch({
      type: 'DECREASE_QTY',
      id,
      item,
      dispatch,
    });
  };

  return (
    <div className="cart-item-container">
      <div className="img">
        <img src={thumbnail} alt="img" className="img-in-cart" />
      </div>
      <div className="info">
        <h5 className="info-name">{name}</h5>
        <div className="info-price">
          {currency} {price}
        </div>
        <Button onClick={decreaseQty} className="btn-icon">
          <Icon icon="minus-circle" />
        </Button>
        <Button onClick={increaseQty} className="btn-icon">
          <Icon icon="plus-circle" />
        </Button>
        <Button onClick={() => deleteItem(item)} className="btn-icon">
          <Icon icon="close-circle" />
        </Button>
        <span className="info-qty">{qty}</span>
      </div>
    </div>
  );
};

export default ItemInCart;
