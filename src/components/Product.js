import React from 'react'
import { Link } from 'react-router-dom';
//import ProductList from './ProductList';
import '../components.css';


export default function Product(props) {
    const {product} = props;

    return (
        <Link to={`/products/${product.id}`}>
            <div className='product-item'>
                <div className='product-det'>
                    <h2> {product.name} </h2>
                    <h3> {product.model} </h3>
                    <p> {product.price}$ </p>
                </div>
                <img src={product.image} alt={product.name} className='product-img'></img>
            </div>
        </Link>
    )
}