import './collection-item.styles.scss'

const CollectionItem = ({id, name, price, imageUrl}) => (
	<div className="collection-item">
		<div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
		<footer className='collection-footer'>
			<span className='name'>{name}</span>
			<span className='price'>{price}</span>
		</footer>

	</div>
)

export default CollectionItem