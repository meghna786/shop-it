import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from 'rsuite';
import CategoryItem from '../Components/categories/CategoryItem';
import products from '../data-files/products.json';

const Categories = () => {
  const { categoryID } = useParams();
  const productsArray = [];
  const filteredArray = [];
  const [isChecked, setIsChecked] = useState(false);

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
          />
        ))}

      <div>
        <Checkbox onChange={onCheck} checked={isChecked}>
          {' '}
          Delivery
        </Checkbox>
      </div>
    <div >
    <Button componentClass={Link} to='/checkout'>Go To Cart </Button>
    </div>

    </div>
  );
};

export default Categories;
