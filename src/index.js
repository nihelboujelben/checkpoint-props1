import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';

const object1= {category:"electronics", name:"ordinateur", price:"5500 TND"}
const object2= {category:"clothes", name:"t-shirt", price:"55 TND"}


const products = [object1, object2]



ReactDOM.render(
  <React.StrictMode>
    <ProductTable produits={products}  />
  </React.StrictMode>,
  document.getElementById('root')
);

 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
