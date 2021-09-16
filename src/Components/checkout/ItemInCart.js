import React, { useState } from 'react'
import { Button, Icon } from 'rsuite';

const ItemInCart = ({item, deleteItem, calcTotalCost}) => {
      const [qty, setQty]=useState(1);
      const {
            name,
            price,
            currency,
            thumbnail,
          } = item;
      
          const increaseQty=()=>{
                setQty(p=>p+1);
                calcTotalCost(1, price);
          }

          const decreaseQty=()=>{
                if(qty<=1){
                     deleteItem(item,price);
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
                  <Button onClick={()=>deleteItem(item,price, qty)}><Icon icon='close-circle' /></Button>
                  <span>{qty}</span>
            </div>
      )
}

export default ItemInCart;
