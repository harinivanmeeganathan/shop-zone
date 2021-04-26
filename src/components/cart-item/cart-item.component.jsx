import React from 'react';

import {CartItemContainer,CartItemImage,ItemDetailsContainer,NameConatiner} from './cart-item.styles';

const CartItem = ({item : {imageUrl,name,price,quantity}})=> (
    <CartItemContainer>
        <CartItemImage src = {imageUrl} alt = 'item'/>
        <ItemDetailsContainer>
            <NameConatiner>{name}</NameConatiner>
            <NameConatiner> {quantity} * ${price}</NameConatiner>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem ;