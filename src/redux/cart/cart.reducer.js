import { CartTypes } from './cart.types'

const initialState = {
	hidden: false
}

const cartReducer = (state = initialState, action) => {
	switch(action.type) {
		case CartTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		default:
			return state
	}
}

export default cartReducer
