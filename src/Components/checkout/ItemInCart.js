/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Icon } from 'rsuite';

const ItemInCart = ({item, deleteItem, calcTotalCost}) => {
      const [qty, setQty]=useState(1);
      const {
            id,
            name,
            price,
            currency,
            delivery,
            thumbnail,
            inStock,
            categoryId,
          } = item;
      
          const increaseQty=()=>{
                setQty(p=>p+1);
                calcTotalCost(1, price);
          }

          const decreaseQty=()=>{
                if(qty<=1){
                     deleteItem(item);
                }
                else 
               { setQty(p=>p-1);
                calcTotalCost(1, -price);
               }
          }
      return (
            <div style={{ margin: '2rem' }}>
                  <img src={thumbnail} alt='img' style={{ width: '150px', borderRadius: '50px' }}/>
                  <h5>{name}</h5>
                  <h5>{currency} {price}</h5>
                  <Button onClick={decreaseQty}><Icon icon='minus-circle' /></Button>
                  <Button onClick={increaseQty}><Icon icon='plus-circle' /></Button>
                  <span>{qty}</span>
            </div>
      )
}

export default ItemInCart;
