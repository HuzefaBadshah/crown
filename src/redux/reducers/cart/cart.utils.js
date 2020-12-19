export const addItemsToCart = (items, itemToAdd) => {
    const existingItem = items.find((item) => {
        return item.id === itemToAdd.id;
    });

    if(existingItem) {
        return items.map((item) => item.id === existingItem.id ? 
            {...item, quantity: existingItem.quantity + 1} :
            item
        );
    }

    return [...items, {...itemToAdd, quantity: 1}];
};

export const RemoveItemFromCheckout = (items, itemToRemove) => {
    const existingItem = items.find((item) => item.id === itemToRemove.id);
    if(existingItem.quantity > 1) {
        return items.map((item) => item.id === itemToRemove.id ? {...item, quantity:item.quantity - 1} : item);
    } else {
        return items.filter((item) => item.id !== itemToRemove.id);
    }
}