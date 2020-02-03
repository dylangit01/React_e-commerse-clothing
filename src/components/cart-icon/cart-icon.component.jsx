import React from "react";
import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {connect} from 'react-redux'
import {toggleCartIcon} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartIcon}) => (
    <div className='cart-icon' onClick={toggleCartIcon}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' > 0 </span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartIcon: () => dispatch(toggleCartIcon())
});

export default connect(null, mapDispatchToProps) (CartIcon);
