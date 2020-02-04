import {CartActionTypes} from "./cart.types";

export const toggleCartIcon = () => ({
    type: CartActionTypes.TOGGLE_CART_ICON,
});

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
