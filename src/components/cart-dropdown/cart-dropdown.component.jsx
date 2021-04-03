import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../../components/cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
const CartDropdown = ({cartItems, history,dispatch}) => {
    console.log(dispatch);
    return(
<div className = 'cart-dropdown'>
    <div className = 'cart-items'>
     { cartItems.length ?
        (cartItems.map(cartItem => (
                <CartItem key = {cartItem.id} item = {cartItem}/>
            ))
        ) 
        :
        (<span className = 'empty-message'>Your cart is Empty</span>)
    }
    </div>
    <CustomButton onClick = {() => 
    {
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }}> GO TO CHECKOUT</CustomButton>
</div>
)};

const mapDispatchToProps = createStructuredSelector({
       cartItems : selectCartItems
});

export default withRouter(connect(mapDispatchToProps)(CartDropdown));