import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
