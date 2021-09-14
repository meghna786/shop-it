import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Grid, Row } from 'rsuite';

const CategoryType = ({category}) => {
  const {name, description, id}=category;
  return (
    <>
      <Grid>
        <Row className="show-grid">
          <Col xs={8} componentClass={Link} to={`/category/${id}`}>
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default CategoryType;
