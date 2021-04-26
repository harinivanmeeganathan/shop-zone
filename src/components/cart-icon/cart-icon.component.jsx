import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import {CartIconContainer,ShoppingIconContainer,ItemCountConatiner} from './cart-icon.styles';


const CartIcon = ({toggleCartHidden, itemCount}) => (
 <CartIconContainer onClick = {toggleCartHidden}>
     <ShoppingIconContainer/>
        <ItemCountConatiner>{itemCount}</ItemCountConatiner>
 </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);