import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import CategoryType from '../Components/home/CategoryType';
import categoriesFile from '../data-files/categories.json';

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoriesFile);
  }, []);
  return (
    <div className="outer-container">
      <div className="container">
        {categories.map(category => (
          <CategoryType category={category} key={category.id} />
        ))}
      </div>
      <Button
        componentClass={Link}
        to="/checkout"
        color="violet"
        className="btn-go-to-cart"
        size="lg"
      >
        Go To Cart{' '}
      </Button>
    </div>
  );
};

export default Home;
