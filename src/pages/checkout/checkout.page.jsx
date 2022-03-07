import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import {
  addItem,
  removeItem,
  removeItemFromCart,
} from "../../redux/cart/cart.actions"

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors"

import "./checkout.styles.scss"

const CheckoutPage = ({
  cartItems,
  cartTotal,
  removeItemFromCart,
  addItem,
  removeItem,
}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem
        key={item.id}
        cartItem={item}
        removeFromCart={removeItemFromCart}
        addItem={addItem}
        removeItem={removeItem}
      />
    ))}
    <div className="total">
      <span>TOTAL: $ {cartTotal}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
})

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
