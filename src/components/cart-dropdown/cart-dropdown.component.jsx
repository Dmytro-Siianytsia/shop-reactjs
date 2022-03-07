import { connect } from "react-redux"

import "./cart-dropdown.styles.scss"

import CustomButton from "../button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { withRouter } from "react-router-dom"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

const CartDropdown = ({ cartItems, history, handleCartVisible }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout")
        handleCartVisible()
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
})

const matDispatchToProps = dispatch => ({
  handleCartVisible: () => dispatch(toggleCartHidden()),
})

export default withRouter(
  connect(mapStateToProps, matDispatchToProps)(CartDropdown)
)
