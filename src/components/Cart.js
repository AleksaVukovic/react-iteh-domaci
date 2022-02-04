import React from 'react';
import CartItem from './CartItem';
import '../components.css';

export default function Cart(props) {
    const {cart} = props;

    return (
        <div className='shopping-cart'>
            <h1>Your Selection</h1>
            <div className='cart-item cart-header'> 
                <div>
                    <strong>Name</strong>
                </div>
                <div>
                    <strong>Model</strong>
                </div>
                <div>
                    <strong>Diameter</strong>
                </div>
                <div>
                    <strong>Material</strong>
                </div>
                <div>
                    <strong>Quantity</strong>
                </div>
                <div>
                    <strong>Cost ($)</strong>
                </div>
                <div>
                    <strong>Overall ($)</strong>
                </div>
            </div>
            {cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
            ))}
        </div>
    )
}