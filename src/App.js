import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import { Route, Switch } from 'react-router';
import { AddToCartProvider } from './Components/context/addToCart.context';
import Categories from './Pages/Categories';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AddToCartProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/category/:categoryID">
              <Categories />
            </Route>

            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </AddToCartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
