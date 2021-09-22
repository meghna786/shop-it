import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from 'rsuite';
import CategoryItem from '../Components/categories/CategoryItem';
import productsFile from '../data-files/products.json';

const Categories = () => {
  const { categoryID } = useParams();
  const productsArray = [];
  const filteredArray = [];
  const [isChecked, setIsChecked] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsFile);
  }, []);

  const selectedProductsArray = productsArr => {
    productsArr.forEach(product => {
      if (product.categoryId === categoryID) productsArray.push(product);
    });
  };

  const onCheck = () => {
    setIsChecked(p => !p);
  };

  const filteredProductsArray = productsArr => {
    productsArr.forEach(product => {
      if (product.delivery) filteredArray.push(product);
    });
  };

  return (
    <div>
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
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
          <CategoryItem product={product} key={product.id} />
        ))}

    </div>
   
    <div className="check-box">
        <Checkbox onChange={onCheck} checked={isChecked}>
          {' '}
          Delivery
        </Checkbox>
      </div>
        <Button
          componentClass={Link}
          to="/checkout"
          color="violet"
          className="btn-go-to-cart btn-cart"
        >
          Go To Cart{' '}
        </Button>
    
    </div>
  );
};

export default Categories;
