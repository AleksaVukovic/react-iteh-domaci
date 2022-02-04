import React from 'react';
import '../components.css';
import data from '../data';

export default function CartItem(props) {
    const {cartItem} = props;

    const removeItem = (cartItem) => {
        data.cart.splice(data.cart.indexOf(cartItem), 1);
        document.getElementById(cartItem.id).style.display = 'none';
    }

    return (
        <div className='cart-item' id={cartItem.id}>
            <div>
                <p>{cartItem.name}</p>
            </div>
            <div>
                <p>{cartItem.model}</p>
            </div>
            <div>
                <p>{cartItem.diameter}</p>
            </div>
            <div>
                <p>{cartItem.material}</p>
            </div>
            <div>
                <p>{cartItem.amount}</p>
            </div>
            <div>
                <p>{cartItem.price}</p>
            </div>
            <div>
                <p>{cartItem.total}</p>
            </div>
            <div>
                <button onClick={()=>removeItem(cartItem)}>Remove</button>
            </div>
        </div>
    )
}