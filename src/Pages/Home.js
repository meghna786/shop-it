import React from 'react';
import { Route, Switch} from 'react-router';
import CategoryType from '../Components/home/CategoryType';
import categories from '../data-files/categories.json';
import Categories from './Categories';

const Home = () => {
  return (
    <Switch>
       <Route exact path="/">
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {categories.map(category => (
            <CategoryType category={category} key={category.id} />
          ))}
        </div>
      </Route>
      <Route exact path="/category/:categoryID">
       <Categories /> 
      </Route>
    </Switch>
  );
};

export default Home;
