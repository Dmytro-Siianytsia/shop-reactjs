export const addItemToCart = (arr, item) => {
	const existingItem = arr.find(i => i.id === item.id)

	if (existingItem) {
    return arr.map(i => {
			return i.id === item.id ? {...i, quantity: i.quantity + 1} : i
		})
	}
	
	return [...arr, {...item, quantity: 1}]
}
