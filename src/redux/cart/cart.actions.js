import CartActiontypes from './cart.types';

export const toggleCartHidden = () =>({
type : CartActiontypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type : CartActiontypes.ADD_ITEM,
    payload : item
});

export const removeItem =  item => ({
        type : CartActiontypes.REMOVE_ITEM,
        payload : item
});

export const  clearItemFromCart =  item => ({
        type : CartActiontypes.CLEAR_ITEM_FROM_CART,
        payload : item
    }
);