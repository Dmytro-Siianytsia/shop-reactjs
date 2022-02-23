import { connect } from 'react-redux'

import CustomButton from '../button/custom-button.component'
import './collection-item.styles.scss'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem}) => (
	<div className="collection-item">
		<div className='image' style={{backgroundImage: `url(${item.imageUrl})`}} />
		<footer className='collection-footer'>
			<span className='name'>{item.name}</span>
			<span className='price'>{item.price}</span>
		</footer>
		<CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
	</div>
)

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)