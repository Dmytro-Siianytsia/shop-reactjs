export const addItemToCart = (arr, item) => {
  const existingItem = arr.find(i => i.id === item.id)

  if (existingItem) {
    return arr.map(i => {
      return i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    })
  }

  return [...arr, { ...item, quantity: 1 }]
}

export const removeItemFromCart = (arr, id) => {
  return arr.filter(i => i.id !== id)
}

export const removeItem = (arr, item) => {
  if (item.quantity > 1) {
    return arr.map(i => {
      return i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
    })
  } else {
    return arr.filter(i => i.id !== item.id)
  }
}
