import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import { Route, Switch } from 'react-router';
import Categories from './Pages/Categories';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';
import { CartProvider } from './context/cart.context';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
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
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
