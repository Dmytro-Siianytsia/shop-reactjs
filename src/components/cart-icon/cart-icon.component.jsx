import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ handleCartVisible, cartItems }) => (
  <div className='cart-icon' onClick={handleCartVisible}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItems.length}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

const mapDispatchToProps = dispatch => ({
  handleCartVisible: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
