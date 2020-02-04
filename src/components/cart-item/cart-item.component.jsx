import React from "react";
import './cart-item.styles.scss'

export const CartItem = ({cartItem: {name, price, imageUrl, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt="cart-item"/>
        <div className='item-detail'>
            <span className='name'>{name}</span>
            <span className='price'> {quantity} * ${price}</span>
        </div>
    </div>
);
