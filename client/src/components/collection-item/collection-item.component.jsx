import React from "react";
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-buttom.component";

import { connect } from 'react-redux'
import {addCartItem} from '../../redux/cart/cart.actions'

/* Below codes, because we need item and item's element like name, price and imageUrl, so we have to pass the whole item
    from upper component: collection-preview (item={item}); then we instead using "()" after "=>", but using "{}" ,
    so that we can write return() function. Also, we need the item's elements, we can destructor the item;
    Finally, we adding onClick = {()=> addCartItem(item)} to update the store by using redux:
*/
const CollectionItem =({item, addCartItem }) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image'
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton
                onClick={()=> addCartItem(item) }
                inverted> Add to cart </CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null,mapDispatchToProps) (CollectionItem)
