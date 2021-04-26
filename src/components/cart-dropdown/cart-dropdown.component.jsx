import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {CartDropdownContainer,CartDropdownButton,CartItemsContainer,EmptyMessageContainer} from './cart-dropdown.styles';
const CartDropdown = ({cartItems, history,dispatch}) => {
    console.log(dispatch);
    return(
<CartDropdownContainer>
    <CartItemsContainer>
     { cartItems.length ?
        (cartItems.map(cartItem => (
                <CartItem key = {cartItem.id} item = {cartItem}/>
            ))
        ) 
        :
        (<EmptyMessageContainer>Your cart is Empty</EmptyMessageContainer>)
    }
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
</CartDropdownContainer>
)};

const mapDispatchToProps = createStructuredSelector({
       cartItems : selectCartItems
});

export default withRouter(connect(mapDispatchToProps)(CartDropdown));