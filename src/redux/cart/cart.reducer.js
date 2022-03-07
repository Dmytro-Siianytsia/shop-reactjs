import { CartTypes } from "./cart.types"
import { addItemToCart, removeItemFromCart, removeItem } from "./cart.utils"

const initialState = {
  hidden: false,
  cartItems: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      }
    case CartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
    default:
      return state
  }
}

export default cartReducer
