import React from "react";
import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {connect} from 'react-redux'
import {toggleCartIcon} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartIcon, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartIcon}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>
);

const mapStateToProps = state => ({
    // itemCount: cartItems.reduce((accumulatedQuantity, cartItems)=> {
    //     return accumulatedQuantity + cartItems.quantity
    // },0)

    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartIcon: () => dispatch(toggleCartIcon())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
