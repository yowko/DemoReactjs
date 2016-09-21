import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import ShoppingCartList from './components/ShoppingCartList';


var productList = [];
 for (var i = 1; i <= 5; i++) {
     var product = {
         Url: 'http://placehold.it/100x70',
         Name: 'Product 1',
         Price: 100,
         Qty: 1
     };

     productList.push(product);
 }




ReactDOM.render(
  <ShoppingCartList initialProductList={ productList }/>,
  document.getElementById('root')
);
