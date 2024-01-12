import React from "react";

const Cart = () => {
  // a row with two items 1) CART header followed by (numOfItemsInCart)  2) "Remove all" button (very similar to go back button)
  //
  //
  // then custom number of rows, based on how many different items are in the cart.
  // each row contains 1) a small square image of the product, then 2) a column containing product name and formatted price per unit
  // then 3) that same quantity selector inside SpecifyQuantity ( -  1  + )
  //
  //
  // below all that is a row containing 1) the word Total and 2) the number reflecting total price
  //
  //
  // Finally a checkout button with dark-orange background and white text
  //
  //
  // This Cart component renders when the cart SVG icon is tapped or clicked (since it exists at all screen sizes)
  // When it is open, the main container on the current page should get a blur effect.
  //
  //
  //
  // Question: what happens if either the cart or mobile-menu is open and the other is tapped?  I think
  // the one opened should automatically close and the next one tapped should open.  This problem should
  // only exist at mobile and tablet, since those are the sizes that contain a mobile-menu.
};

export default Cart;
