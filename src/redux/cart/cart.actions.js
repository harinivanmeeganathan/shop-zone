import CartActiontypes from './cart.types';

export const toggleCartHidden = () =>({
type : CartActiontypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type : CartActiontypes.ADD_ITEM,
    payload : item
});
