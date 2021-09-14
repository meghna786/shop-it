import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Checkbox } from 'rsuite';
import CategoryItem from '../Components/categories/CategoryItem';
import products from '../data-files/products.json';
import Checkout from './Checkout';

const Categories = () => {
  const { categoryID } = useParams();
  const productsArray = [];
  const filteredArray = [];
  const [isChecked, setIsChecked] = useState(false);
  const addedToCart=[];

  const selectedProductsArray = productsArr => {
    productsArr.forEach(product => {
      if (product.categoryId === categoryID) productsArray.push(product);
    });
  };

  const onCheck = () => {
    setIsChecked(p => !p);
  };

  const filteredProductsArray= productsArr =>{
      productsArr.forEach(product => {
        if (product.delivery) 
        filteredArray.push(product);
      });
  }

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {selectedProductsArray(products)}
      {!isChecked &&
        productsArray.length > 0 &&
        productsArray.map(product => (
          <CategoryItem
            product={product}
            key={product.id}
            isChecked={isChecked}
          />
        ))}

      {isChecked && filteredProductsArray(productsArray)}
        {filteredArray.length > 0 &&
        filteredArray.map(product => (
          <CategoryItem
            product={product}
            key={product.id}
            addedToCart={addedToCart}
          />
        ))}

      <div>
        <Checkbox onChange={onCheck} checked={isChecked}>
          {' '}
          Delivery
        </Checkbox>
      </div>

      <Checkout addedToCart={addedToCart}/>
    </div>
  );
};

export default Categories;
