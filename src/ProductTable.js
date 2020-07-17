import React from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css";


function ProductTable(props) {
 
  return (
    <div className="App">
   <div style={{fontSize:30}}>
     <table class="table" >
  <thead  >
    <tr style={{color:'red'}}>
      <th scope="col">Category</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
<tbody style={{backgroundColor:'#C0D4FD'}}>
  {props.produits.map(product => (
     <tr >
       <td style={{padding:15, textAlign:"center"}}>{product.category}</td>
     <td>{product.name}</td>
     <td>{product.price}</td>
     
   </tr>
  ))}

</tbody>
</table>
</div>
    </div>
  );
}
ProductTable.propTypes = {
  product: PropTypes.array
}


export default ProductTable;
 