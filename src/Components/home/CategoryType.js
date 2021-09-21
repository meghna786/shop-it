import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import './home.scss';

const CategoryType = ({ category }) => {
  const { name, description, id } = category;
  return (
    <>
      <div className="category-type">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>

        <Button
          componentClass={Link}
          to={`/category/${id}`}
          className="lets-shop-btn"
          block
          color="cyan"
          size="md"
          appearance="ghost"
        >
          Lets shop
        </Button>
      </div>
    </>
  );
};

export default CategoryType;
