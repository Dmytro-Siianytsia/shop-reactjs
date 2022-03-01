import { connect } from "react-redux"

import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

const CartIcon = ({ handleCartVisible, quantityCartItems }) => (
  <div className="cart-icon" onClick={handleCartVisible}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{quantityCartItems}</span>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  quantityCartItems: cartItems.reduce((acc, item) => acc + item.quantity, 0),
})

const mapDispatchToProps = dispatch => ({
  handleCartVisible: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
