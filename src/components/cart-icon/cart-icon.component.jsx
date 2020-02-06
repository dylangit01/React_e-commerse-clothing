import React from "react";
import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {connect} from 'react-redux'
import {toggleCartIcon} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartIcon, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartIcon}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    // itemCount: cartItems.reduce((accumulatedQuantity, cartItems)=> {
    //     return accumulatedQuantity + cartItems.quantity
    // },0)
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartIcon: () => dispatch(toggleCartIcon())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
