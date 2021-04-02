export const addItemToCart = (cartIems,cartItemToAdd) =>  {
    const existingCartItem = cartIems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
   if(existingCartItem){
       return cartIems.map(cartItem => 
        cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity : cartItem.quantity+1}
        : cartItem        )
   }             
   return[...cartIems,{...cartItemToAdd,quantity : 1}]; 
};