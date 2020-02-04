import {CartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_ICON:

            return Object.assign({}, state, {hidden: !state.hidden});
            // return {
            //     ...state,
            //     hidden: !state.hidden
            // };
        case CartActionTypes.ADD_ITEM:
            // return Object.assign({}, state, {cartItems: action.payload}) // -> this way is only available for single item change,
            // if of accumulated item, this way is not working, have to use below way:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state
    }
};

export default cartReducer
