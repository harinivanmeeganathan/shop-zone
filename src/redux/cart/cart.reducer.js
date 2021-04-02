import CartActiontypes from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActiontypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActiontypes.ADD_ITEM :
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
            default :
            return state;
    }
}

export default cartReducer;