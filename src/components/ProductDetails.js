import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetailsForm from './ProductDetailsForm';
import '../components.css';
import data from '../data';

export default function Product(props) {
    const {id} = useParams();
    const {products} = data;

    const product = data.findProduct(id);

    return (
        <div className='product-details' >
            <ProductList products={products}></ProductList>
            <div className='product-detail'>
                <h1>You Have Chosen Wisely</h1>
                <div className='details-data'>
                    <h2>{product.name}</h2>
                    <h3>{product.model}</h3>
                    <p>${product.price}</p>
                </div>
                <img src={product.image}/>
                <ProductDetailsForm></ProductDetailsForm>
            </div>
        </div>
    )
}