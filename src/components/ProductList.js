import React from 'react';
import Product from './Product';
import '../components.css';


export default function ProductList(props) {
    const {products} = props;

    return (
        <div><h1>Watches</h1>
        <div className='product-list' >
            
            {products.map((product) => (
                <Product key={product.id} product={product}></Product>
            ))}
        </div>
        </div>
    )
}